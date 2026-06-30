---
name: jojo-design
description: Use this skill to design and build interfaces with jojo, a design system that includes CSS tokens, React components, documentation, UI kits, and assets.
user-invocable: true
---

Read `README.md` and `docs/en/design-language.md` within this skill, and explore the other available files
(`styles.css` + `tokens/` for the foundations, `components/` for the React
primitives and their `*.prompt.md` usage notes, `ui_kits/` for full-screen
recreations, `guidelines/` for foundation specimen cards, `assets/` for the logo).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view — link `styles.css`, reference
the resolved tokens (`var(--bg-app)`, `var(--fg-1)`, `var(--accent-orange)`,
`var(--rule-ink)`, …), and follow the constraints below.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.

## Design constraints
1. Use semantic token aliases for color, typography, spacing, radius, and motion.
2. Cards use 4px radius; buttons, tags, toggles, status dots, and avatars use
   `--radius-pill`.
3. Use `--hairline` for standard borders and `--rule-ink` for higher-contrast
   borders.
4. Display text uses weight 400 and negative tracking.
5. Use `--accent-orange` for links, active states, and focus states.

## Implementation rules
- Use resolved tokens instead of hardcoded colors, shadows, radii, or durations.
- Use status hues for content and data states.
- Avoid stacking multiple bordered containers in the same region.
- Honor `prefers-reduced-motion`.
- Use Geist for UI/headings, Geist Mono for code/command text, and EB Garamond
  for long-form lead text.

## Fonts
Three open-source families, loaded from Google Fonts: Geist, Geist Mono, and
EB Garamond.

## Logo
Logo files live in `assets/logo/`.
