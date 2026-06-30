[English](../en/components.md) · **简体中文**

# 组件

jojo 提供 20 个 React 基础组件。它们是仍然让人觉得完整的最小一组构建块——足以拼装出导航栏、表单、表格和对话框，而无需再引入第二个库。每个基础组件都已经在讲这套系统的语言：暖纸单色、双描边规则、全药丸形（full-pill）控件，以及仅用颜色表达的状态。你只负责组合它们，而不是重新给它们设样式。

这些基础组件位于 [`components/`](../../components/) 下，分为四个文件夹。

## 清单

### Core 核心 —— [`components/core/`](../../components/core/)

日常的构建块：操作、标签，以及小的内联标记。

- **Button** —— 主力操作组件。全药丸形，即时响应（无动效）。变体：`primary`（墨填充）、`secondary`、`ghost`、`outline`（墨线硬边）、`tertiary`（橙色文字 CTA，自动追加 `→`）、`quinary`（纯文字）。
- **IconButton** —— 方形、仅含图标的操作，用于工具栏和密集的界面外框。
- **Badge** —— 小型的状态或计数标签。
- **Tag** —— 可移除或可选择的元数据标签片（chip）。
- **StatusDot** —— 用单个彩色圆点表示实时状态（ok、warning、offline）。
- **Avatar** —— 用户或实体头像，带有首字母缩写的回退显示。
- **Kbd** —— 用于快捷键的键盘按键字形。
- **Separator** —— 一条细描边分隔线，用于在不使用盒子的情况下进行分组。

### Forms 表单 —— [`components/forms/`](../../components/forms/)

输入与开关类控件。真正的文本输入框高 44px；控件为药丸形。

- **Input** —— 单行文本输入框。
- **Textarea** —— 多行文本输入框。
- **Select** —— 基于原生实现的下拉选择框。
- **Checkbox** —— 列表中的二选一勾选项。
- **Switch** —— 即时切换的开/关开关。
- **SegmentedControl** —— 在同一条轨道中的一小组互斥选项。

### Surfaces 表面 —— [`components/surfaces/`](../../components/surfaces/)

容器与浮层。每个区域至多一个带边框的容器；绝不在卡片里再套卡片。

- **Card** —— 主力表面组件。`soft`（深度来自中性色阶，扁平无投影）或 `outline`（纸面 + 用于强调的墨线描边）。
- **Callout** —— 用于状态或指引的内联提示，按内容颜色加以区分。
- **Flyout** —— 锚定在触发元素上的弹出层 / 菜单；系统中唯一的阴影就是它的光晕（halo）。
- **Tooltip** —— 悬停或聚焦时显示的简短标签。

### Data 数据 —— [`components/data/`](../../components/data/)

结构化展示。

- **Table** —— 带分隔线的表格，可选行选择。
- **Tabs** —— 编辑器风格的标签页，用于在视图之间切换。

## 从 `window.JojoDesignSystem` 取用

这些基础组件全部挂在同一个全局对象 `window.JojoDesignSystem` 上。引入这一个样式表 —— [`styles.css`](../../styles.css) —— 即可获得设计令牌与组件 CSS，然后按需解构出你要用的基础组件：

```jsx
const { Button, Card, Input, Table } = window.JojoDesignSystem;
```

一段小小的组合读起来很自然 —— 用 outline 表达强调，用墨色承载操作：

```jsx
function StartPanel() {
  return (
    <Card variant="outline" padding="lg">
      <p>Depth comes from the ladder, not shadow.</p>
      <Button variant="primary">Get started</Button>
    </Card>
  );
}
```

不要在这些组合里硬编码颜色、阴影或圆角 —— 而应引用解析后的令牌别名（`var(--bg-card)`、`var(--fg-1)`、`var(--accent-orange)`）。强调色只用于表达状态；操作本身始终保持墨色。

## 类型与用法说明

每个基础组件都在其 `.jsx` 旁边附带两个配套文件：

- 一个带完整 prop 类型的 **`.d.ts`** —— 例如 [`Button.d.ts`](../../components/core/Button.d.ts) 声明了 `variant`、`size`、`as`、`href` 以及图标相关的 props。你的编辑器会读取它们来做自动补全和类型检查。
- 一个带简短、贴合语气的用法说明和可复制粘贴片段的 **`.prompt.md`** —— 例如 [`Button.prompt.md`](../../components/core/Button.prompt.md) 和 [`Card.prompt.md`](../../components/surfaces/Card.prompt.md)。它们同时写给人和 agent 阅读；在动手用某个基础组件之前，先读一读它旁边的这份文件。

## 样例卡片

每个分组都有一张可打开的实时样例卡片，让你看到这些基础组件在浅色和深色主题下的渲染效果。组件卡片就放在各自的源码旁边：

- [`components/core/core.card.html`](../../components/core/core.card.html)
- [`components/forms/forms.card.html`](../../components/forms/forms.card.html)
- [`components/surfaces/surfaces.card.html`](../../components/surfaces/surfaces.card.html)
- [`components/data/data.card.html`](../../components/data/data.card.html)

基础规范卡片 —— 颜色、字体、间距、几何与品牌 —— 位于 [`guidelines/`](../../guidelines/) 下。这两组卡片共同填充了总览 SPA（[`index.html`](../../index.html)）中的 Design System 标签页。

## 另请参阅

- [设计语言](./design-language.md) —— 五个标志性特征，以及把这些基础组件维系在一起的规则。
- [快速开始](./getting-started.md) —— 引入样式表，渲染你的第一个界面。
