# UI Kit — Marketing site

A reference marketing site that markets **jojo itself**, composed entirely
from the design-system primitives (`window.JojoDesignSystem`).
Demonstrates the brand at marketing scale: flat warm paper, large light display
type, one tertiary (orange) CTA, anti-box feature grid, and emphasis via the hard
outline card — not shadow.

**Open `index.html`** — it's interactive: the nav has a working light/dark toggle
(adds `.dark` to `<html>`, persisted to `localStorage`), and pricing has a
monthly/yearly `SegmentedControl` that re-prices the tiers.

## Files
- `index.html` — page shell, shared `mk-*` layout CSS, theme state, composition.
- `Nav.jsx` — sticky header (logo, links, theme toggle, GitHub / Get started).
- `Hero.jsx` — display headline + sub + CTA row + a flat code-preview well.
- `Features.jsx` — a 3-column feature grid grouped by gap (no per-card borders).
- `Pricing.jsx` — three support tiers (Sponsor = hard-outline emphasis) + billing toggle.
- `Footer.jsx` — closing CTA band + link columns + bottom bar.

## Notes
- Each `.jsx` reads DS components from `window.DS` (aliased in `index.html`) and
  exports its section to `window`, because each `text/babel` script has its own scope.
- The theme-toggle icon is an **inline SVG** (sun/moon) so the swap stays pure-React;
  all other icons are **Lucide** via CDN, converted in a post-render effect.
- Copy is illustrative of the brand voice (sentence case, second person, concrete).
  The logo is the jojo monogram — see `assets/README.md`.
