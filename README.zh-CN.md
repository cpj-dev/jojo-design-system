[English](./README.md) · **简体中文**

# jojo · 暖纸落墨

> 暖纸落墨（Warm paper, drawn in ink）。

jojo 是一套原创、框架无关的设计系统。整套中性色板都是由一种暖墨逐级过渡到一种暖纸，只保留一种橙色强调色用于状态——链接、激活、焦点——而绝不用于填充。它提供设计令牌（CSS 自定义属性）、无障碍的 React 基础组件、全屏 UI 套件，以及基础规范的范例卡片。你只需链接一份样式表，再从一个全局对象读取组件。它以作者的猫 jojo 命名，是原创作品，不隶属于任何公司或产品，并以 MIT 许可证发布。

## 标志特征

- **暖纸单色，单一色相。** 每一个中性色都是由一种暖墨逐级过渡到一种暖纸——绝不是相互独立的灰色。
- **锐利的 4px 卡片，全药丸形控件。** 近乎方正的容器；完全圆角的按钮、标签与圆点。
- **墨线描边紧邻细描边。** 几乎不可见的细描边用于界面框架；完整的墨线描边用于强调。这种对比正是它的辨识标志。
- **大号、纤细的展示字体。** grotesque 无衬线展示体，字重 400，带负字距。层级来自字号，而非字重。
- **平整哑光，单一强调色。** 没有阴影或浮起。橙色只用于链接、激活和焦点文字——绝不作为填充。

## 快速开始

1. 首先链接这唯一的入口——它会导入字体、所有令牌、基础重置样式以及组件样式：

   ```html
   <link rel="stylesheet" href="styles.css" />
   ```

2. 在普通 CSS 或 JSX 中引用解析后的令牌别名——绝不硬编码颜色、圆角或描边：

   ```css
   .panel {
     background: var(--bg-card);     /* the warm card surface  */
     color: var(--fg-1);             /* primary ink            */
     border: 1px solid var(--rule-ink); /* the hard ink outline */
   }
   .panel a { color: var(--accent-orange); } /* accent is for state only */
   ```

3. 从全局对象读取 React 基础组件——共有 20 个，分布在 core、forms、surfaces 与 data 四类中：

   ```js
   const { Button, Card, Input, Table } = window.JojoDesignSystem;
   ```

4. **Tailwind v4（可选）。** `tokens/tailwind-bridge.css` 将令牌映射到 `bg-card` 之类的 Tailwind 工具类。它需手动启用——请自行把它加入你的 Tailwind 入口；`styles.css` 不会导入它。

## 项目结构

```
jojo-design-system/
├── styles.css      单一入口——@import 字体、令牌、base 与 jojo.css
├── tokens/         字体、颜色、语义别名、排版、几何、动效、base
├── components/     20 个 React 基础组件（core · forms · surfaces · data）+ jojo.css
├── ui_kits/        marketing（推介 jojo）与 console（一个示例产品）
├── guidelines/     范例卡片——颜色、字体、间距、几何、品牌
├── assets/         jojo 字母标记（logo/）与图标说明
├── docs/           en/ 与 zh-CN/ 中的指南
├── index.html      概览单页应用（SPA）
└── SKILL.md        作为 Agent Skill 使用本系统
```

## 文档

英文指南位于 [`docs/en/`](./docs/en/)：

- [Getting started](./docs/en/getting-started.md) —— 链接样式表，读取全局对象，交付你的第一个界面。
- [Design language](./docs/en/design-language.md) —— 五大标志特征、双描边规则与反盒式布局。
- [Design tokens](./docs/en/design-tokens.md) —— 原始 HSL 色阶，以及你实际使用的解析别名。
- [Components](./docs/en/components.md) —— 20 个基础组件及其属性（props）。

简体中文镜像位于 [`docs/zh-CN/`](./docs/zh-CN/)。

## 演示

- **概览 SPA** —— 打开 [`index.html`](./index.html) 即可浏览令牌、组件与范例卡片。
- **Marketing 套件** —— [`ui_kits/marketing/`](./ui_kits/marketing/) 由本系统组合而成，用于推介 jojo 自身。
- **Console 套件** —— [`ui_kits/console/`](./ui_kits/console/) 是一个用 jojo 构建的通用示例产品。

请通过 HTTP 提供该目录（例如 `npx serve .`），以便模块能够加载。

## 字体与图标

三款开源字体族通过 `tokens/fonts.css` 从 Google Fonts 加载：**Geist**（grotesque 无衬线与展示字体）、**Geist Mono**（所有代码与字面量输入）以及 **EB Garamond**（衬线引导文案）。图标采用通过 CDN 引入的 **[Lucide](https://lucide.dev)** —— 纤细的单线笔画，继承 `currentColor`。

## 贡献指南

欢迎提交 issue 与 pull request。请保持改动符合系统调性——具体、不浮夸、采用 sentence case（句首大写）——并守在五大标志特征之内：引用解析后的令牌，坚守双描边与反盒式布局规则，并在浅色与深色两种主题下验证 WCAG AA 与键盘导航。参与即表示你同意 [行为准则](./CODE_OF_CONDUCT.md)。重要变更记录在 [更新日志](./CHANGELOG.md) 中。

## 许可证

[MIT](./LICENSE) © 2026 perelmangao。

## 命名

jojo 以作者的猫 jojo 命名——小写，与文字标志一致。该标记是一个小写字母 “j” 的字母标记，位于 [`assets/logo/`](./assets/logo/)。
