[English](./README.md) · **简体中文**

# jojo

jojo 是一套设计系统，包含 CSS 令牌、React 组件、文档和示例 UI 套件。
CSS 层可以在不依赖 JavaScript 框架的情况下使用。React 组件通过
`window.JojoDesignSystem` 暴露，适用于静态页面和原型。

## 包含内容

- 用于颜色、排版、间距、圆角和动效的 CSS 自定义属性
- 浅色和深色主题值
- 20 个 React 组件，覆盖 core、forms、surfaces 和 data
- 可选的 Tailwind v4 令牌桥接文件
- 英文和简体中文文档
- marketing 和 console 示例布局
- 用于令牌、组件和视觉规则的展示页面

## 安装

克隆仓库：

```sh
git clone https://github.com/perelmangao/jojo-design-system.git
```

或安装 npm 包：

```sh
npm install jojo-design-system
```

## 使用

引入样式表：

```html
<link rel="stylesheet" href="styles.css" />
```

在 CSS 中使用令牌别名：

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

从全局命名空间读取组件：

```js
const { Button, Card, Input, Table } = window.JojoDesignSystem;
```

Tailwind v4 项目可以在 Tailwind 入口中导入桥接文件：

```css
@import "jojo-design-system/tailwind-bridge.css";
```

`styles.css` 不会导入 Tailwind 桥接文件。

## 设计约束

系统使用一组固定的视觉规则：

- 中性色来自同一个 HSL 色阶。
- 卡片使用 4px 圆角。
- 按钮、标签、头像和小型控件使用完整圆角。
- `--hairline` 用于低强调边框。
- `--rule-ink` 用于强调边框。
- `--accent-orange` 用于链接、激活状态和焦点状态。
- 组件和布局样式应使用令牌别名，不应硬编码颜色、圆角、间距或动效值。

## 项目结构

```txt
jojo-design-system/
├── styles.css      CSS 入口
├── tokens/         CSS 自定义属性和基础样式
├── components/     React 组件和组件样式
├── ui_kits/        示例页面布局
├── guidelines/     令牌和组件展示页面
├── assets/         logo 文件和资源说明
├── docs/           英文和简体中文文档
├── index.html      概览页面
└── SKILL.md        面向 coding agent 的使用说明
```

## 文档

英文：

- [Getting started](./docs/en/getting-started.md)
- [Design language](./docs/en/design-language.md)
- [Design tokens](./docs/en/design-tokens.md)
- [Components](./docs/en/components.md)

简体中文：

- [快速开始](./docs/zh-CN/getting-started.md)
- [设计语言](./docs/zh-CN/design-language.md)
- [设计令牌](./docs/zh-CN/design-tokens.md)
- [组件](./docs/zh-CN/components.md)

## 示例

通过 HTTP 服务运行仓库根目录：

```sh
npx serve .
```

然后打开：

- [`index.html`](./index.html)
- [`ui_kits/marketing/`](./ui_kits/marketing/)
- [`ui_kits/console/`](./ui_kits/console/)

## 字体和图标

字体在 [`tokens/fonts.css`](./tokens/fonts.css) 中从 Google Fonts 加载：

- Geist
- Geist Mono
- EB Garamond

图标使用 CDN 上的 [Lucide](https://lucide.dev)。

## 贡献

欢迎提交 issue 和 pull request。提交 pull request 前，请阅读
[`CONTRIBUTING.zh-CN.md`](./CONTRIBUTING.zh-CN.md)。参与本项目需遵守
[`Code of Conduct`](./CODE_OF_CONDUCT.md)。版本记录见
[`CHANGELOG.md`](./CHANGELOG.md)。

## 许可证

[MIT](./LICENSE) © 2026 perelmangao。
