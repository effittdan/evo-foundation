import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const base = process.env.FOUNDATION_BASE_URL || 'http://127.0.0.1:5184';
fs.mkdirSync('.hallmark/review', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge' });
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  for (const reducedMotion of ['no-preference', 'reduce']) {
    await page.emulateMedia({ reducedMotion });
    await page.goto(base);
    await page.locator('.hero-image img.is-ready').waitFor();
    await page.evaluate(() => document.fonts.ready);
    const state = await page.locator('.hero-image img').evaluate(el => {
      el.classList.remove('is-ready');
      void el.offsetWidth;
      el.classList.add('is-ready');
      const style = getComputedStyle(el);
      const sample = el.getAnimations()[0];
      if (!sample) throw new Error('Expected a CSS entrance animation');
      sample.pause();
      sample.currentTime = sample.effect.getTiming().duration * 0.2;
      return { name: style.animationName, duration: style.animationDuration, transform: getComputedStyle(el).transform };
    });
    assert.equal(state.name, reducedMotion === 'reduce' ? 'frame-enter' : 'photo-enter');
    assert.equal(state.duration, reducedMotion === 'reduce' ? '0.12s' : '0.45s');
    if (reducedMotion === 'reduce') assert.equal(state.transform, 'none');
    else assert.notEqual(state.transform, 'none');
    await page.screenshot({ path: `.hallmark/review/motion-${reducedMotion}.png` });
    await page.evaluate(() => document.getAnimations().forEach(a => a.finish()));
    const action = page.locator('.hero .button');
    await action.hover();
    await page.waitForTimeout(220);
    const transform = await action.locator('svg').evaluate(el => getComputedStyle(el).transform);
    assert.equal(transform, reducedMotion === 'reduce' ? 'none' : 'matrix(1, 0, 0, 1, 3, 0)');
  }
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.locator('.hero .button').hover();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.locator('.hero .button svg').evaluate(el => getComputedStyle(el).transform), 'none');
  const touch = await browser.newPage({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
  await touch.goto(base);
  assert.equal(await touch.locator('.hero .button svg').evaluate(el => getComputedStyle(el).transitionDuration), '0s');
  console.log('PASS: normal/reduced entrance, pointer feedback, live preference changes, and touch gating');
} finally {
  await browser.close();
}
