---
name: Evologics Foundation
description: A research-led foundation identity using Evologics green, Ubuntu, and opposing corner frames, connecting scientific inquiry with better patient care.
colors:
  primary: "#3E6838"
  primary-hover: "#31542C"
  primary-deep: "#18362A"
  surface: "#FFFFFF"
  canvas: "#F7F8F4"
  sage: "#EAF0E5"
  ink: "#202A23"
  muted: "#59645B"
  border: "#D4DCD0"
  control-border: "#778474"
  focus: "#106B3D"
  error: "#A33131"
  print-ink: "#000000"
  print-notice-border: "#777777"
  print-writing-rule: "#999999"
typography:
  display:
    fontFamily: "Ubuntu, Arial, sans-serif"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Ubuntu, Arial, sans-serif"
    fontWeight: 500
    lineHeight: 1.17
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Ubuntu, Arial, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Ubuntu, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  interface:
    fontFamily: "Ubuntu, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.5
  metadata:
    fontFamily: "Ubuntu, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  none: "0px"
  small: "4px"
spacing:
  small: "8px"
  compact: "12px"
  base: "16px"
  gutter: "24px"
  block: "32px"
  group: "48px"
  section-mobile: "56px"
  section: "96px"
components:
  page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.interface}"
    rounded: "{rounded.small}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.surface}"
  notice:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.primary-deep}"
    padding: "20px 24px"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "12px 15px"
    rounded: "{rounded.small}"
  error-message:
    textColor: "{colors.error}"
  footer:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.surface}"
---

# Design System: Evologics Foundation

## Overview

An approachable educational institution with scientific discipline. Light space, strong green typography, quiet rules, and purposeful imagery express the approved Open Corners direction. The opposing corners suggest room for learning and inquiry. The identity remains related to Evologics while welcoming patients and professionals.

This refresh records the direct React/Vite implementation in `src/style.css` and `src/main.jsx` on September 19, 2026. The user-approved invariants are Open Corners variation 02, Ubuntu, and Evologics green. American Amnion is a reference for restraint and framing. Source precedence remains latest user instructions, approved concept, supplied brand assets, this guide, then reference sites. The older shared Evologics font and green choices do not override this project.

Use the provisional outlined SVGs in `public/assets/`, green on light surfaces and white in the footer. They are reconstructions of the approved concept using Ubuntu outlines, not final trademark clearance. Product state and claim boundaries live in `PRODUCT.md`; surface composition lives in `SURFACE-BRIEF.md`. Review evidence is in `REVIEW.md`; this document does not independently certify accessibility or production readiness.

## Colors

The palette is a restrained green identity on warm light surfaces. Frontmatter records the actual colors; CSS custom properties are their runtime counterparts.

- **Primary:** Evologics green for identity, actions, headings, and links; hover green for filled-action feedback; deep green for the research band and footer.
- **Neutral:** white for fields and paper; canvas for the page; pale sage for emphasis panels; ink for body text; muted ink for secondary text; pale border for decorative rules; stronger control border for interactive boundaries.
- **Interaction:** focus green for the explicit keyboard outline; error red with a written explanation. Notices use deep green on sage, not a separate warning palette.
- **Print:** black text and white paper, with the print notice border and writing-rule grays reserved for worksheet structure. These grays are intentional output colors, not additions to the screen brand palette.

Status must remain readable without color. Do not reduce body-text opacity or introduce a parallel aqua, lavender, neon, gradient, or gold identity. Footer links have white focus outlines. Keep a visible illustrative-image label beside the consultation photograph.

## Typography

Ubuntu is used throughout, loaded locally at 400, 500, and 700 with `font-display: swap`; synthesis is disabled. The font licence is in `public/assets/fonts/UFL.txt`. SVG logo lettering is outlined. Logo widths are 240px by default, 205px at 1100px and below, and 190px at 650px and below. Preserve the full wordmark and opposing frames.

The root is 18px/1.65, so rem values use an 18px basis. The frontmatter describes the shared heading/body roles. Default h1 size is `clamp(2.25rem, 4.3vw, 3.55rem)` and h2 size is `clamp(1.7rem, 2.8vw, 2.4rem)`. These fluid sizes are recorded here because designmd 0.3.0 rejects clamp expressions as frontmatter dimensions. Paragraphs have a 70ch maximum and generally 20px top spacing. Headings use weight 500 and balanced wrapping. The implementation deliberately uses local editorial sizes, rather than the earlier handoff's fixed six-step ramp:

- Hero: `clamp(2.3rem, 4.4vw, 3.55rem)` at 1.09; 3rem at 1100px, 2.6rem at 900px, then `clamp(2.1rem, 7.9vw, 3rem)` at 650px. Supporting copy is 19px, 17px at 900px, and 18px on mobile.
- Major green focus and research headings use their own clamps up to 3.1rem and 3.2rem; mobile sets both to 36px. Interior page titles become 38px on mobile. Introductory copy is 21px, then 19px on mobile.
- Local reading headings are 23–30px: resource titles 23px/22px mobile; sidebar headings 25px; topic details 27px; application headings 29px/26px mobile. Worksheet headings are 24px/22px mobile. General title styling remains the frontmatter default.
- Controls are principally 16px; topic buttons 20px/18px mobile; field labels 17px; error text 15px. Navigation is 15px, reduced to 14px at 1100px.
- Final cascade rules set preview status, resource status, image captions including the illustrative label, footer legal/status copy, and topic metadata to 14px. Application steps are 13px on desktop and 14px with wrapping on mobile. Earlier smaller declarations in the stylesheet are overridden.
- The decorative worksheet thumbnail is `aria-hidden`. Its miniature paper label is intentionally 9px and its sample title 21px. This is artwork, not a reading surface or a substitute for the linked resource title. The actual printable worksheet uses full-size accessible headings. Its outer decorative caption is 26px, 23px in the tablet/mobile treatments.

Uppercase is limited to short labels and the outlined FOUNDATION wordmark. Do not use synthetic 600 weight or treat decorative miniature type as a general interface token.

## Layout

The normal container is capped at 1200px with 48px side gutters; at 1100px it has 32px gutters; at 650px it has 20px gutters. The header uses a separate 1320px cap with 40px gutters, then 24px at 1100px and 20px at 650px. Normal section rhythm is 96px, reduced to 56px at 650px.

Observed breakpoints are 1500px minimum and 1100px, 900px, and 650px maximum. At 900px navigation becomes a collapsible in-flow list. At 650px hero, editorial, split, and reading layouts become single-column; the footer retains two link columns below its full-width brand. Application steps wrap into rows of three, and action controls wrap. Interior reading layouts use a 280px sidebar, then 230px and 210px before stacking. Worksheet, application, and narrow reading surfaces cap at 820px, 900px, and 780px respectively.

Images use fixed responsive heights and `object-fit: cover`: the hero is 410px normally, 440px at 1500px, 380px at 1100px, 360px at 900px, and 290px at 650px. Its horizontal focal position is 49%, becoming centered on mobile.

Print styles remove navigation, footer, status bar, breadcrumb, skip link, and the worksheet print button. They expand the container, use a 12pt root and lede, 26pt title, 14pt writing headings, 10pt notice, 25px ruled writing spaces, and prevent splits within each writing group. Notice text retains the deep-green screen color; the main text, title, and links become black. This describes the implemented worksheet treatment, not a general print layout for every route.

## Elevation & Depth

Flat surfaces, tonal bands, and thin rules carry the structure. The sole shadow is the decorative worksheet paper (`0 8px 20px #18362a12`), rotated -8 degrees. There are no floating navigation panels or dialogs in this build.

Links and buttons transition color, background, and border over 180ms. Resource arrows move 5px over 200ms. Topic detail reveals its clip over 220ms with ease-out. Content is otherwise visible immediately. Reduced-motion preferences disable animation and transitions. Sidecar extensions capture these behaviors.

## Shapes

Opposing top-left and bottom-right corners are the signature. Outside the logo, the hero frame uses 70px arms with 2px strokes and square corners. Preserve their sparing use. Buttons, filters, step markers, and fields use the small radius; editorial bands and ruled rows remain square. Do not introduce pill primary actions, blobs, DNA ornamentation, glass, glows, or heavy card shadows.

## Components

- **Header:** full provisional logo, five navigation links, active-page underline, skip link, and a mobile Menu/Close toggle with `aria-expanded`. Escape closes the menu and returns focus to its toggle. Navigation expands in normal document flow.
- **Primary action:** Ubuntu Medium, 50px minimum height, generous arrow gap, filled green/white, and hover green. Text actions have a 44px minimum height and an underlined green rule. The research band reverses its action to sage/deep green, turning white on hover.
- **Audience and resource rows:** genuine links with title, description, optional status, one quiet divider, and directional arrow feedback. Topic controls expand a sage detail area; professional category filters use selected fill and `aria-pressed`.
- **Notices and preview state:** sage panels with plain-language availability. The grant form has four entry steps plus review, required textareas, associated inline errors and an alert summary, example fill, reset, and truthful completion. Input exists only in page memory; uploads are unavailable. CME and contact pages describe future availability.
- **Fields:** white surface, strong 1px boundary, resizable textarea, visible label, error border plus explanation, and a 3px focus outline offset 5px. Do not replace labels with placeholders.
- **Worksheet feature:** CSS-drawn paper illustration is hidden from assistive technology; the linked title and description remain the meaningful accessible content. The destination provides a real print action and ruled writing sections.
- **Illustrative photography:** `public/assets/research.png`, `collaboration.png`, and `care.png` form the current set, generated with the built-in image generation tool. Research leads the homepage and research pages; collaboration and care support the professional and patient sections. Supporting photographs retain their 3:2 ratio in equal-width homepage columns, use intrinsic dimensions and lazy loading, and stack on mobile. Neutral daylight and muted greens unite the set. These fictional subjects are not documentary evidence, beneficiaries, staff, or actual facilities. Exact prompts are in `PHOTO-PROMPTS.json` and embedded in the rasters; `PHOTOGRAPHY.md` records reference observations and placements. Preserve AI-generated illustrative captions and descriptive alt text. The earlier `consultation.png` remains an unused alternative.
- **Footer:** deep green, reversed provisional logo, navigation, readable development status, and the Evologics relationship. No borrowed address, invented contact channel, or unsupported entity/credit claim.

## Do's and Don'ts

- **Do** preserve the approved logo, actual Ubuntu fonts, palette, quiet rules, and broad light surfaces.
- **Do** keep print-only grays and miniature decorative type scoped to their recorded roles.
- **Do** preserve keyboard focus, reduced motion, meaningful labels, responsive reflow, and the image provenance chain.
- **Do** retain accurate preview and availability labels; obtain verified content before replacing them with clinical, grant, or credit claims.
- **Don't** transfer parent-company sales styling, product imagery, purchasing actions, reference-site assertions, or accreditation seals into this identity.
- **Don't** invent nonprofit status, trustees, funded projects, clinical reviews, outcome statistics, testimonials, or CME credentials.
- **Don't** turn every paragraph into a card, add progress counters as decoration, or use research questions as proof of product benefit.


## September 21 content hierarchy

The homepage now leads with research and grants: mission hero, intended patient impact, researcher pathways, responsible grant support, then professional and patient education. Our mission replaces the prior specialty page. Existing visual tokens remain unchanged. See POSITIONING.md for rationale and reference-site lessons.

