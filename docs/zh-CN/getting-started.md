[English](../en/getting-started.md) · **简体中文**

# 快速开始

jojo 是一套原创、框架无关的设计系统——暖纸落墨（Warm paper, drawn in ink）。它以纯文件的形式发布：一个 CSS 入口、一组设计令牌，以及 20 个 React 基础组件。没有构建步骤，也没有运行时依赖。你只需链接一个样式表、引用已解析的令牌，并按需从一个全局命名空间中取用这些基础组件。

本页介绍如何获取文件、链接样式表、在纯 CSS 或 JSX 中使用令牌、可选的 Tailwind v4 桥接、取用 React 基础组件，以及打开演示。

## 获取文件

你需要的一切都在仓库里。选择最适合你项目的方式即可。

**克隆仓库**——你会在同一棵目录树中得到令牌、组件、规范、UI 套件和资源：

```sh
git clone https://github.com/perelmangao/jojo-design-system.git
```

**按需复制**——这套系统就是一堆文件。把 `styles.css` 以及 `tokens/` 和 `components/` 文件夹复制到你的项目中，并保持相对路径不变（`styles.css` 是相对其自身来解析 import 的）。

**安装这个包**——`package.json` 将 `styles.css` 暴露为主入口，并提供对 `./tokens/*`、`./components/*` 和 `./tailwind-bridge.css` 的子路径访问：

```sh
npm install jojo-design-system
```

它采用 MIT 许可证，因此以上任意方式都可用于任何项目。

## 链接唯一入口

使用者只需链接一个文件：[`styles.css`](../../styles.css)。它仅由一串 `@import` 行组成——按此顺序引入开源字体、原始令牌、已解析的语义别名、排版、几何、动效、基础样式以及组件样式。

```html
<link rel="stylesheet" href="path/to/styles.css" />
```

或者从 CSS/JS 入口引入：

```css
@import "jojo-design-system/styles.css";
```

那一个链接就是整张样式表。三种字体家族——**Geist**（无衬线 / 展示）、**Geist Mono**（代码）和 **EB Garamond**（衬线）——都是开源的，由被引入的 `tokens/fonts.css` 从 Google Fonts 加载，因此你无需自行托管或配置任何字体二进制文件。

## 引用已解析的令牌

通过读取已解析的语义令牌来为你自己的标记设置样式——永远不要硬编码颜色、圆角或细描边。这些别名会在浅色与深色主题下自动解析到正确的值（深色是根元素上的 `.dark` 类）。下面是几个你会经常用到的：

- `--bg-app` —— 页面背景（暖纸）
- `--bg-card` —— 抬起的表面
- `--fg-1` —— 主墨色；`--fg-2` —— 次墨色
- `--accent-orange` —— 唯一的强调色，仅用于状态（链接、激活、焦点）——绝不用作填充
- `--rule-ink` —— 墨线描边；`--hairline` —— 几乎不可见的框架细线（细描边）

在纯 CSS 中：

```css
.panel {
  background: var(--bg-card);
  color: var(--fg-1);
  border: 1px solid var(--hairline);
}
.panel a {
  color: var(--accent-orange);
}
```

同样的变量也可作为 JSX 中的内联样式使用——它们是实时的 CSS 自定义属性，因此无需任何 JS 就能跟随当前主题：

```jsx
<div style={{ background: "var(--bg-card)", color: "var(--fg-1)" }}>
  <a style={{ color: "var(--accent-orange)" }}>Read the docs</a>
</div>
```

## Tailwind v4（可选）

如果你的项目使用 Tailwind v4，请按需引入 [`tokens/tailwind-bridge.css`](../../tokens/tailwind-bridge.css)。它被刻意设计为**不**由 `styles.css` 引入——它需要 Tailwind 工具链，在纯 HTML 中不起任何作用。在 Tailwind v4 中，v3 风格的色阶不会被加载，因此像 `bg-card`、`text-muted-foreground` 和 `border-border` 这样的具名工具类会悄无声息地什么都不输出。这个桥接文件的 `@theme inline` 块会映射 jojo 的令牌，让这些工具类得以解析。

把它加到你的 Tailwind 入口中（而不是 `styles.css`）：

```css
@import "jojo-design-system/tailwind-bridge.css";
```

如果你不使用 Tailwind，完全忽略这个文件即可。

## 取用 React 基础组件

这 20 个基础组件——核心（Button、IconButton、Badge、Tag、StatusDot、Avatar、Kbd、Separator）、表单（Input、Textarea、Select、Checkbox、Switch、SegmentedControl）、表面（Card、Callout、Flyout、Tooltip）和数据（Table、Tabs）——都暴露在全局 `window.JojoDesignSystem` 上。解构出你需要的那些，然后照常写 JSX 即可：

```jsx
const { Button, Input, Card } = window.JojoDesignSystem;

function SignInCard() {
  return (
    <Card>
      <Input placeholder="you@example.com" />
      <Button variant="primary">Get started</Button>
    </Card>
  );
}
```

每个基础组件都附带一个用于类型的 `.d.ts` 和一个描述其意图的 `.prompt.md`，两者都与组件一起放在 [`components/`](../../components/) 中。这些基础组件本身就讲着这套系统的语言——其变体映射到墨色、细描边和墨线描边——因此你无需再为它们重新设置样式。

## 打开演示

由于这套系统就是一堆纯文件，演示通过一个静态服务器运行。在仓库根目录下：

```sh
npx serve .
```

然后打开：

- [`index.html`](../../index.html) —— 概览 SPA：令牌、字体样张和五个标志性特征。
- [`ui_kits/marketing/`](../../ui_kits/marketing/) —— 一个推介 jojo 本身的营销站点，由这些基础组件组合而成，并带有浅色/深色切换。
- [`ui_kits/console/`](../../ui_kits/console/) —— 一个用 jojo 构建的示例产品界面。

## 下一步

- 阅读[设计语言](./design-language.md)，了解五个标志性特征及其背后的规则。
- 在 [`components/`](../../components/) 中浏览基础组件和样张卡片，以及项目的 [`README.md`](../../README.md)。

---

jojo 以作者的猫 jojo 命名。它是原创且无任何关联方的——© 2026 perelmangao，采用 MIT 许可证。
