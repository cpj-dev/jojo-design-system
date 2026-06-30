**English** · [简体中文](../zh-CN/components.md)

# Components

jojo ships 20 React primitives. They are the smallest set of building blocks that
still feels complete — enough to assemble nav bars, forms, tables, and dialogs
without reaching for a second library. Every primitive already speaks the system:
warm-paper monochrome, the dual-border rule, full-pill controls, and color-only
state. You compose them; you don't restyle them.

The primitives live under [`components/`](../../components/), grouped into four
folders.

## The catalog

### Core — [`components/core/`](../../components/core/)

The everyday building blocks: actions, labels, and small inline marks.

- **Button** — the workhorse action. Full-pill, instant (no motion). Variants:
  `primary` (ink fill), `secondary`, `ghost`, `outline` (the hard ink edge),
  `tertiary` (orange text CTA, auto-appends `→`), `quinary` (bare text).
- **IconButton** — a square, icon-only action for toolbars and dense chrome.
- **Badge** — a small status or count label.
- **Tag** — a removable or selectable chip for metadata.
- **StatusDot** — a single colored dot for live state (ok, warning, offline).
- **Avatar** — a user or entity image with an initials fallback.
- **Kbd** — a keyboard-key glyph for shortcuts.
- **Separator** — a hairline rule for grouping without a box.

### Forms — [`components/forms/`](../../components/forms/)

Inputs and toggles. Real text inputs stand 44px tall; controls are pill-shaped.

- **Input** — the single-line text field.
- **Textarea** — the multi-line text field.
- **Select** — a native-backed dropdown.
- **Checkbox** — a binary choice in a list.
- **Switch** — an instant on/off toggle.
- **SegmentedControl** — a small set of mutually exclusive options in one track.

### Surfaces — [`components/surfaces/`](../../components/surfaces/)

Containers and overlays. At most one bordered container per region; never a card
in a card.

- **Card** — the workhorse surface. `soft` (depth from the ladder, flat) or
  `outline` (paper + the hard ink stroke for emphasis).
- **Callout** — an inline notice for status or guidance, keyed by content color.
- **Flyout** — a popover/menu anchored to a trigger; the only shadow in the system
  is its halo.
- **Tooltip** — a brief label on hover or focus.

### Data — [`components/data/`](../../components/data/)

Structured display.

- **Table** — a divided table with optional row selection.
- **Tabs** — editor-style tabs for switching between views.

## Consuming from `window.JojoDesignSystem`

The primitives are exposed on a single global, `window.JojoDesignSystem`. Link the
one stylesheet — [`styles.css`](../../styles.css) — for the tokens and component
CSS, then destructure the primitives you need:

```jsx
const { Button, Card, Input, Table } = window.JojoDesignSystem;
```

A tiny composition reads naturally — outline for emphasis, ink for the action:

```jsx
function StartPanel() {
  return (
    <Card variant="outline" padding="lg">
      <p>Depth comes from the ladder, not shadow.</p>
      <Button variant="primary">Get started</Button>
    </Card>
  );
}
```

Don't hardcode colors, shadows, or radii inside these compositions — reference the
resolved token aliases (`var(--bg-card)`, `var(--fg-1)`, `var(--accent-orange)`)
instead. The accent is for state only; the action stays ink.

## Types and usage notes

Each primitive ships two companion files next to its `.jsx`:

- A **`.d.ts`** with full prop types — for example
  [`Button.d.ts`](../../components/core/Button.d.ts) declares the `variant`,
  `size`, `as`, `href`, and icon props. Your editor reads these for autocomplete
  and checking.
- A **`.prompt.md`** with a short, on-voice usage note and a copy-paste snippet —
  for example [`Button.prompt.md`](../../components/core/Button.prompt.md) and
  [`Card.prompt.md`](../../components/surfaces/Card.prompt.md). These are written
  for both people and agents; read the one next to a primitive before you reach
  for it.

## Specimen cards

Every group has a live specimen card you can open to see the primitives rendered
in both light and dark. The component cards sit beside their source:

- [`components/core/core.card.html`](../../components/core/core.card.html)
- [`components/forms/forms.card.html`](../../components/forms/forms.card.html)
- [`components/surfaces/surfaces.card.html`](../../components/surfaces/surfaces.card.html)
- [`components/data/data.card.html`](../../components/data/data.card.html)

Foundation cards — colors, type, spacing, geometry, and brand — live under
[`guidelines/`](../../guidelines/). Together the two sets populate the Design
System tab in the overview SPA ([`index.html`](../../index.html)).

## See also

- [Design language](./design-language.md) — the five signatures and the rules
  that hold the primitives together.
- [Getting started](./getting-started.md) — link the stylesheet and render your
  first screen.
