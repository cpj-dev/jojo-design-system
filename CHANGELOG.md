# Changelog

All notable changes to the jojo design system are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-06-30

### Added

- Initial public release of **jojo**, a design system with CSS tokens, React
  component primitives, UI kits, and documentation.
- **Design tokens** (`tokens/`): color (light + dark themes), typography,
  geometry, spacing, motion, resolved semantic aliases, a base reset with a
  focus ring and `prefers-reduced-motion` guard, and an opt-in Tailwind v4
  bridge.
- **20 React component primitives** (`components/`) across core, forms,
  surfaces, and data — each with a `.d.ts` typing, a `.prompt.md` usage note,
  and a specimen card.
- **UI kits** (`ui_kits/`): a marketing site and a product console, composed
  entirely from the primitives, with a working light/dark toggle.
- **Foundation specimen cards** (`guidelines/`) for colors, type, spacing,
  geometry, and brand.
- **Bilingual documentation** (`docs/`) in English and Simplified Chinese.
- Single-file entry point `styles.css` and a global `window.JojoDesignSystem`
  component namespace.

[0.1.0]: https://example.com/jojo-design-system/releases/tag/v0.1.0
