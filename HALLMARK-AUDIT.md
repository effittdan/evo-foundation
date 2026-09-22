<!-- Hallmark · pre-emit critique: P4 H4 E4 S4 R4 V4 -->
# Hallmark audit and refinement — September 22, 2026

Scope: the existing Evologics Foundation website. Reviewed the deployed baseline, source, and locked DESIGN.md; implemented an in-place refinement rather than selecting an unrelated theme. Ubuntu, the supplied logo and favicon, the green palette, images, routes, and prototype status remain authoritative.

## Ranked findings and resolutions

| Severity | Finding | Evidence in baseline | Implemented correction |
| --- | --- | --- | --- |
| Major | Repeated mission statements delay useful detail | `src/main.jsx`, Home: hero, mission panel, and research band repeat science/care language | Shortened the hero and mission panel; expressed the research band as three concrete proposed review principles. |
| Major | Wrapped action and footer labels | `src/main.jsx`, Footer and Research; `src/style.css`, two-column mobile footer and narrow research sidebar | Shortened action labels; single-column phone footer; tablet sidebars stack before actions become cramped; explicit single-line CTA styling. |
| Major | Missing system reference and dispersed tokens | `src/style.css`, existing root palette with no Hallmark system stamp | Recorded the existing design system and added portable tokens, reusing existing variable names through aliases. |
| Minor | Parent navigation loses context on child pages | `src/main.jsx`, Header exact-path comparison | Research and professional navigation stays highlighted on child routes, using `aria-current="location"`. |
| Minor | Form error slots appear only after validation | `src/main.jsx`, Apply field errors | Reserved a per-field message line and added `aria-required`; preserved the preview workflow and inline error associations. |
| Minor | Redundant motion signals | `src/style.css`, resource arrow translation and topic clip reveal | Removed arrow translation and clip reveal; retained restrained color feedback and added pressed states. |
| Minor | Intrinsic grid and narrow header fragility | `src/style.css`, image grids and mobile header | Added `minmax(0, …)` tracks, long-word heading wrapping, and a compact 320px header. |

Baseline summary: **0 critical · 3 major · 4 minor**. Findings are resolved within this pass; these are design-review judgments, not an accessibility certification.

## Verification

- Production build passes.
- Existing functional suite passes on 12 routes (including 404) at 320, 375, 414, 768, and 1440px: no root overflow, clipped primary actions, or broken images.
- Grant required-field errors, example fill, review, preview completion, reset, professional filters, mobile menu/Escape, legacy redirect, and printable worksheet pass.
- Homepage visually inspected at 320, 375, 414, 768, and 1280px. At 1280×800 the primary action ends at approximately 584px, above the fold.
- Computed foreground/background checks on the 11 public routes found no default-state text contrast failures; minimum measured ratio was 5.58:1. This does not cover every possible interactive state or image pixel.
- Screenshots and contrast measurements are local review evidence in `.hallmark/review/` (ignored by Git).

## Hallmark applicability

This is a refinement of an approved system, not a claim of 58/58 catalog compliance. The existing brand overrides Hallmark's generic font-pairing, accent-area, and theme-rotation preferences. The approved deep-green bands, Ubuntu-only typography, white form surfaces, and existing route structure remain. Linked resource descriptions and topic titles may span lines; short action labels and navigation remain single-line. Async loading states are not invented for a frontend-only prototype.

The existing global stylesheet is retained and refinements are appended. Its older raw spacing declarations and print-specific values remain technical debt rather than being rewritten merely to satisfy a stylistic rule. New shared tokens are portable through `tokens.css` and DESIGN.md exports.

Verdict: a clearer research-led site with more useful hierarchy and more robust small-screen controls. It still represents programs in development; design review does not establish legal status, grant availability, clinical-content approval, or CME accreditation.
