Warm popover surface for menus/dropdowns/context menus. You position it (wrap in a relative anchor).

```jsx
<Flyout items={[
  { label: 'Rename', icon: <i data-lucide="pencil" /> },
  { label: 'Duplicate', icon: <i data-lucide="copy" /> },
  { separator: true },
  { label: 'Delete', icon: <i data-lucide="trash-2" />, danger: true },
]} />
```

Never give it backdrop-blur or a heavy shadow — it uses the flat halo only.
