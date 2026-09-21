import { chromium } from "@playwright/test";
import fs from "node:fs";
import assert from "node:assert/strict";
fs.mkdirSync(".impeccable/review", { recursive: true });
const browser = await chromium.launch({ headless: true, channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const base = process.env.FOUNDATION_BASE_URL || "http://127.0.0.1:5184";
const routes = [
  "/",
  "/patients",
  "/professionals",
  "/our-mission",
  "/research",
  "/research/grants",
  "/research/apply",
  "/professionals/cme",
  "/patients/preparing-for-your-appointment",
  "/about",
  "/contact",
  "/missing",
];
for (const width of [1440, 390, 320]) {
  await page.setViewportSize({ width, height: 1000 });
  for (const route of routes) {
    await page.goto(base + route);
    await page.locator("h1").waitFor();
    await page.evaluate(() => document.fonts.ready);
    for (const picture of await page.locator('img[loading="lazy"]').all()) {
      await picture.scrollIntoViewIfNeeded();
      await picture.evaluate(img => img.decode());
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.locator('img').evaluateAll(images => Promise.all(images.map(img => img.decode())));
    assert.equal(await page.locator("h1").count(), 1, route);
    assert.ok(!/endometriosis|ob\/gyn|gynecology/i.test(await page.locator('body').innerText()), `Retired specialty copy: ${route}`);
    assert.ok(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Overflow: ${width} ${route}`,
    );
    assert.ok(
      await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.every((i) => i.complete && i.naturalWidth > 0),
        ),
      `Image: ${route}`,
    );
    if (route === "/" && width !== 320)
      await page.screenshot({
        path: `.impeccable/review/${width === 1440 ? "desktop" : "mobile"}.png`,
        fullPage: true,
      });
  }
}
await page.setViewportSize({ width: 1440, height: 1000 });
await page.goto(base + '/our-focus/endometriosis');
await page.locator('h1').waitFor();
assert.equal(new URL(page.url()).pathname, '/our-mission');
assert.ok((await page.locator('h1').innerText()).includes('Advancing research'));
await page.goto(base + "/research/apply");
await page.getByRole("button", { name: "Continue", exact: true }).click();
assert.ok(await page.getByRole("alert").isVisible());
assert.ok(
  await page.locator('textarea[aria-invalid="true"]').evaluateAll((fields) =>
    fields.every((field) =>
      field
        .getAttribute("aria-describedby")
        .split(/\s+/)
        .every((id) =>
          document.getElementById(id)?.textContent.includes("Enter an example"),
        ),
    ),
  ),
);
await page.getByRole("button", { name: "Fill with example data" }).click();
for (let i = 0; i < 4; i++)
  await page.getByRole("button", { name: "Continue", exact: true }).click();
await page.evaluate(() => window.scrollTo(0, 0));
await page.screenshot({
  path: ".impeccable/review/application.png",
  fullPage: true,
});
await page.getByRole("button", { name: "Finish preview", exact: true }).click();
assert.ok(
  await page
    .getByRole("heading", { name: "Preview complete.", exact: true })
    .isVisible(),
);
assert.ok(
  await page
    .getByText("No application has been submitted.", { exact: false })
    .isVisible(),
);
await page.getByRole("button", { name: "Start again" }).click();
assert.equal(await page.getByLabel("Investigator name").inputValue(), "");
await page.goto(base + "/professionals");
await page
  .getByRole("button", { name: "Research literacy", exact: true })
  .click();
assert.equal(await page.locator(".topic-button").count(), 2);
await page.locator(".topic-button").first().click();
assert.ok(await page.locator(".topic-detail").isVisible());
await page.evaluate(() => window.scrollTo(0, 0));
await page.screenshot({
  path: ".impeccable/review/professionals.png",
  fullPage: true,
});
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(base + "/");
await page.getByRole("button", { name: "Menu" }).click();
assert.equal(
  await page
    .getByRole("button", { name: "Close" })
    .getAttribute("aria-expanded"),
  "true",
);
await page.keyboard.press("Escape");
assert.equal(
  await page
    .getByRole("button", { name: "Menu" })
    .getAttribute("aria-expanded"),
  "false",
);
await page.goto(base + "/patients/preparing-for-your-appointment");
await page.emulateMedia({ media: "print" });
assert.equal(await page.locator("header").isVisible(), false);
assert.equal(await page.locator(".writing-space").count(), 6);
assert.deepEqual(errors, []);
console.log(
  "PASS: 12 routes at 1440, 390, 320px; no overflow or broken images; grant validation/review/completion/reset; learning filters; mobile menu/Escape; print worksheet; no browser errors.",
);
await browser.close();
