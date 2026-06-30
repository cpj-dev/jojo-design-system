# UI Kit — Console (dashboard)

A generic product-console example with an app shell, sidebar, top bar, data table,
filter toolbar, row-overflow flyout, and settings screen.

**Open `index.html`** — it's interactive:
- The **sidebar** switches the main view (Overview / Deployments / Settings are
  built; other items show an empty state). Active items use orange text and a
  thin accent underline.
- **Deployments** has editor-style Tabs (environment filter), a 3-zone filter
  toolbar at one control height, a selectable Table, and a per-row overflow Flyout
  (click the ⋯). Quick-find + status select filter the rows live.
- **Settings** uses divided form sections; its Appearance control
  is wired to the real light/dark theme (persisted to `localStorage`).
- The **top bar** has the theme toggle and a search trigger.

## Files
- `index.html` — app-shell grid, all `cs-*` layout CSS, view routing + theme state.
- `Sidebar.jsx` · `Topbar.jsx` — chrome.
- `OverviewView.jsx` — metric tiles grouped by gap (no per-tile border) + activity list.
- `DeploymentsView.jsx` — tabs + toolbar + table + flyout.
- `SettingsView.jsx` — settings sections.

## Notes
- Every screen composes DS primitives from `window.DS`; no primitive is
  re-implemented here. Status is shown with dots and badges.
