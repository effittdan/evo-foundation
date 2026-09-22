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

Status must remain readable without color. Do not reduce body-text opacity or introduce a parallel aqua, lavender, neon, gradient, or gold identity. Footer links have white focus outlines. Photo captions use editorial wording; image provenance is documented in PHOTOGRAPHY.md. The favicon and Apple touch icon use the supplied 2024 Evo marque, proportionally fitted on a square white canvas.

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
- **Illustrative photography:** `public/assets/research.png`, `collaboration.png`, and `care.png` form the current set, generated with the built-in image generation tool. Research leads the homepage and research pages; collaboration and care support the professional and patient sections. Supporting photographs retain their 3:2 ratio in equal-width homepage columns, use intrinsic dimensions and lazy loading, and stack on mobile. Neutral daylight and muted greens unite the set. These fictional subjects are not documentary evidence, beneficiaries, staff, or actual facilities. Exact prompts are in `PHOTO-PROMPTS.json` and embedded in the rasters; `PHOTOGRAPHY.md` records reference observations and placements. Preserve descriptive alt text and the internal image provenance record; public captions omit AI-generation labels at the owner request. The earlier `consultation.png` remains an unused alternative.
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



## September 22 Hallmark refinement

Genre: editorial. The existing brand-managed diptych and resource-index structure remains the homepage family; interior pages retain reading layouts and the application retains its step form. This refinement preserves the approved system rather than rotating catalog themes.

Effective overrides are appended to src/style.css. The mission panel is shorter; the research band lists scientific rigor, patient relevance, and transparent reporting. Phone footer links stack with 44px targets. Content sidebars stack below 900px; the smallest header uses a 175px logo. Primary actions have concise, single-line labels. Error message slots reserve space. Parent navigation stays active on nested routes. Topic reveals and translated arrows are removed; color feedback uses named easing tokens.

Ubuntu remains both display and body face. Exact brand colors are represented in OKLCH in tokens.css; white surfaces and deep-green bands are deliberate existing-system exceptions to Hallmark catalog preferences. Existing print rules and historical spacing remain scoped as before. See HALLMARK-AUDIT.md for findings and verification.

## Exports

These optional interoperability exports mirror tokens.css; this app uses plain CSS, not Tailwind or shadcn. Responsive CSS expressions use a string extension in the DTCG-style export.

### tokens.css
```css
/* Hallmark · existing Evologics Foundation design system, portable tokens */
:root {
  --color-paper: oklch(97.72609% 0.0053758 117.9219);
  --color-paper-2: oklch(94.75614% 0.0159128 130.4215);
  --color-surface: oklch(100.00000% 0.0000000 0.0000);
  --color-ink: oklch(27.29615% 0.0189636 154.4675);
  --color-muted: oklch(49.08824% 0.0195971 150.7695);
  --color-accent: oklch(47.34811% 0.0881272 141.3143);
  --color-accent-ink: oklch(100.00000% 0.0000000 0.0000);
  --color-accent-hover: oklch(40.80282% 0.0761947 141.3130);
  --color-deep: oklch(30.54299% 0.0425343 165.5745);
  --color-rule: oklch(88.50026% 0.0183407 134.9303);
  --color-control: oklch(59.78738% 0.0283165 139.8212);
  --color-focus: oklch(46.60726% 0.1095125 154.7555);
  --color-error: oklch(48.53455% 0.1500630 24.6770);
  --font-display: Ubuntu, Arial, sans-serif;
  --font-body: Ubuntu, Arial, sans-serif;
  --space-3xs: 4px;
  --space-2xs: 8px;
  --space-xs: 12px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  --text-sm: 14px;
  --text-body: 18px;
  --text-display: clamp(2.1rem, 4.2vw, 3.55rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-short: 180ms;
  --radius-input: 4px;
  --rule-fine: 1px;
  --green: var(--color-accent);
  --hover: var(--color-accent-hover);
  --deep: var(--color-deep);
  --canvas: var(--color-paper);
  --sage: var(--color-paper-2);
  --ink: var(--color-ink);
  --muted: var(--color-muted);
  --border: var(--color-rule);
  --control: var(--color-control);
  --focus: var(--color-focus);
  --white: var(--color-surface);
  --error: var(--color-error);
}

```

### Tailwind v4 @theme
```css
@theme {
  --color-paper: oklch(97.72609% 0.0053758 117.9219);
  --color-paper-2: oklch(94.75614% 0.0159128 130.4215);
  --color-surface: oklch(100.00000% 0.0000000 0.0000);
  --color-ink: oklch(27.29615% 0.0189636 154.4675);
  --color-muted: oklch(49.08824% 0.0195971 150.7695);
  --color-accent: oklch(47.34811% 0.0881272 141.3143);
  --color-accent-ink: oklch(100.00000% 0.0000000 0.0000);
  --color-accent-hover: oklch(40.80282% 0.0761947 141.3130);
  --color-deep: oklch(30.54299% 0.0425343 165.5745);
  --color-rule: oklch(88.50026% 0.0183407 134.9303);
  --color-control: oklch(59.78738% 0.0283165 139.8212);
  --color-focus: oklch(46.60726% 0.1095125 154.7555);
  --color-error: oklch(48.53455% 0.1500630 24.6770);
  --font-display: Ubuntu, Arial, sans-serif;
  --font-body: Ubuntu, Arial, sans-serif;
  --spacing-3xs: 4px;
  --spacing-2xs: 8px;
  --spacing-xs: 12px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-2xl: 64px;
  --spacing-3xl: 96px;
  --text-sm: 14px;
  --text-body: 18px;
  --text-display: clamp(2.1rem, 4.2vw, 3.55rem);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in: cubic-bezier(0.7, 0, 0.84, 0);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-short: 180ms;
  --radius-input: 4px;
  --rule-fine: 1px;
}
```

### DTCG tokens
```json
{
  "color-paper": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.9772609,
        0.0053758,
        117.9219
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-paper-2": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.9475614,
        0.0159128,
        130.4215
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-surface": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        1,
        0,
        0
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-ink": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.2729615,
        0.0189636,
        154.4675
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-muted": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.4908824,
        0.0195971,
        150.7695
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-accent": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.4734811,
        0.0881272,
        141.3143
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-accent-ink": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        1,
        0,
        0
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-accent-hover": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.40802819999999995,
        0.0761947,
        141.313
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-deep": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.3054299,
        0.0425343,
        165.5745
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-rule": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.8850026,
        0.0183407,
        134.9303
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-control": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.5978738,
        0.0283165,
        139.8212
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-focus": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.46607259999999995,
        0.1095125,
        154.7555
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "color-error": {
    "$value": {
      "colorSpace": "oklch",
      "components": [
        0.48534550000000004,
        0.150063,
        24.677
      ],
      "alpha": 1
    },
    "$type": "color"
  },
  "font-display": {
    "$value": [
      "Ubuntu",
      "Arial",
      "sans-serif"
    ],
    "$type": "fontFamily"
  },
  "font-body": {
    "$value": [
      "Ubuntu",
      "Arial",
      "sans-serif"
    ],
    "$type": "fontFamily"
  },
  "space-3xs": {
    "$value": {
      "value": 4,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "space-2xs": {
    "$value": {
      "value": 8,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "space-xs": {
    "$value": {
      "value": 12,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "space-sm": {
    "$value": {
      "value": 16,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "space-md": {
    "$value": {
      "value": 24,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "space-lg": {
    "$value": {
      "value": 32,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "space-xl": {
    "$value": {
      "value": 48,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "space-2xl": {
    "$value": {
      "value": 64,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "space-3xl": {
    "$value": {
      "value": 96,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "text-sm": {
    "$value": {
      "value": 14,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "text-body": {
    "$value": {
      "value": 18,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "text-display": {
    "$value": "clamp(2.1rem, 4.2vw, 3.55rem)",
    "$type": "string",
    "$extensions": {
      "css": {
        "responsive": true
      }
    }
  },
  "ease-out": {
    "$value": [
      0.16,
      1,
      0.3,
      1
    ],
    "$type": "cubicBezier"
  },
  "ease-in": {
    "$value": [
      0.7,
      0,
      0.84,
      0
    ],
    "$type": "cubicBezier"
  },
  "ease-in-out": {
    "$value": [
      0.65,
      0,
      0.35,
      1
    ],
    "$type": "cubicBezier"
  },
  "dur-short": {
    "$value": {
      "value": 180,
      "unit": "ms"
    },
    "$type": "duration"
  },
  "radius-input": {
    "$value": {
      "value": 4,
      "unit": "px"
    },
    "$type": "dimension"
  },
  "rule-fine": {
    "$value": {
      "value": 1,
      "unit": "px"
    },
    "$type": "dimension"
  }
}
```

### shadcn/ui CSS variables
```css
:root {
  --background: var(--color-paper);
  --foreground: var(--color-ink);
  --primary: var(--color-accent);
  --primary-foreground: var(--color-accent-ink);
  --muted: var(--color-paper-2);
  --muted-foreground: var(--color-muted);
  --border: var(--color-rule);
  --input: var(--color-control);
  --ring: var(--color-focus);
  --radius: var(--radius-input);
}
```
