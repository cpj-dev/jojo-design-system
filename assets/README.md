# Assets

## Logo — the mark

`logo/mark.svg` and `logo/wordmark.svg` are the jojo monogram — an original mark, a
lowercase "j" (a tittle dot above a hooked stem) inside a soft rounded square. The
project is named after the author's cat, jojo. The wordmark pairs the monogram with
"jojo" set in the display grotesque.

Both SVGs use `fill="currentColor"` / `stroke="currentColor"`, so **inline** them
(not `<img src>`) to pick up ink in light and the off-white ink in dark. In the UI
kits the wordmark is rendered as live HTML text in `--font-sans` so it always uses
the system display type.

## Icons — Lucide (CDN)

The system uses **[Lucide](https://lucide.dev)** monoline icons via CDN — a faithful
match to the refined drafting aesthetic.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="search"></i>
<script>lucide.createIcons();</script>
```

Icons inherit `currentColor`, default size 16–18px in dense UI / 20–24px in
marketing. Never recolor an icon with a status/chart hue as chrome. If you have a
custom icon set, add the SVGs to `icons/` and swap the references.

## Imagery

jojo uses **flat warm paper** — no gradients, mesh, glass, grain, or full-bleed
hero photography by default. Depth is the warm card ladder, not shadow. If you add
photography, keep it **warm, matte, and low-contrast** (no cold or oversaturated
images); media wells sit on `--bg-1` with a 4px radius.
