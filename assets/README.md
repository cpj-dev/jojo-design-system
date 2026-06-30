# Assets

## Logo — the mark

`logo/mark.svg` and `logo/wordmark.svg` are the jojo logo files. The mark is a
lowercase "j" inside a rounded square. The wordmark pairs the mark with "jojo".

Both SVGs use `fill="currentColor"` / `stroke="currentColor"`, so inline them
when they need to inherit the current text color. In the UI kits the wordmark is
rendered as live HTML text in `--font-sans`.

## Icons — Lucide (CDN)

The examples use **[Lucide](https://lucide.dev)** icons via CDN.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="search"></i>
<script>lucide.createIcons();</script>
```

Icons inherit `currentColor`. Default size is 16–18px in dense UI and 20–24px in
marketing. If you have a custom icon set, add the SVGs to `icons/` and swap the
references.

## Imagery

Example imagery should use the shared surface tokens. Media wells use `--bg-1`
with a 4px radius.
