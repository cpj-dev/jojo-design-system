**English** · [简体中文](./CONTRIBUTING.zh-CN.md)

# Contributing to jojo

Thanks for helping with jojo. This guide explains how to run the project, update
docs, add tokens, add components, and prepare pull requests.

## Running locally

There is no build step for browsing the system. Serve the folder and open a
page:

```bash
npx serve .
```

Then visit:

- `index.html` — the overview SPA. It loads every token, component, and
  specimen card, with a working light/dark toggle.
- `ui_kits/marketing/index.html` — the marketing site (jojo marketing itself).
- `ui_kits/console/index.html` — an example product built with jojo.

Individual specimen cards under `guidelines/` open the same way. Everything
reads from the single entry stylesheet [`styles.css`](./styles.css), and the
React primitives are exposed on `window.JojoDesignSystem`.

## Repo layout

- [`styles.css`](./styles.css) — the single entry. It `@import`s the fonts,
  every token file, the base reset, and `components/jojo.css`. Consumers link
  this one file.
- [`tokens/`](./tokens) — the source of truth for values:
  - `fonts.css` — the three open families, loaded from Google Fonts.
  - [`colors.css`](./tokens/colors.css) — raw shadcn HSL triplets, light
    (`:root`) and dark (`.dark` / `[data-theme="dark"]`).
  - [`semantic.css`](./tokens/semantic.css) — resolved, ready-to-use aliases
    (`--bg-app`, `--bg-card`, `--fg-1`, `--fg-2`, `--accent-orange`,
    `--rule-ink`, `--hairline`, …).
  - `typography.css`, `geometry.css`, `motion.css`.
  - `base.css` — reset, the focus ring, and the `prefers-reduced-motion` guard.
  - `tailwind-bridge.css` — opt-in for Tailwind v4. It is **not** imported by
    `styles.css`.
- [`components/`](./components) — 20 React primitives that read from
  `window.JojoDesignSystem`, grouped as core (Button, IconButton, Badge, Tag,
  StatusDot, Avatar, Kbd, Separator), forms (Input, Textarea, Select, Checkbox,
  Switch, SegmentedControl), surfaces (Card, Callout, Flyout, Tooltip), and data
  (Table, Tabs). Component CSS lives in `components/jojo.css`. Each primitive
  ships a `.d.ts`, a `.prompt.md`, and is shown in its group's `.card.html`.
- [`ui_kits/`](./ui_kits) — `marketing/` and `console/` example pages.
- [`guidelines/`](./guidelines) — specimen cards for colors, type, spacing,
  geometry, and assets.
- `docs/` — the prose docs, in English (`docs/en/`) and Simplified Chinese
  (`docs/zh-CN/`).
- [`SKILL.md`](./SKILL.md) — lets you use this folder as an Agent Skill.

## Design constraints

Before opening a pull request, check that your change follows these constraints:

- Use semantic token aliases from `tokens/semantic.css`, such as
  `var(--bg-card)`, `var(--fg-1)`, `var(--accent-orange)`, `var(--hairline)`,
  and `var(--rule-ink)`.
- Add new raw color values in `tokens/colors.css` and new aliases in
  `tokens/semantic.css`.
- Use the shared radius, spacing, typography, and motion tokens instead of local
  values.
- Use `--accent-orange` for links, active states, and focus states.
- Use status colors for content, badges, and data states.
- Keep interactive states keyboard-operable with a visible focus ring.
- Verify contrast in light and dark themes.

## Adding a design token

1. For a color, add the raw shadcn HSL triplet to
   [`tokens/colors.css`](./tokens/colors.css) under both the light `:root` block
   and the dark `.dark` / `[data-theme="dark"]` block. Keep the `@kind color`
   annotation so the indexer classifies it.
2. Add a resolved alias in [`tokens/semantic.css`](./tokens/semantic.css) that
   wraps the triplet in `hsl()` once, so plain CSS and JSX can use it directly.
   Do not redefine an existing shadcn triplet name (`--card`, `--accent`,
   `--border`, `--ring`, …) — that breaks the raw layer and the Tailwind bridge.
3. For a non-color token, add it to the matching file — `typography.css`,
   `geometry.css`, or `motion.css`.
4. Confirm AA contrast in both themes.

## Adding a component

1. Create the `.jsx` in the right group under `components/` and write it with
   `jojo-` prefixed classes; put the styles in `components/jojo.css`, referencing
   shared tokens only. Expose the component on `window.JojoDesignSystem` so
   consumers and the specimen cards can read it.
2. Ship a `.d.ts` next to it with the prop types (see
   `components/core/Badge.d.ts` for the shape).
3. Ship a `.prompt.md` — a short usage note with a code example and the rules of
   thumb for the component (see `components/core/Badge.prompt.md`).
4. Add the component to its group's specimen card (`core.card.html`,
   `forms.card.html`, `surfaces.card.html`, or `data.card.html`) so it shows up
   in the overview SPA, in light and dark.
5. Make sure it is keyboard-operable with the shared focus ring.

## Adding a guideline card

Specimen cards live under `guidelines/<group>/<name>.card.html`. Each starts with
an `@dsCard` HTML comment (`group`, `viewport`, `name`, `subtitle`) that the
overview SPA reads to place the card, links `../../styles.css`, and renders a
small, focused demo. Keep one idea per card.

## Docs are bilingual

Every prose doc page exists in both languages, and the two must move together. If
you change `docs/en/<page>.md`, update `docs/zh-CN/<page>.md` in the same PR (and
the same for `README.md` / `README.zh-CN.md`). Each page opens with its language
switcher line:

- English: `**English** · [简体中文](<relative path to the zh-CN sibling>)`
- 简体中文: `[English](<relative path to the en sibling>) · **简体中文**`

Translate prose with the project glossary, but keep token names, file paths,
component names, and the project name "jojo" in their original form. Do not
translate identifiers.

## Commits and pull requests

- Keep changes surgical. Touch copy or values, not working class names, the
  `window.JojoDesignSystem` namespace, file paths, or token names, unless that is
  the point of the change.
- Write commit messages in sentence case and present tense.
- One concern per PR. In the description, say how you verified it: which pages
  you opened, that AA holds in both themes, and that keyboard nav works.
- Update [`CHANGELOG.md`](./CHANGELOG.md) when a change is user-facing, and keep
  the English and 简体中文 docs in sync.
- Keep copy specific. Use sentence case. Avoid emoji, slogans, superlatives, and
  exclamation marks in UI copy.

## Code of conduct

By participating you agree to uphold the [Code of Conduct](./CODE_OF_CONDUCT.md).
Report concerns to [perelmangao@gmail.com](mailto:perelmangao@gmail.com).
