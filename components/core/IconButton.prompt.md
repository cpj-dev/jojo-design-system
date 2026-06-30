Icon-only button — toolbar actions, close buttons, overflow menus. Always pass `label`.

```jsx
<IconButton icon={<i data-lucide="settings" />} label="Settings" />
<IconButton icon={<i data-lucide="search" />} label="Search" shape="trigger" />
```

`shape="trigger"` gives the 8px-radius hairline toolbar look; default is pill. Sizes `sm | md`. The icon inherits currentColor (ink at rest).
