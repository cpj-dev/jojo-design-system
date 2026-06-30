[English](../en/design-language.md) · **简体中文**

# 设计语言

本页记录 jojo 使用的视觉约束。这些约束由 [`tokens/`](../../tokens/) 中的 CSS
自定义属性和 [`components/jojo.css`](../../components/jojo.css) 中的组件样式实现。

## 颜色

颜色值分为两层：

1. [`tokens/colors.css`](../../tokens/colors.css) 中的原始 HSL 三元组。
2. [`tokens/semantic.css`](../../tokens/semantic.css) 中已解析的语义别名。

在组件和布局中使用语义别名：

- `--bg-app` 用于页面背景
- `--bg-card` 和 `--bg-1` 到 `--bg-4` 用于表面
- `--fg-1` 和 `--fg-2` 用于文本
- `--fill-ink` 用于主操作填充
- `--accent-orange` 用于链接、激活状态和焦点状态
- `--hairline` 用于标准边框
- `--rule-ink` 用于对比度更高的边框

状态色（`--ok`、`--info`、`--warning`、`--danger`）用于内容、徽标和数据状态。

## 排版

字体栈定义在 [`tokens/typography.css`](../../tokens/typography.css)，并通过
[`tokens/fonts.css`](../../tokens/fonts.css) 加载：

- Geist 用于 UI 文本和标题
- Geist Mono 用于代码、命令、快捷键和字面量输入
- EB Garamond 用于长引导文案和引用

展示文本使用 400 字重和负字距。正文使用 14-16px，并使用 `--leading-body`。

## 圆角

圆角值定义在 [`tokens/geometry.css`](../../tokens/geometry.css)：

- `--radius-inline` 用于行内代码
- `--radius` 用于卡片、输入框和徽标
- `--radius-trigger` 用于搜索和图标触发器
- `--radius-callout` 用于 callout
- `--radius-panel` 用于大型面板和结构区域
- `--radius-pill` 用于按钮、标签、开关、状态点和头像

同一区域内使用一种圆角处理。

## 边框

标准边框均为 1px。使用：

- `--hairline` 用于分隔线、表格行、标签页、输入框和低对比度边缘
- `--rule-ink` 用于选中、带框或对比度更高的表面

避免在同一区域内嵌套多个带边框容器。

## 间距和布局

间距值定义在 [`tokens/geometry.css`](../../tokens/geometry.css)。使用共享间距
尺度，不要添加临时值。顶层视图应使用共享宽度（`--view-max`）和页面内边距。

相关内容优先通过间距、标题、分隔线或背景层级进行分组，再考虑增加带边框容器。

## 动效

动效值定义在 [`tokens/motion.css`](../../tokens/motion.css)：

- `--motion-instant` 用于即时交互状态
- `--motion-color` 用于颜色和透明度过渡
- `--motion-reveal` 用于展开面板

交互状态不应依赖 transform、scale、translate 或 box-shadow。
[`tokens/base.css`](../../tokens/base.css) 中的全局 reset 包含
`prefers-reduced-motion` 处理。

## 图标

示例使用 CDN 上的 [Lucide](https://lucide.dev) 图标。图标继承 `currentColor`，
尺寸应与周围文本匹配。

状态应通过状态令牌或 `StatusDot` 表示，而不是装饰性图标或 emoji。

## 写作规则

项目文案应描述实现事实：

- 直接写出文件、组件、令牌、props 和命令。
- 使用短句。
- 使用具体名词，不使用口号。
- 避免最高级和自造短语。
- UI 文案中避免 emoji 和感叹号。

## 另见

- [设计令牌](./design-tokens.md)
- [组件](./components.md)
- [快速开始](./getting-started.md)
