[English](./CONTRIBUTING.md) · **简体中文**

# 为 jojo 贡献

感谢你为 jojo 出力。jojo 是一套原创、框架无关的设计系统——“暖纸落墨（Warm paper,
drawn in ink）”——由 [perelmangao](mailto:perelmangao@gmail.com) 编写，以作者的猫
命名。它采用 MIT 许可（见 [LICENSE](./LICENSE)），与任何公司或产品均无关联。

设计语言是核心。本指南的大部分内容，都是关于如何让每一次改动都留在这套语言之内，
使整个系统在设计令牌、组件、UI kits 与文档之间始终保持为一个连贯的整体。

## 本地运行

浏览这套系统不需要构建步骤。把目录跑成服务，然后打开页面：

```bash
npx serve .
```

接着访问：

- `index.html` —— 总览 SPA。它会加载每一个设计令牌、组件与样例卡片，并带一个可用的
  浅色 / 深色切换。
- `ui_kits/marketing/index.html` —— 营销站点（jojo 为自身做营销）。
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
- [`ui_kits/`](./ui_kits) —— `marketing/`（为 jojo 做营销）与 `console/`（一个
  示例产品）。
- [`guidelines/`](./guidelines) —— 关于颜色、字体、间距、几何与品牌的样例卡片。
- `docs/` —— 散文式文档，含英文（`docs/en/`）与简体中文（`docs/zh-CN/`）。
- [`SKILL.md`](./SKILL.md) —— 让你把这个目录当作 Agent Skill 使用。

## 每一次改动都必须遵守的设计规则

这些不是偏好。任何打破其中之一的改动都是“脱离系统”的，无论它单独看上去多么漂亮。

**五个标志。**

1. **暖纸单色，单一色相。** 每一种中性色——文字色阶、描边、卡片色阶——都是同一种暖墨
   叠入同一种暖纸而来。绝不要另选一种灰，更不要选冷调的蓝灰。
2. **锐利的 4px 卡片，全药丸控件。** 近乎方正的容器；完全圆角的按钮、标签、圆点与
   头像。不要柔和的 8–16px 卡片。
3. **墨线描边与细描边并置。** 几乎不可见的细描边（`--hairline`）用于功能性外框，
   完整的墨线描边（`--rule-ink`）用于强调或框定。两者之间的对比，正是这份克制的
   标志所在。
4. **大字号、轻字重的 grotesque 展示字体。** 展示字体以字重 400 配负字距排版。
   层级来自字号与字距，而非字重。
5. **平整、哑光，仅以一种橙色强调色表达状态。** 这种橙色（`--accent-orange`）只作为
   链接、激活与焦点出现——绝不用作填充、背景或装饰。

**反盒式布局。** 用能奏效的最廉价分隔手段来分组——空白、区块标题、细描边 `divide-y`、
背景着色——再考虑动用一道边框。每个区域至多一个带边框的容器；绝不在卡片里再套卡片。

**仅靠颜色的动效。** 状态反馈靠颜色，绝不靠几何。悬停、按下、激活与选中只切换某个
令牌（一个色阶步进、一种文字色、焦点环）；它们绝不 `transform`、`scale`、`translate`，
也不添加 `box-shadow`。`tokens/base.css` 中的 `prefers-reduced-motion` 守卫默认生效。

**用解析后的令牌，而非硬编码取值。** 引用 `tokens/semantic.css` 中解析后的别名
（`var(--bg-card)`、`var(--fg-1)`、`var(--accent-orange)`、`var(--hairline)`、
`var(--rule-ink)`）。不要把十六进制、原始 HSL，或随手写的圆角与阴影粘进组件或 kit。

**两种主题都达到 AA，以及键盘导航。** 每一次改动都必须在浅色**和**深色下都满足
WCAG AA 对比度，并且完全可用键盘操作、带有可见的焦点环。在开 PR 之前，切换主题、
用 Tab 走一遍你的改动。

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
4. 保持单一色相的机制不变：一种新的中性色，是把已有的墨叠入已有的纸，而不是一种
   新的灰。确认两种主题都达到 AA。

## 新增一个组件

1. 在 `components/` 下正确的分组里创建 `.jsx`，用 `jojo-` 前缀的类名书写；把样式放进
   `components/jojo.css`，且只引用解析后的令牌。把组件挂到 `window.JojoDesignSystem`
   上，使使用者与样例卡片都能读取它。
2. 在它旁边附一个 `.d.ts`，写明 prop 类型（形态参见
   `components/core/Badge.d.ts`）。
3. 附一个 `.prompt.md` —— 一段简短的用法说明，含一个代码示例与该组件的经验法则
   （参见 `components/core/Badge.prompt.md`）。
4. 把该组件加进所属分组的样例卡片（`core.card.html`、`forms.card.html`、
   `surfaces.card.html` 或 `data.card.html`），使它在总览 SPA 中、在浅色与深色下
   都能出现。
5. 确保它可用键盘操作、带共享的焦点环，并且状态仅以颜色表达。

## 新增一张指南卡片

样例卡片位于 `guidelines/<group>/<name>.card.html`。每张卡片以一段 `@dsCard` HTML
注释（`group`、`viewport`、`name`、`subtitle`）开头，供总览 SPA 读取以放置卡片，
随后链接 `../../styles.css`，并渲染一个小而专注的演示。一张卡片只讲一个想法，并保持
在系统之内——指南卡片要服从它所记录的同一套规则。

## 文档是双语的

每一个散文式文档页面都同时存在于两种语言，两者必须一起推进。如果你改了
`docs/en/<page>.md`，就要在同一个 PR 里更新 `docs/zh-CN/<page>.md`（`README.md` /
`README.zh-CN.md` 同理）。每个页面都以它的语言切换行开头：

- English：`**English** · [简体中文](<相对路径，指向 zh-CN 同级文件>)`
- 简体中文：`[English](<相对路径，指向 en 同级文件>) · **简体中文**`

用项目术语表翻译散文，但把令牌名、文件路径、组件名与品牌名 “jojo” 保持原样——
绝不翻译标识符。

## 提交与合并请求

- 让改动保持手术刀式的精准。改文案或取值，而不是动可用的类名、
  `window.JojoDesignSystem` 命名空间、文件路径或令牌名，除非这正是本次改动的目的。
- 提交信息用 sentence case、现在时书写，说明改了什么、服务于哪一条规则或标志。
- 一个 PR 只谈一件事。在描述里说明你是如何验证的：打开了哪些页面、AA 在两种主题下
  都成立、键盘导航可用。
- 当改动对用户可见时更新 [`CHANGELOG.md`](./CHANGELOG.md)，并让英文与简体中文文档
  保持同步。
- 任何你新增的文案都要具体、不浮夸——sentence case、第二人称、产品或营销外框中
  不用 emoji，UI 中不用感叹号。

## 行为准则

参与即表示你同意遵守 [行为准则](./CODE_OF_CONDUCT.md)。如有顾虑，请反馈至
[perelmangao@gmail.com](mailto:perelmangao@gmail.com)。
