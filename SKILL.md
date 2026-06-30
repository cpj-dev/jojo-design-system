---
name: jojo-design
description: Use this skill to design and build interfaces in jojo — an original, framework-agnostic "warm paper, drawn in ink" design system: warm-paper monochrome, one disciplined orange accent, sharp 4px cards + full-pill controls, and large light grotesque display type. Contains the tokens, components, guidelines, UI kits, and assets.
user-invocable: true
---

Read `README.md` and `docs/en/design-language.md` within this skill, and explore the other available files
(`styles.css` + `tokens/` for the foundations, `components/` for the React
primitives and their `*.prompt.md` usage notes, `ui_kits/` for full-screen
recreations, `guidelines/` for foundation specimen cards, `assets/` for the logo).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view — link `styles.css`, reference
the resolved tokens (`var(--bg-app)`, `var(--fg-1)`, `var(--accent-orange)`,
`var(--rule-ink)`, …), and follow the rules below. If working on production code, you
can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## The five signatures (don't lose these)
1. Warm paper monochrome, mechanically one hue — one warm ink (`#26251e`) mixed into
   one warm cream (`#f7f7f4`); every neutral is a step of that mix. Olive-warm, never blue-gray.
2. Sharp 4px cards + full-pill controls.
3. The hard near-black 1px ink outline for emphasis, beside a barely-there hairline.
4. Large, LIGHT (weight 400) grotesque display with negative tracking.
5. Flat & matte; one disciplined orange accent for **state only** (links / active / focus) —
   action is ink-black, the orange is never a fill.

## Hard rules
- Use the resolved tokens, never hardcoded colors/shadows/radii. Status hues stay in
  content/data; chrome is monochrome. Depth is the card ladder, not shadow.
- Anti-box layout: at most one bordered container per region; never a card in a card;
  tables are divide-y; stat tiles group by gap. Max nesting depth 2.
- Motion is color-only and near-instant; honor `prefers-reduced-motion`.
- Type: grotesque for UI/headings, mono for ALL code/command, serif (EB Garamond) for
  real lead copy. Hierarchy is size + tracking, not weight.

## Fonts
Three open-source families, loaded from Google Fonts: Geist (grotesque sans /
display), Geist Mono (monospace / all code), and EB Garamond (serif / lead copy).

## Logo
The mark is the jojo lowercase-"j" monogram — a tittle dot over a hooked stem inside a
soft rounded square — paired with the "jojo" wordmark. See `assets/logo/`.
