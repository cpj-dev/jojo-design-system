**English** · [简体中文](./CONTRIBUTING.zh-CN.md)

# Contributing to jojo

Thanks for helping with jojo. jojo is an original, framework-agnostic design
system — "warm paper, drawn in ink" — written by [perelmangao](mailto:perelmangao@gmail.com)
and named after the author's cat. It is MIT-licensed (see [LICENSE](./LICENSE))
and unaffiliated with any company or product.

The design language is the point. Most of this guide is about keeping every
change inside that language, so the system stays one coherent thing across
tokens, components, UI kits, and docs.

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
- [`ui_kits/`](./ui_kits) — `marketing/` (markets jojo) and `console/` (an
  example product).
- [`guidelines/`](./guidelines) — specimen cards for colors, type, spacing,
  geometry, and brand.
- `docs/` — the prose docs, in English (`docs/en/`) and Simplified Chinese
  (`docs/zh-CN/`).
- [`SKILL.md`](./SKILL.md) — lets you use this folder as an Agent Skill.

## Design rules every change must respect

These are not preferences. A change that breaks one of them is off-system,
however nice it looks on its own.

**The five signatures.**

1. **Warm paper monochrome, one hue.** Every neutral — text steps, borders, the
   card ladder — is one warm ink stepped into one warm paper. Never hand-pick a
   separate grey, and never a cool blue-grey.
2. **Sharp 4px cards, full-pill controls.** Near-square containers; fully
   rounded buttons, tags, dots, and avatars. No soft 8–16px cards.
3. **The hard ink outline beside a hairline.** A barely-there hairline
   (`--hairline`) for utility chrome, the full ink outline (`--rule-ink`) for
   emphasis or framing. The contrast between the two is the refined tell.
4. **Large light grotesque display.** Display type runs at weight 400 with
   negative tracking. Hierarchy comes from size and tracking, not weight.
5. **Flat and matte, one orange accent for state only.** The orange
   (`--accent-orange`) appears as link, active, and focus only — never as a
   fill, background, or decoration.

**Anti-box layout.** Group with the cheapest separator that works — whitespace,
a section header, a hairline `divide-y`, a background tint — before you reach for
a border. At most one bordered container per region; never a card inside a card.

**Color-only motion.** State feedback is color, never geometry. Hover, press,
active, and selected swap a token (a ladder step, a text color, the focus ring);
they never `transform`, `scale`, `translate`, or add a `box-shadow`. The
`prefers-reduced-motion` guard in `tokens/base.css` is honored by default.

**Resolved tokens, not hardcoded values.** Reference the resolved aliases from
`tokens/semantic.css` (`var(--bg-card)`, `var(--fg-1)`, `var(--accent-orange)`,
`var(--hairline)`, `var(--rule-ink)`). Do not paste hex values, raw HSL, or
ad-hoc radii and shadows into a component or kit.

**AA in both themes, and keyboard nav.** Every change must clear WCAG AA contrast
in light **and** dark, and be fully operable from the keyboard with a visible
focus ring. Toggle the theme and tab through your change before you open a PR.

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
4. Keep the one-hue mechanism intact: a new neutral is the existing ink stepped
   into the existing paper, not a fresh grey. Confirm AA in both themes.

## Adding a component

1. Create the `.jsx` in the right group under `components/` and write it with
   `jojo-` prefixed classes; put the styles in `components/jojo.css`, referencing
   resolved tokens only. Expose the component on `window.JojoDesignSystem` so
   consumers and the specimen cards can read it.
2. Ship a `.d.ts` next to it with the prop types (see
   `components/core/Badge.d.ts` for the shape).
3. Ship a `.prompt.md` — a short usage note with a code example and the rules of
   thumb for the component (see `components/core/Badge.prompt.md`).
4. Add the component to its group's specimen card (`core.card.html`,
   `forms.card.html`, `surfaces.card.html`, or `data.card.html`) so it shows up
   in the overview SPA, in light and dark.
5. Make sure it is keyboard-operable with the shared focus ring, and that state
   is expressed with color only.

## Adding a guideline card

Specimen cards live under `guidelines/<group>/<name>.card.html`. Each starts with
an `@dsCard` HTML comment (`group`, `viewport`, `name`, `subtitle`) that the
overview SPA reads to place the card, links `../../styles.css`, and renders a
small, focused demo. Keep one idea per card and stay on-system — a guideline card
is held to the same rules it documents.

## Docs are bilingual

Every prose doc page exists in both languages, and the two must move together. If
you change `docs/en/<page>.md`, update `docs/zh-CN/<page>.md` in the same PR (and
the same for `README.md` / `README.zh-CN.md`). Each page opens with its language
switcher line:

- English: `**English** · [简体中文](<relative path to the zh-CN sibling>)`
- 简体中文: `[English](<relative path to the en sibling>) · **简体中文**`

Translate prose with the project glossary, but keep token names, file paths,
component names, and the brand name "jojo" in their original form — never
translate an identifier.

## Commits and pull requests

- Keep changes surgical. Touch copy or values, not working class names, the
  `window.JojoDesignSystem` namespace, file paths, or token names, unless that is
  the point of the change.
- Write commit messages in sentence case, present tense, describing what changed
  and which rule or signature it serves.
- One concern per PR. In the description, say how you verified it: which pages
  you opened, that AA holds in both themes, and that keyboard nav works.
- Update [`CHANGELOG.md`](./CHANGELOG.md) when a change is user-facing, and keep
  the English and 简体中文 docs in sync.
- Be specific and unhyped in any copy you add — sentence case, second person, no
  emoji in product or marketing chrome, no exclamation marks in UI.

## Code of conduct

By participating you agree to uphold the [Code of Conduct](./CODE_OF_CONDUCT.md).
Report concerns to [perelmangao@gmail.com](mailto:perelmangao@gmail.com).
