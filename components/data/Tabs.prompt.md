Editor-style tabs for primary navigation; active tab carries the accent underline.

```jsx
<Tabs
  value={tab}
  onChange={setTab}
  tabs={[
    { id: 'overview', label: 'Overview' },
    { id: 'usage', label: 'Usage' },
    { id: 'settings', label: 'Settings' },
  ]}
/>
```

For 2–3 short mutually-exclusive options inside a view, prefer SegmentedControl.
