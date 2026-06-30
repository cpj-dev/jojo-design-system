Pill action button for clickable actions.

```jsx
<Button variant="primary">Download</Button>
<Button variant="secondary" leadingIcon={<i data-lucide="github" />}>Sign in</Button>
<Button variant="tertiary">See pricing</Button>   {/* renders: See pricing → */}
```

Variants: `primary`, `secondary`, `ghost`, `outline`, `tertiary` (orange text
CTA, auto-appends `→`), and `quinary` (bare text). Sizes: `sm | md | lg`.
Renders `<a>` when `href` is set, or any element via `as`.
