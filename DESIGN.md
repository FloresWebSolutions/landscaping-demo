# Design system (impeccable)
## Color (OKLCH-derived, set in src/config/business.ts)
- ink `#18261d` deep spruce: text, dark band, footer
- paper `#f3f5ee` pale lichen: page background
- surface `#fbfcf8`: form fields, raised areas
- brand `#2f6a3a` leaf green: the single accent (buttons, links, focus); white text on it is 6.3:1
- brand-soft `#dfe8d6`: current-season highlight, selection
## Type
- Display: Bricolage Grotesque Variable, 600-700, tracking -0.03em, clamp up to 5rem
- Body: Public Sans Variable 400/500/600, 17px base, line-height 1.6, measure <= 68ch
## Shape & depth
- Radius: 6px controls, 14px images. No cards; groups are separated by space and single hairlines.
- Shadow only on the sticky header when scrolled and the mobile call bar.
## Motion
- One authored moment: hero photo reveals with a clip-path wipe on load (respects reduced motion). Hover states 150ms ease-out.
## Icons
- Phosphor (regular weight) via @phosphor-icons/core, inlined at build.
