# Alder & Stone landscaping demo: Implementation Plan

> Execution: **Native** (superpowers-executing-plans in this session; small verified steps).
> Spec: docs/brainstorm.md, PRODUCT.md, DESIGN.md.

**Goal:** a one-page, config-driven landscaping demo site, deployed as a noindex preview.
**Architecture:** Astro 7 static output + Tailwind v4. `src/config/business.ts` is the only content source; components read from it; `src/lib/schema.ts` turns it into LocalBusiness JSON-LD.
**Tech:** Node 22, Astro, Tailwind v4, Fontsource (Bricolage Grotesque, Public Sans), Phosphor icons, Playwright for screenshots.

## Global constraints
- All visible copy: polished professional English. Zero em/en dashes in visible text.
- No testimonials, reviews, ratings, or social-proof claims. No real business details.
- No eyebrow labels, section numbers, icon-card grids, gradients, purple.
- demoMode true => sample banner + `<meta name="robots" content="noindex, nofollow">`; robots.txt `Disallow: /`.
- Every image local, WebP, <= 2000px, credited in IMAGE_CREDITS.md and in the footer.

## File structure
- `src/config/business.ts` (rewrite): types + sample data (services, seasons, areas, gallery, credits, hours).
- `src/lib/schema.ts` (rewrite): `buildBusinessSchema(): object` -> HomeAndConstructionBusiness.
- `src/lib/utils.ts` (edit): remove menu price helpers, keep tel/map/formspree helpers, hyphen in ranges.
- `src/components/`: `Icon.astro` (Phosphor), `Header`, `Hero`, `Services`, `Seasons`, `Gallery`, `ServiceArea`, `QuoteForm`, `Footer`, `SampleBanner`, `MobileCallBar`. Delete `About`, `Menu`, `HoursAndVisit`, `Contact`.
- `src/styles/global.css`: tokens, base, browser surfaces (selection, focus, scrollbar).
- `public/robots.txt`, `public/images/photos/*.webp`, `public/images/og-image.png`, `public/favicon.svg`.
- `scripts/validate-jsonld.mjs` (edit: assert @type, address, areaServed, telephone 555).
- `scripts/screenshots.mjs` (edit: output paths, waits).
- `IMAGE_CREDITS.md`, `README.md`.

## Tasks

### Task 1: Images
- [x] Pick openly licensed photos from Wikimedia Commons (CC0 / PD / CC BY, no SA), download, EXIF-rotate, resize, WebP q72.
- Verify: `ls public/images/photos` shows 13 files; total < 4 MB; visual contact sheet looks right.

### Task 2: Config + schema
- Rewrite `business.ts` with `BusinessConfig` (services[], seasons[], serviceArea{towns, radiusMiles}, gallery[], imageCredits[], officeHours).
- `buildBusinessSchema()` returns `@type: HomeAndConstructionBusiness`, address, geo, telephone, areaServed (City[]), hasOfferCatalog (Service offers), openingHoursSpecification.
- Verify: `npm run build` exits 0; `npm run validate` prints the type and counts.

### Task 3: Styles + icons
- Tokens in `global.css` (@theme), fonts imported, utilities `btn-primary`, `btn-quiet`, `section`, `field`.
- `Icon.astro` loads Phosphor SVGs by name via `import.meta.glob(..., { query: '?raw' })`.
- Verify: build passes, icons render in screenshot.

### Task 4: Sections
- Header (nav + call), Hero (split, clip-path reveal), Services (ruled list w/ prices + 2 photos), Seasons (dark band, 4 columns, current season highlighted by script), Gallery (asymmetric grid + honesty note), ServiceArea (towns, office hours, map slot), QuoteForm (Formspree, disabled-until-configured note), Footer (credits), MobileCallBar.
- Verify: build passes; `rg -n "[—–]" src` finds no visible dashes; `rg -i "testimonial|review|stars|rated"` finds nothing in copy.

### Task 5: SEO + demo guards
- robots.txt disallow all; noindex meta from demoMode; OG image regenerated.
- Verify: `rg noindex dist/index.html`, `cat dist/robots.txt`.

### Task 6: Screenshots + visual fix pass
- `npm run screenshots` -> screenshots/mobile.png (390x844 @2x full page), screenshots/desktop.png (1440x900 full page). Inspect, fix, re-shoot (bounded: one fix round + one confirm).

### Task 7: impeccable audit + polish
- Contrast math on token pairs, heading order, labels, touch targets >= 44px, reduced motion, image dimensions/lazy loading, overflow at 390px. Record findings + fixes in docs/audit.md.

### Task 8: Ship
- git init, identity rileyjensen22, commit, `gh repo create rileyjensen22/landscaping-demo --private --source=. --remote=origin --push`.
- Cloudflare Pages: project `svk-landscaping-demo`, direct upload of `dist` (only with user approval for a public deploy).

## Self-review
Every brief requirement maps to a task: services/seasons/gallery/area/quote (T4), schema (T2), form/call/map (T4), images+credits (T1, T4 footer, IMAGE_CREDITS), noindex/robots (T5), build/JSON-LD/screens (T2, T6), audit/polish (T7), push/deploy (T8).
