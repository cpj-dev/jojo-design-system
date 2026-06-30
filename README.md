**English** · [简体中文](./README.zh-CN.md)

# jojo · warm paper, drawn in ink

> Warm paper, drawn in ink.

jojo is an original, framework-agnostic design system. The whole neutral palette is one warm ink stepped into one warm paper, with a single orange accent kept for state — links, active, focus — and never for fills. It ships design tokens (CSS custom properties), accessible React primitives, full-screen UI kits, and foundation specimen cards. You link one stylesheet and read components from a global. It is named after the author's cat, jojo. It is original work, not affiliated with any company or product, and released under the MIT license.

## Signatures

- **Warm paper monochrome, one hue.** Every neutral is one warm ink stepped into one warm paper — never separate greys.
- **Sharp 4px cards, full-pill controls.** Near-square containers; fully rounded buttons, tags, and dots.
- **A hard ink outline beside a hairline.** A barely-there hairline for chrome; a full ink outline for emphasis. The contrast is the tell.
- **Large, light display type.** Grotesque display at weight 400 with negative tracking. Hierarchy comes from size, not weight.
- **Flat and matte, one accent.** No shadows or lift. The orange is link, active, and focus text only — never a fill.

## Quick start

1. Link the single entry point first — it imports the fonts, every token, the base reset, and the component styles:

   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

2. Reference resolved token aliases in plain CSS or JSX — never hardcode a color, radius, or rule:

   ```css
   .panel {
     background: var(--bg-card);     /* the warm card surface  */
     color: var(--fg-1);             /* primary ink            */
     border: 1px solid var(--rule-ink); /* the hard ink outline */
   }
   .panel a { color: var(--accent-orange); } /* accent is for state only */
   ```

3. Read the React primitives from the global — there are 20, across core, forms, surfaces, and data:

   ```js
   const { Button, Card, Input, Table } = window.JojoDesignSystem;
   ```

4. **Tailwind v4 (optional).** `tokens/tailwind-bridge.css` maps the tokens onto Tailwind utilities like `bg-card`. It is opt-in — add it to your Tailwind entry yourself; `styles.css` does not import it.

## Project structure

```
jojo-design-system/
├── styles.css      single entry — @imports fonts, tokens, base, and jojo.css
├── tokens/         fonts, colors, semantic aliases, typography, geometry, motion, base
├── components/     20 React primitives (core · forms · surfaces · data) + jojo.css
├── ui_kits/        marketing (markets jojo) and console (an example product)
├── guidelines/     specimen cards — colors, type, spacing, geometry, brand
├── assets/         the jojo monogram (logo/) and icon notes
├── docs/           guides in en/ and zh-CN/
├── index.html      the overview SPA
└── SKILL.md        use the system as an Agent Skill
```

## Documentation

English guides live in [`docs/en/`](./docs/en/):

- [Getting started](./docs/en/getting-started.md) — link the stylesheet, read the global, ship your first screen.
- [Design language](./docs/en/design-language.md) — the five signatures, the dual-border rule, and the anti-box layout.
- [Design tokens](./docs/en/design-tokens.md) — the raw HSL ladder and the resolved aliases you actually use.
- [Components](./docs/en/components.md) — the 20 primitives and their props.

Simplified Chinese mirrors live in [`docs/zh-CN/`](./docs/zh-CN/).

## Demos

- **Overview SPA** — open [`index.html`](./index.html) to browse tokens, components, and specimen cards.
- **Marketing kit** — [`ui_kits/marketing/`](./ui_kits/marketing/) markets jojo itself, composed from the system.
- **Console kit** — [`ui_kits/console/`](./ui_kits/console/) is a generic example product built with jojo.

Serve the folder over HTTP (for example `npx serve .`) so the modules load.

## Fonts & icons

Three open-source families load from Google Fonts via `tokens/fonts.css`: **Geist** (grotesque sans and display), **Geist Mono** (all code and literal input), and **EB Garamond** (serif lead copy). Icons are **[Lucide](https://lucide.dev)** via CDN — thin monoline strokes that inherit `currentColor`.

## Contributing

Issues and pull requests are welcome. Keep changes on-voice — concrete, unhyped, sentence case — and within the five signatures: reference resolved tokens, hold the dual-border and anti-box rules, and verify WCAG AA and keyboard nav in both themes. By taking part you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md). Notable changes are recorded in the [changelog](./CHANGELOG.md).

## License

[MIT](./LICENSE) © 2026 perelmangao.

## Naming

jojo is named after the author's cat, jojo — lowercase, like the wordmark. The mark is a lowercase-"j" monogram in [`assets/logo/`](./assets/logo/).
