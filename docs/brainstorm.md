# Brainstorm: SVK landscaping demo site

Written per superpowers-brainstorming. There was no live partner to interview, so every
question below is answered from the brief (relayed from Riley via Beth) or settled as a
sensible builder's call. Nothing is left in the "Theirs" bucket that blocks the build.

## What we actually know (from the brief)
- Purpose: a portfolio demo SVK (mavrickweb.com) can show prospective landscaping clients.
- Fictional business, clearly labeled sample data, 555 phone, example.com email, fictional address.
- No testimonials, reviews, ratings or "trusted by" claims of any kind.
- Openly licensed photos only, stored locally, credited (IMAGE_CREDITS.md + footer where CC BY).
- Built on the Astro + Tailwind restaurant starter: one config file drives the content,
  LocalBusiness JSON-LD, Formspree-ready form, click-to-call, map slot.
- Landscaping sections: services, service area, seasonal offerings, project gallery, quote request.
- demoMode on, noindex meta, robots.txt disallow all. Private GitHub repo, Cloudflare Pages preview.

## The visitor moment we design for
A homeowner on a phone, outdoors or on a lunch break, looking at a tired yard and wondering
"can these people do this, do they come to my town, and how do I get a price?" Success is a
call or a submitted quote request in under a minute. That makes this a **Persuade** surface
(impeccable mode): earn trust with real-looking work and concrete specifics, then make the
two actions (call, request a quote) unmissable.

## Decisions (answered / minor)
| Question | Decision | Why |
|---|---|---|
| Business name | **Alder & Stone Landscape Co.** with "(Sample)" in the config name used for schema/title | Sounds like a real regional outfit; clearly fictional; covers soft and hardscape. |
| Location | Hollis Ridge, OR 97000 (fictional town), 418 Example Lane | Fictional, no real address. Pacific NW fits the plant palette. |
| Service area | 8 invented nearby towns + "about 25 miles" radius | Gives the section real content without naming real places. |
| Services | Garden design & planting, lawn care, patios & hardscape, seasonal cleanups, irrigation, edible/raised beds | Covers the common mix; each gets a "from" price to make the demo feel concrete (labeled sample). |
| Seasonal offerings | Four seasons with what the crew does; the current season is highlighted client-side | Seasonality is the core rhythm of the trade and a useful differentiator vs. generic templates. |
| Gallery | 7 Commons photos, asymmetric grid, plain captions, explicit note that photos are illustrative and not this company's work | Honest: we have no real projects. |
| Quote request | Formspree form with service checkboxes, property size, timeline, town, notes | Gives the lead the info a landscaper needs to price a visit. |
| Hours | Office hours (Mon-Sat) shown compactly next to service area, not a big table | Landscapers are visited on-site; office hours matter less than for a restaurant. |
| Schema type | `LandscapeContractor`? Not a schema.org type. Use `HomeAndConstructionBusiness` (a LocalBusiness subtype) with `areaServed`, `hasOfferCatalog` | Valid, specific. |
| Light/dark | Light only | Use scene is daylight, phone, outdoors; light reads best in glare. |
| Social links | None | Avoid fake profiles. |

## Visual direction (design-taste Design Read)
"Reading this as: a local-trade marketing page for homeowners, with a grounded, confident,
horticultural language, leaning toward editorial-print layout (big photography, a serious
grotesque headline face, ruled lists instead of cards)."
- Dials: DESIGN_VARIANCE 7, MOTION_INTENSITY 3, VISUAL_DENSITY 5.
- Type: Bricolage Grotesque (display, characterful but sturdy) + Public Sans (body, civic and very legible). Not Inter, not Fraunces.
- Color: deep spruce ink, pale lichen paper, one accent (leaf green) for actions. No purple, no gradients, no cream + brass.
- Layout: split hero (headline left, photo bleeding right), services as a ruled list with prices, seasons as a dark band with four columns, asymmetric gallery, area + map, then form. No "hero + 3 icon cards", no eyebrows, no section numbers, no em dashes.

## Size of the work
One page plus 404. Small enough for a single plan executed natively in this session.
