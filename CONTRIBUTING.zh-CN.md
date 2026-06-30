[English](./CONTRIBUTING.md) · **简体中文**

# 为 jojo 贡献

感谢你为 jojo 贡献。本指南说明如何本地运行项目、更新文档、新增令牌、新增组件，
以及准备 pull request。

## 本地运行

浏览这套系统不需要构建步骤。把目录跑成服务，然后打开页面：

```bash
npx serve .
```

接着访问：

- `index.html` —— 总览 SPA。它会加载每一个设计令牌、组件与样例卡片，并带一个可用的
  浅色 / 深色切换。
- `ui_kits/marketing/index.html` —— marketing 示例页面。
- `ui_kits/console/index.html` —— 用 jojo 搭建的示例产品。

`guidelines/` 下的各个样例卡片也以同样方式打开。所有内容都读取自单一入口样式表
[`styles.css`](./styles.css)，React 基础组件则挂载在 `window.JojoDesignSystem` 上。

## 仓库结构

- [`styles.css`](./styles.css) —— 单一入口。它通过 `@import` 引入字体、每一个令牌
  文件、基础重置，以及 `components/jojo.css`。使用者只链接这一个文件。
- [`tokens/`](./tokens) —— 各项取值的事实来源：
  - `fonts.css` —— 三个开源字体家族，从 Google Fonts 加载。
  - [`colors.css`](./tokens/colors.css) —— 原始的 shadcn HSL 三元组，含浅色
    （`:root`）与深色（`.dark` / `[data-theme="dark"]`）。
  - [`semantic.css`](./tokens/semantic.css) —— 解析后、可直接使用的别名
    （`--bg-app`、`--bg-card`、`--fg-1`、`--fg-2`、`--accent-orange`、
    `--rule-ink`、`--hairline`，……）。
  - `typography.css`、`geometry.css`、`motion.css`。
  - `base.css` —— 重置、焦点环，以及 `prefers-reduced-motion` 守卫。
  - `tailwind-bridge.css` —— 面向 Tailwind v4 的可选引入。它**不会**被
    `styles.css` 引入。
- [`components/`](./components) —— 20 个 React 基础组件，读取自
  `window.JojoDesignSystem`，分为 core（Button、IconButton、Badge、Tag、
  StatusDot、Avatar、Kbd、Separator）、forms（Input、Textarea、Select、Checkbox、
  Switch、SegmentedControl）、surfaces（Card、Callout、Flyout、Tooltip）与 data
  （Table、Tabs）。组件 CSS 放在 `components/jojo.css`。每个基础组件都附带一个
  `.d.ts`、一个 `.prompt.md`，并在所属分组的 `.card.html` 中展示。
- [`ui_kits/`](./ui_kits) —— `marketing/` 与 `console/` 示例页面。
- [`guidelines/`](./guidelines) —— 关于颜色、字体、间距、几何与资源的样例卡片。
- `docs/` —— 散文式文档，含英文（`docs/en/`）与简体中文（`docs/zh-CN/`）。
- [`SKILL.md`](./SKILL.md) —— 让你把这个目录当作 Agent Skill 使用。

## 设计约束

提交 pull request 前，请检查改动是否符合以下约束：

- 使用 `tokens/semantic.css` 中的语义令牌别名，例如 `var(--bg-card)`、
  `var(--fg-1)`、`var(--accent-orange)`、`var(--hairline)` 和 `var(--rule-ink)`。
- 新增原始颜色值时，写入 `tokens/colors.css`；新增语义别名时，写入
  `tokens/semantic.css`。
- 使用共享的圆角、间距、排版和动效令牌，不添加临时值。
- `--accent-orange` 用于链接、激活状态和焦点状态。
- 状态色用于内容、徽标和数据状态。
- 交互状态应支持键盘操作，并具有可见焦点环。
- 在浅色和深色主题下验证对比度。

## 新增一个设计令牌

1. 对于颜色，把原始的 shadcn HSL 三元组同时加到
   [`tokens/colors.css`](./tokens/colors.css) 的浅色 `:root` 块与深色 `.dark` /
   `[data-theme="dark"]` 块中。保留 `@kind color` 注记，以便索引器进行分类。
2. 在 [`tokens/semantic.css`](./tokens/semantic.css) 中新增一个解析后的别名，把三元组
   用 `hsl()` 包一次，使纯 CSS 与 JSX 都能直接使用。不要重新定义已有的 shadcn 三元组
   名称（`--card`、`--accent`、`--border`、`--ring`，……）——那会破坏原始层与
   Tailwind bridge。
3. 对于非颜色令牌，把它加到对应文件——`typography.css`、`geometry.css` 或
   `motion.css`。
4. 确认两种主题都达到 AA 对比度。

## 新增一个组件

1. 在 `components/` 下正确的分组里创建 `.jsx`，用 `jojo-` 前缀的类名书写；把样式放进
   `components/jojo.css`，且只引用共享令牌。把组件挂到 `window.JojoDesignSystem`
   上，使使用者与样例卡片都能读取它。
2. 在它旁边附一个 `.d.ts`，写明 prop 类型（形态参见
   `components/core/Badge.d.ts`）。
3. 附一个 `.prompt.md` —— 一段简短的用法说明，含一个代码示例与该组件的经验法则
   （参见 `components/core/Badge.prompt.md`）。
4. 把该组件加进所属分组的样例卡片（`core.card.html`、`forms.card.html`、
   `surfaces.card.html` 或 `data.card.html`），使它在总览 SPA 中、在浅色与深色下
   都能出现。
5. 确保它可用键盘操作，并带共享的焦点环。

## 新增一张指南卡片

样例卡片位于 `guidelines/<group>/<name>.card.html`。每张卡片以一段 `@dsCard` HTML
注释（`group`、`viewport`、`name`、`subtitle`）开头，供总览 SPA 读取以放置卡片，
随后链接 `../../styles.css`，并渲染一个小而专注的演示。一张卡片只讲一个想法。

## 文档是双语的

每一个散文式文档页面都同时存在于两种语言，两者必须一起推进。如果你改了
`docs/en/<page>.md`，就要在同一个 PR 里更新 `docs/zh-CN/<page>.md`（`README.md` /
`README.zh-CN.md` 同理）。每个页面都以它的语言切换行开头：

- English：`**English** · [简体中文](<相对路径，指向 zh-CN 同级文件>)`
- 简体中文：`[English](<相对路径，指向 en 同级文件>) · **简体中文**`

用项目术语表翻译散文，但把令牌名、文件路径、组件名与项目名 “jojo” 保持原样。
不要翻译标识符。

## 提交与合并请求

- 保持改动范围清晰。改文案或取值，而不是动可用的类名、
  `window.JojoDesignSystem` 命名空间、文件路径或令牌名，除非这正是本次改动的目的。
- 提交信息用 sentence case 和现在时书写。
- 一个 PR 只谈一件事。在描述里说明你是如何验证的：打开了哪些页面、AA 在两种主题下
  都成立、键盘导航可用。
- 当改动对用户可见时更新 [`CHANGELOG.md`](./CHANGELOG.md)，并让英文与简体中文文档
  保持同步。
- 新增文案应具体。使用 sentence case。避免 emoji、口号、最高级和 UI 感叹号。

## 行为准则

参与即表示你同意遵守 [行为准则](./CODE_OF_CONDUCT.md)。如有顾虑，请反馈至
[perelmangao@gmail.com](mailto:perelmangao@gmail.com)。
