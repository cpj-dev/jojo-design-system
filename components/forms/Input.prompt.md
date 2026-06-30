Text input on the card surface. Pass `label`/`hint`/`error` to wrap as a field; `leadingIcon` makes the search-trigger variant.

```jsx
<Input label="Workspace name" placeholder="acme-inc" />
<Input leadingIcon={<i data-lucide="search" />} placeholder="Search…" />
<Input label="API key" mono error="That key looks invalid." />
```

`mono` for command/literal input. `size="sm"` = 36px. Focus darkens the border and adds the accent ring.
