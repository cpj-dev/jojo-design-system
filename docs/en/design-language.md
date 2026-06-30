**English** · [简体中文](../zh-CN/design-language.md)

# Design language

> **Warm paper, drawn in ink.** The entire palette is one warm near-black ink
> (`#26251e`) mixed into one warm cream (`#f7f7f4`) at graded steps, with a single
> warm-orange accent (`#eb5600`) used only for state — links, active, focus.
> **Action is ink; accent is for state.**

jojo is an original, framework-agnostic design system by **perelmangao**, named
after the author's cat, jojo. It is independent and unaffiliated with any company
or product, and released under MIT. This page is the reference for the language
itself — the rules that the [tokens](../../tokens/), the component primitives, and
the [specimen cards](../../guidelines/) all encode. Consuming projects link one
file — [`styles.css`](../../styles.css) — and read components from
`window.JojoDesignSystem`.

---

## The mechanism is the system

The whole neutral palette is one ink stepped into one paper. Borders are
ink-at-alpha; muted text is ink-at-alpha; the card ladder is paper stepped toward
ink. Reproduce the mechanism and you reproduce jojo. **Five signatures:**

1. **Warm paper monochrome, mechanically one hue.** Cream plus warm near-black
   ink; every neutral is ink stepped into paper. Olive-warm, never blue-gray.
2. **Sharp 4px cards and full-pill capsule controls.** Near-square containers,
   fully rounded buttons, tags, and dots. No 8–16px soft cards.
3. **The hard near-black 1px card outline** — a full-ink drafting stroke on
   framed and emphasis cards and CTA edges, beside a barely-there hairline for
   utility chrome. The two-border contrast is the refined tell.
4. **Large light grotesque display.** 36–72px at weight **400** with strong
   negative tracking. Bold (700) is rare. Plus EB Garamond serif for real lead
   copy.
5. **Flat and matte, one disciplined accent.** Shadows are decorative-zero; depth
   is the warm card ladder. The orange is link, active, and focus text only —
   never a fill.

---

## Content fundamentals — how jojo writes

The voice is concrete, confident, and unhyped. It respects your time and never
oversells.

- **Person and address.** Second person, direct — "you", "your interface". The
  system is the subject of capability claims ("a token resolves to the live
  theme"); you are the subject of outcomes ("you design with the grain, not
  against it").
- **Sentence shape.** Short, declarative, verb-first. One idea per line.
  Headings are a single noun phrase or a 3–6 word claim; body expands in one or
  two plain sentences. Avoid semicolons and stacked subordinate clauses.
- **Casing.** Sentence case nearly everywhere — headings, buttons, nav, labels.
  Title Case is rare and reserved (proper names, the wordmark). Never ALL-CAPS
  for emphasis; emphasis comes from size and the orange, not shouting. Small mono
  eyebrows and labels may be lowercase.
- **Tone words.** "calm", "legible", "disciplined", "consistent", "warm", "flat",
  "token", "resolved" — describe the mechanism, not adjectival hype. Avoid
  "revolutionary", "magical", "unleash", "supercharge". Specific over superlative.
- **Numbers and specifics.** Prefer concrete specifics (token names, real keybinds
  like `⌘K`, exact px) over vague claims. Mono for anything literal — token names,
  commands, file paths, shortcuts, versions.
- **Verbs for actions.** Buttons are verbs or nouns: "Get started", "Read the
  docs", "Talk to sales", "Become a sponsor". The trailing-arrow CTA
  ("Read the docs →") is the one place copy carries the orange.
- **No emoji** in product or marketing chrome. No exclamation marks in UI. No
  emoji as bullets or status — status is a dot or a faint token tint (see
  Iconography).
- **Density of voice.** Marketing is spacious and quiet (one claim, lots of
  paper). Product UI is lean and dense (labels, not sentences). Docs may use the
  serif and run longer, but stay plain.

*Illustrative examples in this voice:* a hero — **"Warm paper, drawn in ink."** /
sub: "jojo is an original, framework-agnostic design system — one warm ink, one
warm paper, one disciplined accent." A feature eyebrow — `one ink · one paper` /
**"Familiar, but disciplined."** A CTA row — **Get started** (ink) ·
**Read the docs →** (orange).

---

## Visual foundations

**Color.** One warm cream paper (`#f7f7f4`, hue ~50–60) plus one warm near-black
ink (`#26251e`). Every neutral — text steps, all borders, the card ladder — is
that ink mixed into that paper at a graded step; never hand-pick separate greys.
A single warm-orange accent (`#eb5600`) is the only chromatic color in chrome,
and it appears *only* as link text, the active-nav underline and text, and the
focus ring — never a fill, background, or decoration. Status hues (ok-green,
info-blue, crimson, amber) are quarantined to content and data viz as faint ~12%
tints with a solid foreground; chrome stays monochrome. Both themes are warm
(light hue ~50–60; dark warm-black hue ~48, anchored on `#100f0a`) — never a cool
blue-gray dark. Imagery skews warm, neutral, matte, and low-contrast — no cold or
oversaturated photography.

**Type.** Large and light. Display 72px / H1 36px at **weight 400** with strong
negative tracking (−2.16 to −0.72px) and `line-height: 1`. Hierarchy comes from
size and tracking, not weight — the system runs at 400, bumps to 500 for some
titles, and 700 is rare (mid-size section heads only). Grotesque sans (**Geist**)
for all UI and headings; monospace (**Geist Mono**) for **all** code, inline code,
command and search inputs, install chips, and versions; serif (**EB Garamond**)
for real long-form lead paragraphs and quotes only. Never mix families inside one
control. Body 14px / line-height 1.5; reading measure ~65–75ch.

**Spacing and density.** Lean-dense. The scale is 2/4/6/8/10/14/20/28px;
whitespace appears only at section boundaries (20–28px), and within regions it is
8–10px. Rows are 29px, real inputs 44px, search triggers 36px. One shared view
shell at `max-width: 80rem` with the header's exact horizontal inset on every view.

**Backgrounds.** Flat warm paper — no gradients, no mesh, no glass, no grain
texture, no full-bleed hero photography by default. Depth is the **warm card
ladder** (`--bg-app` → `--bg-card` → `--bg-4`), a tint step, never a shadow or a
blur. The overlay scrim is a flat ink wash (`--scrim`, ink at 25%), never
`backdrop-blur`.

**Borders — the dual system.** All borders are **1px**, never thicker. A
barely-there **hairline** (`--hairline`) for dividers, table rows, tabs, inputs,
and ghost edges; and the **hard ink outline** (`--rule-ink`, full ink — the
signature) for framed, emphasis, and selected cards and primary-CTA edges. No
colored side-stripe borders. No nested radius.

**Corner radii — three bands.** `0px` structural (nav, tabs, headings, big
panels) · `4px` dominant (cards, inputs, sidebar items, badges; 2px inline code;
8px search and icon triggers; 10px callouts) · **full pill** (`9999px`: every
button, version tag, toggle, status dot, avatar). One radius per region.

**Cards.** Two families. **Soft**: `--bg-card`/`--bg-1`, 4px, optional hairline,
no shadow, flat. **Hard-outline**: paper background plus 1px `--rule-ink`, 0–4px,
for emphasis, framed, or selected. Never nest a card in a card (see Layout, below).

**Elevation.** Essentially flat. Default cards and buttons have
`box-shadow: none`. The only shadow is a near-invisible matte halo
(`--shadow-flyout`, zero offset, ~2% black in light / a soft dark halo in dark)
on flyouts and popovers. No Material elevation, no glow, no offset drop shadows.

**Motion.** Near-zero, two tiers only. **Instant** (0s) for all chrome state —
buttons, nav, cards, rows. **Color** (≤200ms ease, color and opacity only) for
content-level fades, inputs, and reveals. **State feedback is color, never
geometry** — hover, active, and selected swap a token (a bg-ladder step, text
color, or a ring), never `transform`, `scale`, `translate`, or `box-shadow` on
the interactive element. No lift, no bounce, no pulse or spin, no auto-carousels.
`prefers-reduced-motion` is honored by a global guard shipped in
[`tokens/base.css`](../../tokens/base.css).

**Hover, press, focus, selected** (color-only):
- *Hover* — background steps one ladder rung darker; link-style text dims to ~75%
  accent (no underline-on-hover for buttons).
- *Press* — reverts or steps back one rung. No scale.
- *Focus-visible* — the universal ring: 1.5px accent outline at
  `outline-offset: 2px` (or an inset accent ring on rows). Keyboard only; the
  mouse never shows it. This is the one place the orange touches chrome state.
- *Selected/active* — nav: orange text plus a 0.5px accent underline stroke (not
  a pill). Row: `--bg-2` tint plus inset accent ring (never a per-row border).
  Card: the hard `--rule-ink` outline. Toggle: solid ink text (optional ✓), not a
  heavy fill.

**Transparency and blur.** Used almost never. Faint status tints (~12%) and the
ink scrim (~25%) are the only alphas in normal use. **`backdrop-blur`, frosted
glass, and `bg-*/50` glass are banned** by default.

**Layout — the anti-box system.** The headline failure mode is box-in-box. Group
with the cheapest separator that works, escalating one rung at a time: whitespace
→ section header and alignment → hairline `divide-y` → bg-tint step → one hairline
border → the hard ink outline (last resort). At most **one bordered container per
logical region**; never a card in a card; tabular data uses `divide-y`, never
per-row boxes; stat tiles are grouped by grid gap, not six bordered cards. Max
nesting depth: 2. One shared view shell; reflow by column span, never by
re-boxing.

---

## Iconography

jojo's chrome is **icon-light** — it leans on type, the orange accent, and the
card ladder rather than decorative iconography. Where icons appear they are
**monoline**: thin, even-stroke, geometric line icons (no fills, no duotone, no
rounded-cartoon style), sized to the text and inheriting `currentColor` so they
read as ink, or, on an active control, as the accent.

- **Icon set:** **[Lucide](https://lucide.dev)** via CDN (`lucide@latest`). Its
  clean ~1.75px monoline stroke is the drafting aesthetic jojo's UI kits and
  components use throughout.
- **How to use:** `<i data-lucide="search"></i>` then `lucide.createIcons()`, or
  inline the SVG. The stroke inherits `currentColor`; never recolor an icon with a
  status or chart hue as chrome. Default size 16–18px in dense UI, 20–24px in
  marketing.
- **Status is a dot or a tint, not an icon.** Small filled circles in a status
  token (`--ok` / `--warning` / `--info` / `--danger`), or the faint token-tint
  badge pattern. No emoji as status, ever.
- **No emoji** in product or marketing chrome. No unicode dingbats as UI icons.
  The one glyph the system leans on is the trailing arrow `→` on the accent
  (tertiary) CTA, and the checkmark `✓` for a selected filter or toggle.
- **Logo:** the jojo lowercase-"j" monogram in `assets/logo/` — a mark plus a
  wordmark that sets "jojo" in the display grotesque. Both inherit `currentColor`;
  inline them so they pick up ink on paper and off-white on ink. See
  [`assets/README.md`](../../assets/README.md).

---

## Fonts

jojo's three families are all open-source, loaded from Google Fonts via
[`tokens/fonts.css`](../../tokens/fonts.css):

- **Geist** — the grotesque sans, used for all UI and headings, including the
  large light display.
- **Geist Mono** — the monospace, used for all code, command and search inputs,
  install chips, and versions.
- **EB Garamond** — the serif, used for real long-form lead paragraphs and quotes.

Each family is listed first in its stack in `tokens/typography.css`, with system
fallbacks after it. Never mix families inside one control.
