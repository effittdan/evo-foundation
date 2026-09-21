# Evologics Foundation

Local React/Vite website prototype. Run `npm install`, then `npm run dev`. Opens at http://127.0.0.1:5184. Production output: `npm run build`. Browser verification: `node scripts/verify.mjs` (uses installed Microsoft Edge).

Eleven public routes plus a not-found state. Research and grants lead the site, with better medical outcomes and patient care as intended goals. Includes a general mission page, patient and professional topic previews, printable appointment worksheet, a five-step grant application preview, research program information, future CME, about and contact setup state. The earlier specialty URL resolves to /our-mission. POSITIONING.md records the September 21 direction.

Published prototype: https://evo-foundation.netlify.app. Netlify project: evo-foundation. The initial production release was deployed from the local build using the Netlify CLI; automatic GitHub deployments are not configured. netlify.toml sets npm run build, the dist publish folder, Node 22, and the SPA fallback for direct page links. To release an update, run netlify build followed by netlify deploy --prod --dir=dist --no-build from this linked project. Set FOUNDATION_BASE_URL to the live URL when running scripts/verify.mjs to check the deployed site.

No backend, analytics, real submissions, persistence, uploads, live course enrollment, credit, or payments. Clinical resources and program terms remain in development. Search-engine indexing remains disabled for this prototype.

Brand: approved provisional Open Corners outlined logo, self-hosted Ubuntu, #3E6838 green. DESIGN.md records the visual system. PRODUCT.md records scope and unconfirmed program details. SURFACE-BRIEF.md records page intent.

Three coordinated AI-generated images (research, collaboration, care) now appear on the homepage and relevant interior pages. See PHOTOGRAPHY.md for references, placements, and illustrative-use boundaries, and PHOTO-PROMPTS.json for the exact prompts. The prior consultation image is retained as an unused alternative; IMAGE-PROVENANCE.txt records its method. Logo assets and fonts come from the approved foundation handoff; Ubuntu license is included in public/assets/fonts/UFL.txt.

Validation: production build and automated browser checks at 1440, 390 and 320 pixels; routes, image loading, overflow, grant errors/sample/review/completion/reset, professional filters, mobile menu/Escape, print stylesheet, and browser errors. Screenshots in .impeccable/review. This is not a complete accessibility certification or clinical-content review.
