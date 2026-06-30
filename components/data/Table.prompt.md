A divided card grid — divide-y rows, no boxes, no zebra. Selected row = tint + inset accent ring.

```jsx
<Table
  columns={[
    { key: 'name', label: 'Deployment' },
    { key: 'env', label: 'Environment' },
    { key: 'duration', label: 'Duration', numeric: true },
  ]}
  data={rows}
  selectedId={active}
  onRowClick={(r) => setActive(r.id)}
/>
```

Pass `render` on a column for custom cells (a Badge, StatusDot, etc.). Wide tables scroll inside their wrapper.
