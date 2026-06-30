Small full-pill status/label chip. Use status tones for CONTENT (diffs, row status), never chrome.

```jsx
<Badge>Beta</Badge>
<Badge tone="ok">Passing</Badge>
<Badge tone="warning" mono>v0.42</Badge>
```

Tones: `neutral` (default), `ok`, `info`, `warning`, `danger`. `mono` switches to the monospace family for versions/counts. Never wraps. For variable-length values use truncating text, not a Badge.
