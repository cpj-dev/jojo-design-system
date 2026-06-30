**English** · [简体中文](../zh-CN/getting-started.md)

# Getting started

jojo is a design system that ships as plain files: one CSS entry point, a set of
design tokens, and 20 React component primitives. There is no build step and no
runtime dependency for the CSS layer. Link one stylesheet, reference resolved
tokens, and optionally consume the primitives from a global namespace.

This page covers getting the files, linking the stylesheet, using tokens in plain CSS or JSX, the optional Tailwind v4 bridge, consuming the React primitives, and opening the demos.

## Get the files

Everything you need lives in the repository. Pick whichever fits your project.

**Clone the repository** — you get the tokens, components, guidelines, UI kits, and assets in one tree:

```sh
git clone https://github.com/perelmangao/jojo-design-system.git
```

**Copy what you need** — the system is just files. Copy `styles.css` and the `tokens/` and `components/` folders into your project and keep the relative paths intact (`styles.css` resolves its imports relative to itself).

**Install the package** — the `package.json` exposes `styles.css` as the main entry, with subpath access to `./tokens/*`, `./components/*`, and `./tailwind-bridge.css`:

```sh
npm install jojo-design-system
```

It is MIT-licensed, so any of these is fine for any project.

## Link the single entry point

Consumers link one file: [`styles.css`](../../styles.css). It is a list of `@import` lines only — it pulls in the open fonts, the raw tokens, the resolved semantic aliases, type, geometry, motion, base, and the component styles, in that order.

```html
<link rel="stylesheet" href="path/to/styles.css" />
```

Or from a CSS/JS entry:

```css
@import "jojo-design-system/styles.css";
```

That one link is the whole stylesheet. The three type families — **Geist** (sans / display), **Geist Mono** (code), and **EB Garamond** (serif) — are open-source and loaded from Google Fonts by the imported `tokens/fonts.css`, so you do not host or configure any font binaries.

## Reference resolved tokens

Style your own markup by reading the resolved semantic tokens. The aliases
resolve to the right value automatically in light and dark (dark is the `.dark`
class on the root). A few you will reach for often:

- `--bg-app` — the page background
- `--bg-card` — a surface background
- `--fg-1` — primary text; `--fg-2` — secondary text
- `--accent-orange` — links, active states, and focus states
- `--rule-ink` — higher-contrast border; `--hairline` — standard border

In plain CSS:

```css
.panel {
  background: var(--bg-card);
  color: var(--fg-1);
  border: 1px solid var(--hairline);
}
.panel a {
  color: var(--accent-orange);
}
```

The same variables work as inline style in JSX — they are live CSS custom properties, so they follow the active theme without any JS:

```jsx
<div style={{ background: "var(--bg-card)", color: "var(--fg-1)" }}>
  <a style={{ color: "var(--accent-orange)" }}>Read the docs</a>
</div>
```

## Tailwind v4 (optional)

If your project is on Tailwind v4, opt in to [`tokens/tailwind-bridge.css`](../../tokens/tailwind-bridge.css). It is intentionally **not** imported by `styles.css` — it requires the Tailwind toolchain and does nothing in plain HTML. In Tailwind v4 the v3-style color scale is not loaded, so named utilities like `bg-card`, `text-muted-foreground`, and `border-border` would silently emit nothing. The bridge's `@theme inline` block maps the jojo tokens so those utilities resolve.

Add it to your Tailwind entry (not to `styles.css`):

```css
@import "jojo-design-system/tailwind-bridge.css";
```

If you are not using Tailwind, ignore this file entirely.

## Consume the React primitives

The 20 primitives — core (Button, IconButton, Badge, Tag, StatusDot, Avatar, Kbd, Separator), forms (Input, Textarea, Select, Checkbox, Switch, SegmentedControl), surfaces (Card, Callout, Flyout, Tooltip), and data (Table, Tabs) — are exposed on the global `window.JojoDesignSystem`. Destructure the ones you need, then write ordinary JSX:

```jsx
const { Button, Input, Card } = window.JojoDesignSystem;

function SignInCard() {
  return (
    <Card>
      <Input placeholder="you@example.com" />
      <Button variant="primary">Get started</Button>
    </Card>
  );
}
```

Each primitive ships a `.d.ts` for types and a `.prompt.md` describing its
intended use, both alongside the component in [`components/`](../../components/).
Variants map to the shared token aliases.

## Open the demos

Because the system is plain files, the demos run from a static server. From the repository root:

```sh
npx serve .
```

Then open:

- [`index.html`](../../index.html) — the overview SPA: tokens, type specimens, and component examples.
- [`ui_kits/marketing/`](../../ui_kits/marketing/) — a marketing page composed from the primitives, with a light/dark toggle.
- [`ui_kits/console/`](../../ui_kits/console/) — an example product surface built with jojo.

## Next

- Read [the design language](./design-language.md) for the project constraints.
- Browse the primitives and specimen cards in [`components/`](../../components/) and the project [`README.md`](../../README.md).

---

© 2026 perelmangao, MIT-licensed.
