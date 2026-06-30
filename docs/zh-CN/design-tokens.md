[English](../en/design-tokens.md) · **简体中文**

# 设计令牌

jojo 中的每一个值——颜色、文字、几何、动效——都是一个 CSS 自定义属性。你永远不会在组件里手写十六进制色值、像素圆角或阴影。你引用一个设计令牌，令牌便会解析为当前主题下应有的值。

设计令牌通过唯一的入口 [`styles.css`](../../styles.css) 加载，它在任何组件 CSS 之前 `@import` 字体网页字体和全部令牌文件。只需链接这一个样式表即可采用 jojo；下文的变量随即在 `:root` 上生效，并在 `.dark` 下重新解析。

## 两个层级

颜色分两层构建，让主题保持诚实、组件保持简单。

**第 1 层——原始 HSL 三元组。** [`tokens/colors.css`](../../tokens/colors.css) 将每个值写成裸的 shadcn 风格色相/饱和度/明度三元组，例如 `--foreground: 53 12% 13%;`（暖近黑墨色，`#26251e`）和 `--background: 60 16% 96%;`（暖奶油纸色，`#f7f7f4`）。第二个作用于 `.dark, [data-theme="dark"]` 的代码块用深色值重新定义这些同名三元组。这些三元组不能直接使用——它们没有 `hsl()` 包裹——你也不应在组件里读取它们。

**第 2 层——解析后的语义别名。** [`tokens/semantic.css`](../../tokens/semantic.css) 将每个原始三元组恰好用 `hsl()` 包裹一次，并赋予一个角色名：`--fg-1: hsl(var(--foreground));`。这些别名一起声明在 `:root, .dark, [data-theme="dark"]` 之下，因此内层的 `var(--foreground)` 会按主题作用域重新解析——别名会自动跟随主题。**这些才是你要使用的值。**

```css
/* Layer 1 — colors.css: raw triplet, swaps in .dark */
--foreground: 53 12% 13%;          /* light */ /* -> 48 6% 93% in .dark */

/* Layer 2 — semantic.css: resolved alias (use this) */
--fg-1: hsl(var(--foreground));

/* In a component — reference the alias, never the triplet or a hex */
.thing { color: var(--fg-1); }
```

唯一的强调色是暖橙 `#eb5600`（`--ring`），在深色下提亮为 `#ff7a2e` 以满足 AA 对比度。它只承载状态——链接、活动导航、焦点——绝不用作填充、背景或装饰。

## 表面——暖纸 → 墨的色阶

| 别名 | 解析为 | 角色 |
|---|---|---|
| `--bg-app` | `hsl(var(--background))` | 页面纸色——应用框架、导航、标签页 |
| `--bg-1` | `hsl(var(--bg-card-1))` | 侧栏 / 媒体井（离纸色一级） |
| `--bg-card` | `hsl(var(--card))` | 默认卡片 + 浮层表面 |
| `--bg-2` | `hsl(var(--bg-card-2))` | 悬停 / 弱化 / 着色井 |
| `--bg-3` | `hsl(var(--bg-card-3))` | 次级填充 / 分段控件轨道 |
| `--bg-4` | `hsl(var(--bg-card-4))` | 最深的井 |
| `--bg-popover` | `hsl(var(--popover))` | 浮层 / 下拉 / 工具提示表面 |

## 墨、填充与强调色

| 别名 | 解析为 | 角色 |
|---|---|---|
| `--fg-1` | `hsl(var(--foreground))` | 主墨色文本 |
| `--fg-2` | `hsl(var(--muted-foreground))` | 弱化正文 / 元信息（按 AA 调校） |
| `--fg-on-ink` | `hsl(var(--primary-foreground))` | 墨色填充上的奶油色文本 |
| `--fill-ink` | `hsl(var(--primary))` | 主 CTA / 墨色按钮填充（动作为黑色） |
| `--accent-orange` | `hsl(var(--ring))` | 唯一的强调色——只表状态，绝不作填充 |
| `--link` | `hsl(var(--ring))` | 强调色的角色别名 |
| `--focus` | `hsl(var(--ring))` | 角色别名——focus-visible 焦点环 |

## 边框——双重系统

| 别名 | 解析为 | 角色 |
|---|---|---|
| `--hairline` | `hsl(var(--border))` | 若有若无的分隔线 / 通用边缘 |
| `--rule-ink` | `hsl(var(--outline-ink))` | 标志性的硬近黑 1px 墨线描边，用于强调 |

两者之间的反差——用于框架的淡细描边与用于强调的硬墨线描边——是五大签名之一。所有边框都是 1px。

## 状态——仅用于内容和数据

状态色被隔离在框架之外。在内容、徽标和数据可视化中使用它们；绝不用于导航、按钮或布局。

| 别名 | 解析为 | 角色 |
|---|---|---|
| `--ok` | `hsl(var(--chart-4))` | 成功绿 |
| `--info` | `hsl(var(--chart-3))` | 信息蓝 |
| `--warning` | `hsl(var(--warn))` | 暖琥珀（按 AA 调校） |
| `--danger` | `hsl(var(--destructive))` | crimson |
| `--on-danger` | `hsl(var(--destructive-foreground))` | danger 填充上的文本 |

每个状态都有一对着色，用于徽标/淡彩模式——12% 填充、45% 边框、实色前景：

| 着色 | 边缘 |
|---|---|
| `--ok-tint` (`/ 0.12`) | `--ok-edge` (`/ 0.45`) |
| `--info-tint` (`/ 0.12`) | `--info-edge` (`/ 0.45`) |
| `--warning-tint` (`/ 0.12`) | `--warning-edge` (`/ 0.45`) |
| `--danger-tint` (`/ 0.12`) | `--danger-edge` (`/ 0.45`) |

还有两个别名补全了表面系统：`--scrim`（`hsl(var(--foreground) / 0.25)`，一层平涂墨色遮罩——绝不使用背景模糊）以及平直的高度直通值 `--elevation-card` 和 `--elevation-flyout`。

## 排版

定义于 [`tokens/typography.css`](../../tokens/typography.css)。三个开源字体家族，经 [`tokens/fonts.css`](../../tokens/fonts.css) 从 Google Fonts 加载：Geist（无衬线 grotesque / 展示）、Geist Mono（全部代码与命令）、EB Garamond（衬线引导文案）。绝不在单个 UI 控件内混用字体家族。

| 令牌 | 值 |
|---|---|
| `--font-sans` | `"Geist", Inter, system-ui, "Helvetica Neue", Arial, sans-serif` |
| `--font-mono` | `"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` |
| `--font-serif` | `"EB Garamond", "Iowan Old Style", "Palatino Linotype", ui-serif, Georgia, serif` |

字号大而轻——层级来自尺寸与负字距，而非字重。整个系统以字重 400 运行。

| 尺寸 | 值 | 字距 | 用途 |
|---|---|---|---|
| `--text-display` | `72px` | `--tracking-display: -2.16px` | 主视觉 |
| `--text-h1` | `36px` | `--tracking-h1: -0.72px` | 页面 h1 |
| `--text-h2` | `18px` | `--tracking-h2: -0.18px` | 区块标题 |
| `--text-lg` | `16px` | — | 默认阅读 / 侧栏 |
| `--text-body` | `14px` | — | UI 正文、导航、按钮、表格 |
| `--text-label` | `12px` | — | 元信息、等宽代码、标签页 |

行高与字重：`--leading-tight: 1.0`、`--leading-body: 1.5`；`--weight-base: 400`、`--weight-med: 500`、`--weight-bold: 700`（700 很少用）。用 `--measure: 68ch` 限制阅读行长。

## 几何与间距

定义于 [`tokens/geometry.css`](../../tokens/geometry.css)。三个圆角档位：0px 结构性、4px 主导、full-pill 全胶囊控件。不嵌套圆角——每个区域只用一种圆角。

| 令牌 | 值 | 用途 |
|---|---|---|
| `--radius-inline` | `2px` | 内联代码 |
| `--radius` | `4px` (`0.25rem`) | 主导档位——卡片、输入框、徽标（定义于 `colors.css`） |
| `--radius-trigger` | `8px` | 搜索 / 图标触发器、媒体卡片 |
| `--radius-callout` | `10px` | callout 提示框 |
| `--radius-panel` | `0px` | 大页面/区块面板、导航、标签页、标题 |
| `--radius-pill` | `9999px` | 每一个按钮、版本标签、开关、状态点、头像 |

边框始终为 1px：`--border-width: 1px`。

间距阶梯精瘦而密集：

| 令牌 | 值 | 令牌 | 值 |
|---|---|---|---|
| `--space-1` | `2px` | `--space-5` | `10px` |
| `--space-2` | `4px` | `--space-6` | `14px` |
| `--space-3` | `6px` | `--space-7` | `20px`（区域之间） |
| `--space-4` | `8px` | `--space-8` | `28px`（主要区段之间） |

控件高度与视图外壳：

| 令牌 | 值 | 用途 |
|---|---|---|
| `--row-h` | `29px` | 侧栏 / 导航行 |
| `--input-h` | `44px` | 实际输入框 |
| `--trigger-h` | `36px` | 作为触发器的搜索框 |
| `--view-max` | `80rem`（约 1280px） | 每个顶层视图共享的最大宽度 |

内容通过 `--shell-pad`（`var(--space-7)`，20px）和 `--shell-pad-lg`（`var(--space-8)`，在 ≥ lg 时 28px）与页头共享水平内缩。

## 动效

定义于 [`tokens/motion.css`](../../tokens/motion.css)。状态反馈是颜色，绝不是几何——交互元素上不用 transform、scale、translate 或阴影。两个层级，外加一个揭示时长。

| 令牌 | 值 | 用途 |
|---|---|---|
| `--motion-instant` | `0s` | 按钮、导航链接、卡片、行——所有状态反馈 |
| `--motion-color` | `200ms ease` | 内容色彩/不透明度渐变、输入框；常规过渡不超过约 250ms |
| `--motion-reveal` | `180ms ease` | 揭示/展开面板（不透明度，仅面板自身 ≤6px translateY） |

重置、焦点环以及 `prefers-reduced-motion` 守卫位于 [`tokens/base.css`](../../tokens/base.css)。

## 规则：引用解析后的别名，绝不硬编码

正是这一纪律，让每个屏幕在浅色与深色下保持一致。

- **始终**取用 `semantic.css` 中解析后的别名——`var(--fg-1)`、`var(--bg-card)`、`var(--accent-orange)`——或某个排版/几何/动效令牌。
- **绝不**在组件中硬编码十六进制色值、HSL 值、像素圆角、阴影或时长。
- **绝不**直接读取原始三元组（`--foreground`、`--ring`、`--bg-card-1`）——它没有 `hsl()` 包裹，无法渲染。这些名字属于原始层和可选的 Tailwind 桥接（[`tokens/tailwind-bridge.css`](../../tokens/tailwind-bridge.css)，需主动启用，未被 `styles.css` 导入）。

因为别名会按主题作用域重新解析，一个针对 `var(--fg-1)` 和 `var(--bg-card)` 编写的组件，无需额外工作便在两种主题下都正确。一旦硬编码某个值，主题切换的瞬间你就破坏了这一契约。

另见：[设计语言](./design-language.md)，了解这些令牌所表达的五大签名。
