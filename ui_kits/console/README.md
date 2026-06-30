# UI Kit — Console (dashboard)

A generic product-console recreation that exercises the **app-chrome + anti-box +
interaction** rules — an app shell with a sidebar, a top bar, a data table with a
filter toolbar, a row-overflow flyout, and a settings screen. It demonstrates the
design language on original, generic product surfaces — an example app built with
jojo.

**Open `index.html`** — it's interactive:
- The **sidebar** switches the main view (Overview / Deployments / Settings are
  built; other items show a tasteful empty state). Active item = orange text + a thin
  accent underline (no fill, no side-stripe).
- **Deployments** has editor-style Tabs (environment filter), a 3-zone filter
  toolbar at one control height, a selectable Table, and a per-row overflow Flyout
  (click the ⋯). Quick-find + status select filter the rows live.
- **Settings** uses divide-y form sections (no card-in-card); its Appearance control
  is wired to the real light/dark theme (persisted to `localStorage`).
- The **top bar** has the theme toggle and a search trigger.

## Files
- `index.html` — app-shell grid, all `cs-*` layout CSS, view routing + theme state.
- `Sidebar.jsx` · `Topbar.jsx` — chrome.
- `OverviewView.jsx` — metric tiles grouped by gap (no per-tile border) + activity list.
- `DeploymentsView.jsx` — tabs + toolbar + table + flyout.
- `SettingsView.jsx` — anti-box settings sections.

## Notes
- Every screen composes DS primitives from `window.DS`; no primitive is
  re-implemented here. Status is shown with dots/badges (content); chrome is
  monochrome. Depth is the card ladder, not shadow.
