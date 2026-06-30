The workhorse surface. `soft` (on the ladder, flat) or `outline` (paper + hard ink stroke for emphasis). Never nest a Card in a Card.

```jsx
<Card padding="lg">Soft card — depth comes from the ladder, not shadow.</Card>
<Card variant="outline" padding="lg">Emphasis — the hard near-black stroke.</Card>
<Card interactive padding="md" onClick={open}>Clickable (a real button; color-only hover).</Card>
```

`well` uses the recessed fill; `hairline` adds a faint edge to a soft card. `padding`: none | md | lg.
