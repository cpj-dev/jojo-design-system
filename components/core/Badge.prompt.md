Small full-pill status or label chip.

```jsx
<Badge>Beta</Badge>
<Badge tone="ok">Passing</Badge>
<Badge tone="warning" mono>v0.42</Badge>
```

Tones: `neutral` (default), `ok`, `info`, `warning`, `danger`. `mono` switches
to the monospace family for versions/counts. The component uses `white-space:
nowrap`. For variable-length values, use truncating text instead of a Badge.
