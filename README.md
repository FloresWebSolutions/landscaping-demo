# Alder & Stone landscaping demo (sample site) 

A one-page landscaping website demo built by SVK (mavrickweb.com) on Astro + Tailwind v4.
**Alder & Stone Landscape Co. is fictional.** All business details are sample data; photos are openly licensed (see IMAGE_CREDITS.md).

## Edit content
Everything lives in `src/config/business.ts`: name, phone, address, services and prices, seasonal plan, service area towns, gallery, quote form options, brand colors, image credits, Formspree ID and Google Maps embed.
Keep `demoMode: true` for demos: it shows the sample banner and adds `noindex, nofollow`. `public/robots.txt` disallows all crawling; replace it for a real launch.

## Commands (Node 22)
```
npm install
npm run dev          # local dev server
npm run build        # static build to dist/
npm run validate     # checks LocalBusiness JSON-LD in dist/
npm run preview      # then, in another terminal:
npm run screenshots  # screenshots/mobile.png (390x844 @2x) and desktop.png (1440x900), full page
```

## Docs
- `docs/brainstorm.md` design decisions, `docs/plan.md` implementation plan, `docs/audit.md` audit and polish log.
- `PRODUCT.md`, `DESIGN.md` design context.
