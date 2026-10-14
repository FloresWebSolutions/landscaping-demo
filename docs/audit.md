# impeccable audit + polish (pre-ship)

Run against the built site (dist via `astro preview`), at 390x844 and 1440x900.

## Audit health
| Area | Result |
|---|---|
| Accessibility | Pass after fixes. Labels on every field, fieldset/legend for services, landmarks, one h1, h2/h3 order clean, focus-visible ring themed, reduced motion respected. |
| Performance | 10 WebP photos, 2.6 MB total; hero preloaded with fetchpriority=high, all others lazy with width/height set (no CLS). Icons inlined, no icon font. |
| Theming | All colors from config tokens via CSS variables; selection, scrollbar, accent-color and focus themed. |
| Responsive | No horizontal overflow at 390px; nav collapses below 1024px; mobile call bar is sticky, not fixed. |
| Integrity | Build clean, `astro check` 0 errors/warnings/hints, JSON-LD validated. Visible copy has zero em/en dashes and no testimonial/review language. |

## Findings fixed
- [P0] Gallery photos rendered blank in full-page captures (flex-1 + min-h-0 collapsed lazy images). Rebuilt tiles as a sized wrapper with an absolutely positioned image.
- [P1] Placeholder text and "Closed" label at 4.2:1 contrast. Raised to ink/70 (5.8:1).
- [P1] Disabled submit button text at 2.9:1. Darkened to ink/65 background (5.1:1).
- [P1] Header wordmark link was a 28px touch target. Now min 44px.
- [P2] Hero buttons wrapped mid-label at 1440px (phone number split over two lines). Buttons no longer wrap text; hero column widened at lg.
- [P2] Two gallery captions and alt texts did not match their photos. Rewritten after checking each file against its Commons source.
- [P3] Gallery images scaled on hover although they are not links (false affordance). Removed.
- [P3] Missing spaces in the demo-form note and the footer credits line. Fixed.
- [P3] Screenshot script raced smooth scrolling and lazy loading. It now disables smooth scroll and waits for all visible images.

## Deliberately not changed
- Prices, towns and hours are sample data and labeled as such (banner, footer, config header).
- Light theme only: daylight phone use outdoors (see PRODUCT.md).
