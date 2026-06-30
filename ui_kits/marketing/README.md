# UI Kit — Marketing site

A reference marketing site composed from the design-system primitives
(`window.JojoDesignSystem`). It includes a nav, hero, feature grid, pricing
section, CTA band, footer, and theme toggle.

**Open `index.html`** — it's interactive: the nav has a working light/dark toggle
(adds `.dark` to `<html>`, persisted to `localStorage`), and pricing has a
monthly/yearly `SegmentedControl` that re-prices the tiers.

## Files
- `index.html` — page shell, shared `mk-*` layout CSS, theme state, composition.
- `Nav.jsx` — sticky header (logo, links, theme toggle, GitHub / Get started).
- `Hero.jsx` — headline, supporting text, CTA row, and code-preview well.
- `Features.jsx` — a 3-column feature grid.
- `Pricing.jsx` — three support tiers and a billing toggle.
- `Footer.jsx` — closing CTA band + link columns + bottom bar.

## Notes
- Each `.jsx` reads DS components from `window.DS` (aliased in `index.html`) and
  exports its section to `window`, because each `text/babel` script has its own scope.
- The theme-toggle icon is an **inline SVG** (sun/moon) so the swap stays pure-React;
  all other icons are **Lucide** via CDN, converted in a post-render effect.
- The logo files are documented in `assets/README.md`.
