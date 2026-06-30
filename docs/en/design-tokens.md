**English** · [简体中文](../zh-CN/design-tokens.md)

# Design tokens

Every value in jojo — color, type, geometry, motion — is a CSS custom property. You never type a hex code, a pixel radius, or a shadow into a component. You reference a token, and the token resolves to the right value for the current theme.

Tokens load through the single entry point, [`styles.css`](../../styles.css), which `@import`s the font webfonts and all of the token files before any component CSS. Adopt jojo by linking that one stylesheet; the variables below are then live on `:root` and re-resolve under `.dark`.

## The two layers

Color is built in two layers so that themes stay honest and components stay simple.

**Layer 1 — raw HSL triplets.** [`tokens/colors.css`](../../tokens/colors.css) authors each value as a bare shadcn-style hue/saturation/lightness triplet, e.g. `--foreground: 53 12% 13%;` (the warm near-black ink, `#26251e`) and `--background: 60 16% 96%;` (the warm cream paper, `#f7f7f4`). A second block scoped to `.dark, [data-theme="dark"]` redefines those same triplet names with the dark values. The triplets are not directly usable — they have no `hsl()` wrapper — and you should not read them from a component.

**Layer 2 — resolved semantic aliases.** [`tokens/semantic.css`](../../tokens/semantic.css) wraps each raw triplet in `hsl()` exactly once and gives it a role name: `--fg-1: hsl(var(--foreground));`. These aliases are declared under `:root, .dark, [data-theme="dark"]` together, so the inner `var(--foreground)` re-resolves per theme scope — the alias follows the theme automatically. **These are the values you use.**

```css
/* Layer 1 — colors.css: raw triplet, swaps in .dark */
--foreground: 53 12% 13%;          /* light */ /* -> 48 6% 93% in .dark */

/* Layer 2 — semantic.css: resolved alias (use this) */
--fg-1: hsl(var(--foreground));

/* In a component — reference the alias, never the triplet or a hex */
.thing { color: var(--fg-1); }
```

The one accent is warm orange `#eb5600` (`--ring`), lifted to `#ff7a2e` in dark for AA contrast. It carries state only — links, active nav, focus — and is never a fill, background, or decoration.

## Surfaces — the warm paper → ink ladder

| Alias | Resolves to | Role |
|---|---|---|
| `--bg-app` | `hsl(var(--background))` | page paper — app frame, nav, tabs |
| `--bg-1` | `hsl(var(--bg-card-1))` | sidebar / media well (one step off paper) |
| `--bg-card` | `hsl(var(--card))` | default card + flyout surface |
| `--bg-2` | `hsl(var(--bg-card-2))` | hover / muted / tinted well |
| `--bg-3` | `hsl(var(--bg-card-3))` | secondary fill / segmented track |
| `--bg-4` | `hsl(var(--bg-card-4))` | deepest well |
| `--bg-popover` | `hsl(var(--popover))` | flyout / dropdown / tooltip surface |

## Ink, fill, and accent

| Alias | Resolves to | Role |
|---|---|---|
| `--fg-1` | `hsl(var(--foreground))` | primary ink text |
| `--fg-2` | `hsl(var(--muted-foreground))` | muted body / meta (AA-tuned) |
| `--fg-on-ink` | `hsl(var(--primary-foreground))` | cream text on an ink fill |
| `--fill-ink` | `hsl(var(--primary))` | primary CTA / ink button fill (action is black) |
| `--accent-orange` | `hsl(var(--ring))` | the one accent — state only, never a fill |
| `--link` | `hsl(var(--ring))` | role alias of the accent |
| `--focus` | `hsl(var(--ring))` | role alias — focus-visible ring |

## Borders — the dual system

| Alias | Resolves to | Role |
|---|---|---|
| `--hairline` | `hsl(var(--border))` | barely-there divider / utility edge |
| `--rule-ink` | `hsl(var(--outline-ink))` | signature hard near-black 1px outline for emphasis |

The contrast between the two — a faint hairline for chrome, a hard ink outline for emphasis — is one of the five signatures. All borders are 1px.

## Status — content and data only

Status hues are quarantined from chrome. Use them in content, badges, and data viz; never in navigation, buttons, or layout.

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

Two more aliases round out the surface system: `--scrim` (`hsl(var(--foreground) / 0.25)`, a flat ink overlay — no backdrop blur, ever) and the flat elevation passthroughs `--elevation-card` and `--elevation-flyout`.

## Typography

Defined in [`tokens/typography.css`](../../tokens/typography.css). Three open-source families, loaded from Google Fonts via [`tokens/fonts.css`](../../tokens/fonts.css): Geist (grotesque sans / display), Geist Mono (all code and command), EB Garamond (serif lead copy). Never mix families within a single UI control.

| Token | Value |
|---|---|
| `--font-sans` | `"Geist", Inter, system-ui, "Helvetica Neue", Arial, sans-serif` |
| `--font-mono` | `"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` |
| `--font-serif` | `"EB Garamond", "Iowan Old Style", "Palatino Linotype", ui-serif, Georgia, serif` |

The scale is large and light — hierarchy comes from size and negative tracking, not weight. The system runs at weight 400.

| Size | Value | Tracking | Use |
|---|---|---|---|
| `--text-display` | `72px` | `--tracking-display: -2.16px` | hero |
| `--text-h1` | `36px` | `--tracking-h1: -0.72px` | page h1 |
| `--text-h2` | `18px` | `--tracking-h2: -0.18px` | section head |
| `--text-lg` | `16px` | — | default reading / sidebar |
| `--text-body` | `14px` | — | UI body, nav, buttons, table |
| `--text-label` | `12px` | — | meta, mono code, tabs |

Leading and weight: `--leading-tight: 1.0`, `--leading-body: 1.5`; `--weight-base: 400`, `--weight-med: 500`, `--weight-bold: 700` (700 is rare). Cap reading line length with `--measure: 68ch`.

## Geometry and spacing

Defined in [`tokens/geometry.css`](../../tokens/geometry.css). Three radius bands: 0px structural, 4px dominant, full-pill controls. No nested radius — one radius per region.

| Token | Value | Use |
|---|---|---|
| `--radius-inline` | `2px` | inline code |
| `--radius` | `4px` (`0.25rem`) | dominant band — cards, inputs, badges (defined in `colors.css`) |
| `--radius-trigger` | `8px` | search / icon trigger, media cards |
| `--radius-callout` | `10px` | callout box |
| `--radius-panel` | `0px` | big page/section panels, nav, tabs, headings |
| `--radius-pill` | `9999px` | every button, version tag, toggle, status dot, avatar |

Borders are always 1px: `--border-width: 1px`.

The spacing scale is lean-dense:

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

Defined in [`tokens/motion.css`](../../tokens/motion.css). State feedback is color, never geometry — no transform, scale, translate, or shadow on interactive elements. Two tiers, plus a reveal duration.

| Token | Value | Use |
|---|---|---|
| `--motion-instant` | `0s` | buttons, nav links, cards, rows — all state feedback |
| `--motion-color` | `200ms ease` | content color/opacity fades, inputs; nothing routine exceeds ~250ms |
| `--motion-reveal` | `180ms ease` | reveal/expand panels (opacity, ≤6px translateY on the panel only) |

The reset, focus ring, and `prefers-reduced-motion` guard live in [`tokens/base.css`](../../tokens/base.css).

## Rule: reference resolved aliases, never hardcode

This is the discipline that keeps every screen consistent in light and dark.

- **Always** reach for a resolved alias from `semantic.css` — `var(--fg-1)`, `var(--bg-card)`, `var(--accent-orange)` — or a typography/geometry/motion token.
- **Never** hardcode a hex color, an HSL value, a pixel radius, a shadow, or a duration into a component.
- **Never** read a raw triplet (`--foreground`, `--ring`, `--bg-card-1`) directly — it has no `hsl()` wrapper and will not render. Those names belong to the raw layer and the optional Tailwind bridge ([`tokens/tailwind-bridge.css`](../../tokens/tailwind-bridge.css), opt-in, not imported by `styles.css`).

Because the aliases re-resolve per theme scope, a component written against `var(--fg-1)` and `var(--bg-card)` is correct in both themes with no extra work. Hardcode a value and you break that contract the moment the theme flips.

See also: [Design language](./design-language.md) for the five signatures these tokens express.
