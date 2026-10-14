// Parses every JSON-LD block in dist/**/*.html and checks the LocalBusiness fields we rely on.
// Usage: npm run build && npm run validate
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const files = (await readdir(DIST, { recursive: true })).filter((f) => f.endsWith('.html'));
const required = ['@context', '@type', '@id', 'name', 'telephone', 'address', 'geo', 'areaServed', 'url'];
let blocks = 0;
let failed = false;
for (const f of files) {
  const html = await readFile(join(DIST, f), 'utf8');
  for (const m of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    blocks++;
    try {
      const d = JSON.parse(m[1]);
      const missing = required.filter((k) => d[k] === undefined);
      if (missing.length) throw new Error(`missing ${missing.join(', ')}`);
      if (d['@context'] !== 'https://schema.org') throw new Error('bad @context');
      if (!/^\+1555/.test(d.telephone)) throw new Error('telephone is not a 555 sample number');
      console.log(`✓ ${f}: @type=${d['@type']}, ${d.areaServed.length} areas, ${d.openingHoursSpecification.length} hours specs, ${d.hasOfferCatalog.itemListElement.length} services`);
    } catch (e) {
      failed = true;
      console.error(`✗ ${f}: invalid JSON-LD: ${e.message}`);
    }
  }
}
if (!blocks) { console.error('✗ No JSON-LD blocks found'); process.exit(1); }
process.exit(failed ? 1 : 0);
