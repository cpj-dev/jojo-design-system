Popover surface for menus, dropdowns, and context menus. You position it by
wrapping it in a relative anchor.

```jsx
<Flyout items={[
  { label: 'Rename', icon: <i data-lucide="pencil" /> },
  { label: 'Duplicate', icon: <i data-lucide="copy" /> },
  { separator: true },
  { label: 'Delete', icon: <i data-lucide="trash-2" />, danger: true },
]} />
```

Uses `--shadow-flyout` for elevation.
