Pill action button — use for any clickable action; the workhorse of the system.

```jsx
<Button variant="primary">Download</Button>
<Button variant="secondary" leadingIcon={<i data-lucide="github" />}>Sign in</Button>
<Button variant="tertiary">See pricing</Button>   {/* renders: See pricing → */}
```

Variants: `primary` (ink fill — the action), `secondary` (ladder fill), `ghost`, `outline` (hard ink edge), `tertiary` (orange text CTA, auto-appends →), `quinary` (bare text). Sizes `sm | md | lg`. Renders `<a>` when `href` is set, or any element via `as`. The orange is NEVER a fill — only the `tertiary` text. No hover/press animation (instant); link-style variants dim, they don't underline.
