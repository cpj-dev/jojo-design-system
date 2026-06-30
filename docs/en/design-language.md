**English** · [简体中文](../zh-CN/design-language.md)

# Design language

This page documents the visual constraints used by jojo. The constraints are
implemented as CSS custom properties in [`tokens/`](../../tokens/) and component
styles in [`components/jojo.css`](../../components/jojo.css).

## Color

Color values are defined in two layers:

1. Raw HSL triplets in [`tokens/colors.css`](../../tokens/colors.css).
2. Resolved semantic aliases in [`tokens/semantic.css`](../../tokens/semantic.css).

Use semantic aliases in components and layouts:

- `--bg-app` for the page background
- `--bg-card` and `--bg-1` through `--bg-4` for surfaces
- `--fg-1` and `--fg-2` for text
- `--fill-ink` for primary action fills
- `--accent-orange` for links, active states, and focus states
- `--hairline` for standard borders
- `--rule-ink` for higher-contrast borders

Status colors (`--ok`, `--info`, `--warning`, `--danger`) are intended for
content, badges, and data states.

## Typography

The font stacks are defined in [`tokens/typography.css`](../../tokens/typography.css)
and loaded from [`tokens/fonts.css`](../../tokens/fonts.css):

- Geist for UI text and headings
- Geist Mono for code, commands, shortcuts, and literal input
- EB Garamond for long-form lead text and quotes

Display text uses weight 400 and negative tracking. Body text uses 14-16px with
`--leading-body`.

## Radius

Radius values are defined in [`tokens/geometry.css`](../../tokens/geometry.css):

- `--radius-inline` for inline code
- `--radius` for cards, inputs, and badges
- `--radius-trigger` for search and icon triggers
- `--radius-callout` for callouts
- `--radius-panel` for large panels and structural regions
- `--radius-pill` for buttons, tags, toggles, status dots, and avatars

Use one radius treatment per region.

## Borders

All standard borders are 1px. Use:

- `--hairline` for dividers, table rows, tabs, inputs, and low-contrast edges
- `--rule-ink` for selected, framed, or higher-contrast surfaces

Avoid stacking multiple bordered containers inside the same region.

## Spacing and layout

Spacing values are defined in [`tokens/geometry.css`](../../tokens/geometry.css).
Use the shared spacing scale instead of ad hoc values. Top-level views should use
the shared shell width (`--view-max`) and shell padding.

Group related content with spacing, headings, dividers, or background steps before
adding another bordered container.

## Motion

Motion values are defined in [`tokens/motion.css`](../../tokens/motion.css):

- `--motion-instant` for immediate interaction states
- `--motion-color` for color and opacity transitions
- `--motion-reveal` for reveal panels

Interactive state changes should not depend on transform, scale, translate, or
box-shadow. The global reset in [`tokens/base.css`](../../tokens/base.css) includes
a `prefers-reduced-motion` guard.

## Icons

The examples use [Lucide](https://lucide.dev) icons from a CDN. Icons inherit
`currentColor` and should be sized to match the surrounding text.

Status should be represented with status tokens or `StatusDot`, not decorative
icons or emoji.

## Writing guidelines

Project copy should describe implementation facts:

- Name files, components, tokens, props, and commands directly.
- Use short sentences.
- Prefer specific nouns over slogans.
- Avoid superlatives and invented phrases.
- Avoid emoji and exclamation marks in UI copy.

## See also

- [Design tokens](./design-tokens.md)
- [Components](./components.md)
- [Getting started](./getting-started.md)
