// Full-page mobile + desktop screenshots of a running site (defaults to `npm run preview`).
// Usage: npm run build && npm run preview  (in another terminal)  then: npm run screenshots
// Optional: BASE_URL=http://localhost:4321 node scripts/screenshots.mjs
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:4321';
const OUT = new URL('../screenshots/', import.meta.url);
await mkdir(OUT, { recursive: true });

const shots = [
  { file: 'mobile.png', viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { file: 'desktop.png', viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
];

const browser = await chromium.launch();
for (const { file, ...ctxOpts } of shots) {
  const ctx = await browser.newContext(ctxOpts);
  const page = await ctx.newPage();
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
  // Trigger lazy images, then let the hero reveal finish.
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } window.scrollTo(0, 0); });
  await page.waitForFunction(() => [...document.images].filter((i) => i.checkVisibility()).every((i) => i.complete));
  await page.waitForTimeout(1500);
  // Chromium full-page captures paint sticky/fixed elements at the first viewport's bottom edge
  // (mid-page). Render the mobile call bar at its natural end-of-page spot instead.
  await page.addStyleTag({ content: '[data-call-bar]{position:relative!important}' });
  await page.screenshot({ path: new URL(file, OUT).pathname, fullPage: true });
  console.log(`✓ screenshots/${file}`);
  await ctx.close();
}
await browser.close();
