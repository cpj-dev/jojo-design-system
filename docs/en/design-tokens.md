**English** · [简体中文](../zh-CN/design-tokens.md)

# Design tokens

Every value in jojo — color, type, geometry, motion — is a CSS custom property.
Reference token aliases in components so values resolve for the current theme.

Tokens load through the single entry point, [`styles.css`](../../styles.css), which `@import`s the font webfonts and all of the token files before any component CSS. Adopt jojo by linking that one stylesheet; the variables below are then live on `:root` and re-resolve under `.dark`.

## The two layers

Color is built in two layers so themes and components share the same values.

**Layer 1 — raw HSL triplets.** [`tokens/colors.css`](../../tokens/colors.css)
authors each value as a bare shadcn-style hue/saturation/lightness triplet, e.g.
`--foreground: 53 12% 13%;` and `--background: 60 16% 96%;`. A second block
scoped to `.dark, [data-theme="dark"]` redefines those same triplet names with
the dark values. The triplets are not directly usable because they have no
`hsl()` wrapper; components should use the semantic aliases instead.

**Layer 2 — resolved semantic aliases.** [`tokens/semantic.css`](../../tokens/semantic.css) wraps each raw triplet in `hsl()` exactly once and gives it a role name: `--fg-1: hsl(var(--foreground));`. These aliases are declared under `:root, .dark, [data-theme="dark"]` together, so the inner `var(--foreground)` re-resolves per theme scope — the alias follows the theme automatically. **These are the values you use.**

```css
/* Layer 1 — colors.css: raw triplet, swaps in .dark */
--foreground: 53 12% 13%;          /* light */ /* -> 48 6% 93% in .dark */

/* Layer 2 — semantic.css: resolved alias (use this) */
--fg-1: hsl(var(--foreground));

/* In a component — reference the alias */
.thing { color: var(--fg-1); }
```

`--accent-orange` resolves from `--ring` and is used for links, active states,
and focus states.

## Surfaces

| Alias | Resolves to | Role |
|---|---|---|
| `--bg-app` | `hsl(var(--background))` | page background, app frame, nav, tabs |
| `--bg-1` | `hsl(var(--bg-card-1))` | sidebar / media well |
| `--bg-card` | `hsl(var(--card))` | default card + flyout surface |
| `--bg-2` | `hsl(var(--bg-card-2))` | hover / muted / tinted well |
| `--bg-3` | `hsl(var(--bg-card-3))` | secondary fill / segmented track |
| `--bg-4` | `hsl(var(--bg-card-4))` | deepest well |
| `--bg-popover` | `hsl(var(--popover))` | flyout / dropdown / tooltip surface |

## Text, fill, and state

| Alias | Resolves to | Role |
|---|---|---|
| `--fg-1` | `hsl(var(--foreground))` | primary text |
| `--fg-2` | `hsl(var(--muted-foreground))` | muted body / meta (AA-tuned) |
| `--fg-on-ink` | `hsl(var(--primary-foreground))` | text on primary fill |
| `--fill-ink` | `hsl(var(--primary))` | primary action fill |
| `--accent-orange` | `hsl(var(--ring))` | links, active states, and focus states |
| `--link` | `hsl(var(--ring))` | role alias of the accent |
| `--focus` | `hsl(var(--ring))` | role alias — focus-visible ring |

## Borders — the dual system

| Alias | Resolves to | Role |
|---|---|---|
| `--hairline` | `hsl(var(--border))` | standard divider / utility edge |
| `--rule-ink` | `hsl(var(--outline-ink))` | higher-contrast 1px outline |

All borders are 1px.

## Status — content and data only

Use status hues in content, badges, and data visualizations.

| Alias | Resolves to | Role |
|---|---|---|
| `--ok` | `hsl(var(--chart-4))` | success green |
| `--info` | `hsl(var(--chart-3))` | info blue |
| `--warning` | `hsl(var(--warn))` | warm amber (AA-tuned) |
| `--danger` | `hsl(var(--destructive))` | crimson |
| `--on-danger` | `hsl(var(--destructive-foreground))` | text on a danger fill |

Each status has a tint pair for the badge/wash pattern — 12% fill, 45% border, solid foreground:

| Tint | Edge |
|---|---|
| `--ok-tint` (`/ 0.12`) | `--ok-edge` (`/ 0.45`) |
| `--info-tint` (`/ 0.12`) | `--info-edge` (`/ 0.45`) |
| `--warning-tint` (`/ 0.12`) | `--warning-edge` (`/ 0.45`) |
| `--danger-tint` (`/ 0.12`) | `--danger-edge` (`/ 0.45`) |

Two more aliases complete the surface system: `--scrim`
(`hsl(var(--foreground) / 0.25)`) and the elevation passthroughs
`--elevation-card` and `--elevation-flyout`.

## Typography

Defined in [`tokens/typography.css`](../../tokens/typography.css). Three
open-source families are loaded from Google Fonts via
[`tokens/fonts.css`](../../tokens/fonts.css): Geist, Geist Mono, and EB Garamond.

| Token | Value |
|---|---|
| `--font-sans` | `"Geist", Inter, system-ui, "Helvetica Neue", Arial, sans-serif` |
| `--font-mono` | `"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` |
| `--font-serif` | `"EB Garamond", "Iowan Old Style", "Palatino Linotype", ui-serif, Georgia, serif` |

The display scale uses weight 400 and negative tracking. Hierarchy comes from size.

| Size | Value | Tracking | Use |
|---|---|---|---|
| `--text-display` | `72px` | `--tracking-display: -2.16px` | hero |
| `--text-h1` | `36px` | `--tracking-h1: -0.72px` | page h1 |
| `--text-h2` | `18px` | `--tracking-h2: -0.18px` | section head |
| `--text-lg` | `16px` | — | default reading / sidebar |
| `--text-body` | `14px` | — | UI body, nav, buttons, table |
| `--text-label` | `12px` | — | meta, mono code, tabs |

Leading and weight: `--leading-tight: 1.0`, `--leading-body: 1.5`;
`--weight-base: 400`, `--weight-med: 500`, `--weight-bold: 700`. Cap reading
line length with `--measure: 68ch`.

## Geometry and spacing

Defined in [`tokens/geometry.css`](../../tokens/geometry.css). Radius values are
grouped by role: inline, base, trigger, callout, panel, and pill.

| Token | Value | Use |
|---|---|---|
| `--radius-inline` | `2px` | inline code |
| `--radius` | `4px` (`0.25rem`) | cards, inputs, badges (defined in `colors.css`) |
| `--radius-trigger` | `8px` | search / icon trigger, media cards |
| `--radius-callout` | `10px` | callout box |
| `--radius-panel` | `0px` | big page/section panels, nav, tabs, headings |
| `--radius-pill` | `9999px` | button, version tag, toggle, status dot, avatar |

Borders are always 1px: `--border-width: 1px`.

The spacing scale:

| Token | Value | Token | Value |
|---|---|---|---|
| `--space-1` | `2px` | `--space-5` | `10px` |
| `--space-2` | `4px` | `--space-6` | `14px` |
| `--space-3` | `6px` | `--space-7` | `20px` (between regions) |
| `--space-4` | `8px` | `--space-8` | `28px` (between major sections) |

Control heights and the view shell:

| Token | Value | Use |
|---|---|---|
| `--row-h` | `29px` | sidebar / nav rows |
| `--input-h` | `44px` | real input |
| `--trigger-h` | `36px` | search-as-trigger |
| `--view-max` | `80rem` (~1280px) | shared max-width for every top-level view |

Content shares the header's horizontal inset through `--shell-pad` (`var(--space-7)`, 20px) and `--shell-pad-lg` (`var(--space-8)`, 28px at ≥ lg).

## Motion

Defined in [`tokens/motion.css`](../../tokens/motion.css). Motion tokens cover
instant states, color/opacity transitions, and reveal panels.

| Token | Value | Use |
|---|---|---|
| `--motion-instant` | `0s` | buttons, nav links, cards, rows |
| `--motion-color` | `200ms ease` | content color/opacity fades, inputs |
| `--motion-reveal` | `180ms ease` | reveal/expand panels (opacity, ≤6px translateY on the panel only) |

The reset, focus ring, and `prefers-reduced-motion` guard live in [`tokens/base.css`](../../tokens/base.css).

## Rule: reference resolved aliases

Resolved aliases keep components consistent in light and dark.

- Use a resolved alias from `semantic.css` — `var(--fg-1)`, `var(--bg-card)`,
  `var(--accent-orange)` — or a typography/geometry/motion token.
- Do not put raw hex colors, HSL values, pixel radii, shadows, or durations into
  a component.
- Do not read a raw triplet (`--foreground`, `--ring`, `--bg-card-1`) directly.
  It has no `hsl()` wrapper and will not render. Those names belong to the raw
  layer and the optional Tailwind bridge
  ([`tokens/tailwind-bridge.css`](../../tokens/tailwind-bridge.css), opt-in, not
  imported by `styles.css`).

Because aliases re-resolve per theme scope, a component written against
`var(--fg-1)` and `var(--bg-card)` works in both themes.

See also: [Design language](./design-language.md).
