**English** · [简体中文](./README.zh-CN.md)

# jojo

jojo is a design system that ships CSS tokens, React components, documentation,
and example UI kits. The CSS layer can be used without a JavaScript framework.
The React components are exposed on `window.JojoDesignSystem` for static pages
and prototypes.

## What is included

- CSS custom properties for color, typography, spacing, radius, and motion
- Light and dark theme values
- 20 React components across core, forms, surfaces, and data
- Optional Tailwind v4 token bridge
- Documentation in English and Simplified Chinese
- Example marketing and console layouts
- Specimen pages for tokens, components, and visual rules

## Installation

Clone the repository:

```sh
git clone https://github.com/perelmangao/jojo-design-system.git
```

Or install the package:

```sh
npm install jojo-design-system
```

## Usage

Link the stylesheet:

```html
<link rel="stylesheet" href="styles.css" />
```

Use token aliases in CSS:

```css
.panel {
  background: var(--bg-card);
  color: var(--fg-1);
  border: 1px solid var(--rule-ink);
}

.panel a {
  color: var(--accent-orange);
}
```

Use components from the global namespace:

```js
const { Button, Card, Input, Table } = window.JojoDesignSystem;
```

For Tailwind v4, import the bridge in your Tailwind entry:

```css
@import "jojo-design-system/tailwind-bridge.css";
```

`styles.css` does not import the Tailwind bridge.

## Design constraints

The system uses a fixed set of visual rules:

- Neutral colors come from one HSL scale.
- Cards use a 4px radius.
- Buttons, tags, avatars, and small controls use a full radius.
- `--hairline` is used for low-emphasis borders.
- `--rule-ink` is used for emphasis borders.
- `--accent-orange` is reserved for links, active states, and focus states.
- Component and layout styles should use token aliases instead of hardcoded
  color, radius, spacing, or motion values.

## Project structure

```txt
jojo-design-system/
├── styles.css      CSS entry point
├── tokens/         CSS custom properties and base styles
├── components/     React components and component CSS
├── ui_kits/        example page layouts
├── guidelines/     token and component specimen pages
├── assets/         logo files and asset notes
├── docs/           English and Simplified Chinese documentation
├── index.html      overview page
└── SKILL.md        instructions for coding agents
```

## Documentation

English:

- [Getting started](./docs/en/getting-started.md)
- [Design language](./docs/en/design-language.md)
- [Design tokens](./docs/en/design-tokens.md)
- [Components](./docs/en/components.md)

Simplified Chinese:

- [快速开始](./docs/zh-CN/getting-started.md)
- [设计语言](./docs/zh-CN/design-language.md)
- [设计令牌](./docs/zh-CN/design-tokens.md)
- [组件](./docs/zh-CN/components.md)

## Examples

Serve the repository root over HTTP:

```sh
npx serve .
```

Then open:

- [`index.html`](./index.html)
- [`ui_kits/marketing/`](./ui_kits/marketing/)
- [`ui_kits/console/`](./ui_kits/console/)

## Fonts and icons

Fonts are loaded from Google Fonts in [`tokens/fonts.css`](./tokens/fonts.css):

- Geist
- Geist Mono
- EB Garamond

Icons use [Lucide](https://lucide.dev) from a CDN.

## Contributing

Issues and pull requests are welcome. Before opening a pull request, read
[`CONTRIBUTING.md`](./CONTRIBUTING.md). Participation is covered by the
[`Code of Conduct`](./CODE_OF_CONDUCT.md). Release notes are recorded in
[`CHANGELOG.md`](./CHANGELOG.md).

## License

[MIT](./LICENSE) © 2026 perelmangao.
