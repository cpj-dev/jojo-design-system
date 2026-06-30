Icon-only button — toolbar actions, close buttons, overflow menus. Always pass `label`.

```jsx
<IconButton icon={<i data-lucide="settings" />} label="Settings" />
<IconButton icon={<i data-lucide="search" />} label="Search" shape="trigger" />
```

`shape="trigger"` uses the 8px trigger radius; default is pill. Sizes `sm | md`.
The icon inherits `currentColor`.
