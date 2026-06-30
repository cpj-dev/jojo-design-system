/* @ds-bundle: {"format":3,"namespace":"JojoDesignSystem","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Tabs","sourcePath":"components/data/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Callout","sourcePath":"components/surfaces/Callout.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Flyout","sourcePath":"components/surfaces/Flyout.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"6834dd2db24e","components/core/Badge.jsx":"91c6f7d037ef","components/core/Button.jsx":"818d136868e1","components/core/IconButton.jsx":"dcbd507cba29","components/core/Kbd.jsx":"c6b50797c374","components/core/Separator.jsx":"0375ee87ee20","components/core/StatusDot.jsx":"82004266f0c0","components/core/Tag.jsx":"a42747f8e805","components/data/Table.jsx":"8988e8802248","components/data/Tabs.jsx":"18eb85fcb3b6","components/forms/Checkbox.jsx":"000e4cc5c96a","components/forms/Input.jsx":"0f03a3dfaf83","components/forms/SegmentedControl.jsx":"4e28c6a30831","components/forms/Select.jsx":"9977f320c33f","components/forms/Switch.jsx":"f2d6ec2879d3","components/forms/Textarea.jsx":"4bec6b97f159","components/surfaces/Callout.jsx":"fd895efd11c8","components/surfaces/Card.jsx":"d00badaac273","components/surfaces/Flyout.jsx":"bb0c2dbb1810","components/surfaces/Tooltip.jsx":"e7758dc5b86f","ui_kits/console/DeploymentsView.jsx":"f9a1792406b4","ui_kits/console/OverviewView.jsx":"8b369a823d8c","ui_kits/console/SettingsView.jsx":"0edcbfbee4dc","ui_kits/console/Sidebar.jsx":"bf2f9cd27381","ui_kits/console/Topbar.jsx":"3c572c11c0e8","ui_kits/marketing/Features.jsx":"90fe8cc66747","ui_kits/marketing/Footer.jsx":"c65d043214d0","ui_kits/marketing/Hero.jsx":"7d0a707899ca","ui_kits/marketing/Nav.jsx":"b6f0167c73d1","ui_kits/marketing/Pricing.jsx":"bd16c36bcbd2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JojoDesignSystem = window.JojoDesignSystem || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — full-pill (circular) user mark. Renders an image when `src` is set,
 * otherwise `initials` on the ladder fill. Sizes: sm 24 / md 32 / lg 44.
 */
function Avatar({
  src,
  alt = '',
  initials = '',
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['jojo-avatar', size === 'sm' ? 'jojo-avatar--sm' : size === 'lg' ? 'jojo-avatar--lg' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small full-pill status/label chip. Neutral by default (ink on the
 * ladder). Status tones use the quarantined token-tint pattern (12% fill / solid
 * fg / 45% edge) and belong in CONTENT, never as chrome. Never wraps.
 */
function Badge({
  tone = 'neutral',
  mono = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['jojo-badge', tone !== 'neutral' ? `jojo-badge--${tone}` : '', mono ? 'jojo-badge--mono' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — the primary action primitive. All variants are full-pill and animate
 * NOTHING (instant chrome state). The orange is never a fill: it appears only as
 * the tertiary (accent) CTA's text. Action is ink-black.
 */
function Button({
  variant = 'primary',
  size = 'md',
  as,
  href,
  type = 'button',
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['jojo-btn', `jojo-btn--${variant}`, size === 'sm' ? 'jojo-btn--sm' : size === 'lg' ? 'jojo-btn--lg' : '', className].filter(Boolean).join(' ');
  const showArrow = variant === 'tertiary' && !trailingIcon;
  const Tag = as || (href ? 'a' : 'button');
  const props = {
    className: cls,
    ...rest
  };
  if (Tag === 'a') {
    props.href = disabled ? undefined : href;
    if (disabled) props['aria-disabled'] = 'true';
  } else {
    props.type = type;
    props.disabled = disabled;
  }
  return /*#__PURE__*/React.createElement(Tag, props, leadingIcon, children != null && /*#__PURE__*/React.createElement("span", null, children), trailingIcon, showArrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square, icon-only button. Pill by default; shape="trigger" gives
 * the 8px-radius toolbar-trigger look with a hairline edge. Always pass `label`
 * (sets aria-label + title) — icon-only controls must be keyboard + SR reachable.
 */
function IconButton({
  icon,
  label,
  size = 'md',
  shape = 'pill',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['jojo-iconbtn', size === 'sm' ? 'jojo-iconbtn--sm' : '', shape === 'trigger' ? 'jojo-iconbtn--trigger' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kbd — a monospace key cap for keyboard shortcuts (e.g. ⌘K, Tab). Micro 2px radius,
 * faint hairline, mono type. Compose several for a chord: <Kbd>⌘</Kbd><Kbd>K</Kbd>.
 */
function Kbd({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("kbd", _extends({
    className: ['jojo-kbd', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Separator — a 1px hairline divider. Horizontal by default; orientation="vertical"
 * stretches to its flex parent's height. This is rung 3 of the grouping ladder.
 */
function Separator({
  orientation = 'horizontal',
  className = '',
  ...rest
}) {
  const cls = ['jojo-sep', orientation === 'vertical' ? 'jojo-sep--v' : 'jojo-sep--h', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusDot — a small filled circle in a status token. The brand's preferred way to
 * show state (instead of an icon or emoji). Pass `label` for an accessible name.
 */
function StatusDot({
  tone = 'neutral',
  label,
  className = '',
  ...rest
}) {
  const cls = ['jojo-dot', tone !== 'neutral' ? `jojo-dot--${tone}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    role: label ? 'img' : undefined,
    "aria-label": label
  }, rest));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a full-pill chip for filters / tokens / removable selections. Quieter than
 * Badge (transparent fill, hairline edge). Pass onRemove to show the × affordance.
 */
function Tag({
  onRemove,
  leadingIcon = null,
  className = '',
  children,
  ...rest
}) {
  const cls = ['jojo-tag', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), leadingIcon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "jojo-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Table — a divided card grid: divide-y hairline rows, no zebra, no outer border,
 * no radius. Numeric columns are right-aligned tabular mono. A selected row gets a
 * `--bg-2` tint + inset accent ring (NEVER a per-row border). Scrolls inside its
 * wrapper on narrow viewports — it never pushes the page width.
 *
 * columns: [{ key, label, numeric?, width?, render?(value,row) }]
 */
function Table({
  columns,
  data,
  rowKey = 'id',
  selectedId,
  onRowClick,
  className = '',
  ...rest
}) {
  const clickable = !!onRowClick;
  return /*#__PURE__*/React.createElement("div", {
    className: "jojo-table-wrap"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: ['jojo-table', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.numeric ? 'jojo-num' : '',
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, data.map(row => {
    const id = row[rowKey];
    const selected = selectedId != null && id === selectedId;
    const trCls = [clickable ? 'jojo-row--clickable' : '', selected ? 'jojo-row--selected' : ''].filter(Boolean).join(' ');
    const handlers = clickable ? {
      onClick: () => onRowClick(row),
      tabIndex: 0,
      'aria-selected': selected || undefined,
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onRowClick(row);
        }
      }
    } : {};
    return /*#__PURE__*/React.createElement("tr", _extends({
      key: id,
      className: trCls
    }, handlers), columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      className: c.numeric ? 'jojo-num' : ''
    }, c.render ? c.render(row[c.key], row) : row[c.key])));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/data/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — editor-style tabs: bg matches the page, a bottom hairline, 0 radius, and
 * the active tab carries an accent bottom-border (orange = active state). Controlled
 * via `value` + `onChange(id)`. Use this for primary navigation, not a pill segment.
 *
 * tabs: [{ id, label, icon? }]
 */
function Tabs({
  tabs,
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['jojo-tabs', className].filter(Boolean).join(' ')
  }, rest), tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    type: "button",
    role: "tab",
    "aria-selected": value === t.id,
    className: "jojo-tab",
    onClick: () => onChange && onChange(t.id)
  }, t.icon, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3.5 8.5l3 3 6-6.5",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Checkbox — 4px box, hairline; checked = ink fill + cream check. Controlled via
 * `checked` + `onChange`. The whole label is the click target.
 */
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const cbId = id || `jojo-cb-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    className: ['jojo-check', disabled ? 'jojo-check--disabled' : '', className].filter(Boolean).join(' '),
    htmlFor: cbId
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "jojo-check__box"
  }, /*#__PURE__*/React.createElement(Check, null)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a real text input on the card surface (4px, hairline, focus darkens the
 * border + adds the accent ring). Pass `label`/`hint` to wrap it in a field; pass
 * `leadingIcon` to render the 36px search-trigger variant. `mono` for command input.
 */
function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  mono = false,
  leadingIcon = null,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `jojo-in-${Math.random().toString(36).slice(2, 8)}` : undefined);
  const invalid = !!error;
  const inputCls = ['jojo-input', size === 'sm' ? 'jojo-input--sm' : '', mono ? 'jojo-input--mono' : '', leadingIcon ? '' : className].filter(Boolean).join(' ');
  const control = leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: ['jojo-search', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "jojo-search__icon"
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: inputCls,
    "aria-invalid": invalid || undefined
  }, rest))) : /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: inputCls,
    "aria-invalid": invalid || undefined
  }, rest));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("span", {
    className: "jojo-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "jojo-field__label",
    htmlFor: inputId
  }, label), control, (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: `jojo-field__hint${error ? ' jojo-field__hint--error' : ''}`
  }, typeof error === 'string' ? error : hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SegmentedControl — a pill track of 2–3 short options; the active item gets a
 * subtle lighter pill + solid ink text (selection by color, not a heavy fill).
 * Controlled via `value` + `onChange(value)`. For primary navigation use Tabs.
 */
function SegmentedControl({
  options,
  value,
  onChange,
  className = '',
  ...rest
}) {
  const opts = (options || []).map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['jojo-seg', className].filter(Boolean).join(' ')
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "tab",
    "aria-selected": value === o.value,
    className: "jojo-seg__item",
    onClick: () => onChange && onChange(o.value)
  }, o.icon, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 6l4 4 4-4",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/**
 * Select — a native <select> styled to match Input, with a hairline chevron. Pass
 * `options` ([{value,label}] or string[]) or <option> children. Native = free
 * keyboard + mobile behavior.
 */
function Select({
  label,
  hint,
  error,
  id,
  options,
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const selId = id || (label ? `jojo-sel-${Math.random().toString(36).slice(2, 8)}` : undefined);
  const opts = (options || []).map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const control = /*#__PURE__*/React.createElement("span", {
    className: "jojo-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: ['jojo-select', size === 'sm' ? 'jojo-input--sm' : '', className].filter(Boolean).join(' '),
    "aria-invalid": !!error || undefined
  }, rest), children, opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "jojo-select-wrap__chev"
  }, /*#__PURE__*/React.createElement(Chevron, null)));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("span", {
    className: "jojo-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "jojo-field__label",
    htmlFor: selId
  }, label), control, (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: `jojo-field__hint${error ? ' jojo-field__hint--error' : ''}`
  }, typeof error === 'string' ? error : hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — a pill toggle. Off = ladder track; on = ink track + cream knob. The knob
 * SNAPS (no animated slide — geometry stays still); only color changes. Controlled.
 */
function Switch({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  const swId = id || `jojo-sw-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    className: ['jojo-switch', disabled ? 'jojo-switch--disabled' : '', className].filter(Boolean).join(' '),
    htmlFor: swId
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "jojo-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jojo-switch__knob"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multiline input, same surface + focus treatment as Input. */
function Textarea({
  label,
  hint,
  error,
  id,
  className = '',
  ...rest
}) {
  const taId = id || (label ? `jojo-ta-${Math.random().toString(36).slice(2, 8)}` : undefined);
  const invalid = !!error;
  const control = /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    className: ['jojo-textarea', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement("span", {
    className: "jojo-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "jojo-field__label",
    htmlFor: taId
  }, label), control, (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: `jojo-field__hint${error ? ' jojo-field__hint--error' : ''}`
  }, typeof error === 'string' ? error : hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Callout — a quiet framed note on the well surface (10px radius, hairline). No
 * colored left-rail, no icon banner. Optional `tone` shows a leading status dot.
 */
function Callout({
  title,
  tone,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['jojo-callout', className].filter(Boolean).join(' ')
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    className: "jojo-callout__title"
  }, tone && /*#__PURE__*/React.createElement("span", {
    className: `jojo-dot jojo-dot--${tone}`
  }), title), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Callout.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
/**
 * Card — the workhorse surface. `soft` (default, on the card ladder, flat) or
 * `outline` (paper + the hard ink stroke, for emphasis/framed/selected). Set
 * `interactive` (or pass href/onClick) to make it a real keyboard-reachable
 * button/link with a color-only hover. NEVER nest a Card in a Card (anti-box).
 */
function Card({
  variant = 'soft',
  hairline = false,
  well = false,
  padding = 'md',
  interactive = false,
  as,
  href,
  className = '',
  children,
  ...rest
}) {
  const clickable = interactive || !!href || !!rest.onClick;
  const cls = ['jojo-card', variant === 'outline' ? 'jojo-card--outline' : '', well ? 'jojo-card--well' : '', hairline && variant !== 'outline' && !well ? 'jojo-card--hairline' : '', padding === 'lg' ? 'jojo-card--pad-lg' : padding === 'md' ? 'jojo-card--pad' : '', clickable ? 'jojo-card--interactive' : '', className].filter(Boolean).join(' ');
  const Tag = as || (href ? 'a' : clickable ? 'button' : 'div');
  const props = {
    className: cls,
    ...rest
  };
  if (Tag === 'a') props.href = href;
  if (Tag === 'button') props.type = props.type || 'button';
  return /*#__PURE__*/React.createElement(Tag, props, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Flyout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Flyout — the warm popover surface (select / dropdown / menu / context menu). Cream
 * `--bg-popover`, 4px, the flat halo shadow, 1px border — never white glass, never
 * backdrop-blur, never shadow-md/lg. Data-driven via `items`, or pass children.
 *
 * items: [{ label, icon?, trailing?, danger?, onClick?, separator? }]
 * Positioning is up to the caller (wrap in a relatively-positioned anchor).
 */
function Flyout({
  items,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "menu",
    className: ['jojo-flyout', className].filter(Boolean).join(' ')
  }, rest), children, (items || []).map((it, i) => it.separator ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "jojo-flyout__sep",
    role: "separator"
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    role: "menuitem",
    className: ['jojo-flyout__item', it.danger ? 'jojo-flyout__item--danger' : ''].filter(Boolean).join(' '),
    onClick: it.onClick
  }, it.icon, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.trailing)));
}
Object.assign(__ds_scope, { Flyout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Flyout.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tooltip — a tiny ink-fill label shown on hover AND keyboard focus. Wrap a
 * focusable trigger (e.g. an IconButton). Appears above the trigger by default.
 */
function Tooltip({
  content,
  className = '',
  children,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "jojo-tooltip-wrap",
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    className: "jojo-tooltip-pop",
    role: "tooltip"
  }, /*#__PURE__*/React.createElement("span", {
    className: ['jojo-tooltip', className].filter(Boolean).join(' ')
  }, content)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/DeploymentsView.jsx
try { (() => {
/* Console — Deployments. Editor-style Tabs filter by env; a 3-zone filter toolbar
   (one control height); the DS Table with row selection; a per-row overflow Flyout.
   Status lives in content (dots/badges); chrome stays monochrome. */
const {
  Tabs: DvTabs,
  Table: DvTable,
  Input: DvInput,
  Select: DvSelect,
  Button: DvButton,
  IconButton: DvIconButton,
  Flyout: DvFlyout,
  Badge: DvBadge,
  Avatar: DvAvatar
} = window.DS;
const {
  useState: dvUseState,
  useEffect: dvUseEffect
} = React;
const DEPLOYS = [{
  id: 'd1',
  name: 'web',
  branch: 'main',
  env: 'Production',
  status: 'ok',
  author: 'AL',
  commit: 'a1f9c2e',
  duration: '38s'
}, {
  id: 'd2',
  name: 'web',
  branch: 'feat/predict-cache',
  env: 'Preview',
  status: 'info',
  author: 'JS',
  commit: '7b30d11',
  duration: '41s'
}, {
  id: 'd3',
  name: 'docs',
  branch: 'main',
  env: 'Production',
  status: 'warning',
  author: 'CW',
  commit: 'c0e4a88',
  duration: '1m 12s'
}, {
  id: 'd4',
  name: 'api',
  branch: 'hotfix/timeout',
  env: 'Staging',
  status: 'danger',
  author: 'AL',
  commit: '5d2bb90',
  duration: '—'
}, {
  id: 'd5',
  name: 'web',
  branch: 'feat/agent-tools',
  env: 'Preview',
  status: 'ok',
  author: 'MR',
  commit: '9ee1f04',
  duration: '44s'
}, {
  id: 'd6',
  name: 'marketing',
  branch: 'main',
  env: 'Production',
  status: 'ok',
  author: 'JS',
  commit: '2c77a31',
  duration: '29s'
}, {
  id: 'd7',
  name: 'api',
  branch: 'main',
  env: 'Production',
  status: 'ok',
  author: 'CW',
  commit: 'b41d9a7',
  duration: '52s'
}];
const STATUS_LABEL = {
  ok: 'Ready',
  info: 'Building',
  warning: 'Queued',
  danger: 'Failed'
};
function RowMenu({
  open,
  onToggle,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-actions",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(DvIconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "ellipsis"
    }),
    label: "Actions",
    size: "sm",
    onClick: onToggle
  }), open && /*#__PURE__*/React.createElement("div", {
    className: "cs-actions__menu"
  }, /*#__PURE__*/React.createElement(DvFlyout, {
    style: {
      width: 180
    },
    items: [{
      label: 'Redeploy',
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "refresh-cw"
      }),
      onClick: () => onPick()
    }, {
      label: 'View logs',
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "scroll-text"
      }),
      onClick: () => onPick()
    }, {
      label: 'Rename',
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "pencil"
      }),
      onClick: () => onPick()
    }, {
      separator: true
    }, {
      label: 'Delete',
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "trash-2"
      }),
      danger: true,
      onClick: () => onPick()
    }]
  })));
}
function DeploymentsView() {
  const [env, setEnv] = dvUseState('all');
  const [q, setQ] = dvUseState('');
  const [status, setStatus] = dvUseState('all');
  const [selected, setSelected] = dvUseState('d1');
  const [menuId, setMenuId] = dvUseState(null);
  dvUseEffect(() => {
    if (!menuId) return;
    const close = () => setMenuId(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuId]);
  const rows = DEPLOYS.filter(d => {
    if (env !== 'all' && d.env.toLowerCase() !== env) return false;
    if (status !== 'all' && d.status !== status) return false;
    if (q && !`${d.name} ${d.branch}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  const columns = [{
    key: 'name',
    label: 'Deployment',
    render: (_, r) => /*#__PURE__*/React.createElement("span", {
      className: "cs-deploy"
    }, r.name, " ", /*#__PURE__*/React.createElement("span", {
      className: "cs-deploy__branch"
    }, r.branch))
  }, {
    key: 'env',
    label: 'Environment'
  }, {
    key: 'status',
    label: 'Status',
    render: v => /*#__PURE__*/React.createElement("span", {
      className: "cs-cell-status"
    }, /*#__PURE__*/React.createElement("span", {
      className: 'jojo-dot jojo-dot--' + v
    }), STATUS_LABEL[v])
  }, {
    key: 'author',
    label: 'Author',
    render: v => /*#__PURE__*/React.createElement("span", {
      className: "cs-cell-author"
    }, /*#__PURE__*/React.createElement(DvAvatar, {
      initials: v,
      size: "sm"
    }))
  }, {
    key: 'commit',
    label: 'Commit',
    render: v => /*#__PURE__*/React.createElement(DvBadge, {
      mono: true
    }, v)
  }, {
    key: 'duration',
    label: 'Duration',
    numeric: true
  }, {
    key: '_actions',
    label: '',
    render: (_, r) => /*#__PURE__*/React.createElement(RowMenu, {
      open: menuId === r.id,
      onToggle: () => setMenuId(menuId === r.id ? null : r.id),
      onPick: () => setMenuId(null)
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "cs-h1"
  }, "Deployments"), /*#__PURE__*/React.createElement("p", {
    className: "cs-sub"
  }, rows.length, " of ", DEPLOYS.length, " shown \xB7 last synced 2m ago")), /*#__PURE__*/React.createElement(DvButton, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus"
    })
  }, "New deployment")), /*#__PURE__*/React.createElement(DvTabs, {
    value: env,
    onChange: setEnv,
    tabs: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'production',
      label: 'Production'
    }, {
      id: 'preview',
      label: 'Preview'
    }, {
      id: 'staging',
      label: 'Staging'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-toolbar__lead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-toolbar__search"
  }, /*#__PURE__*/React.createElement(DvInput, {
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search"
    }),
    placeholder: "Filter by name or branch\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    "aria-label": "Quick find"
  })), /*#__PURE__*/React.createElement(DvSelect, {
    size: "sm",
    value: status,
    onChange: e => setStatus(e.target.value),
    "aria-label": "Status",
    options: [{
      value: 'all',
      label: 'Any status'
    }, {
      value: 'ok',
      label: 'Ready'
    }, {
      value: 'info',
      label: 'Building'
    }, {
      value: 'warning',
      label: 'Queued'
    }, {
      value: 'danger',
      label: 'Failed'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-toolbar__trail"
  }, /*#__PURE__*/React.createElement(DvButton, {
    variant: "ghost",
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "download"
    })
  }, "Export"), /*#__PURE__*/React.createElement(DvIconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "sliders-horizontal"
    }),
    label: "More filters",
    shape: "trigger",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-table-card"
  }, rows.length > 0 ? /*#__PURE__*/React.createElement(DvTable, {
    columns: columns,
    data: rows,
    rowKey: "id",
    selectedId: selected,
    onRowClick: r => setSelected(r.id)
  }) : /*#__PURE__*/React.createElement("div", {
    className: "cs-empty"
  }, "No deployments match these filters.")));
}
window.DeploymentsView = DeploymentsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/DeploymentsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/OverviewView.jsx
try { (() => {
/* Console — Overview. Metric tiles grouped by GRID GAP (tint fill, no per-tile
   border — anti-box), then a recent-activity list as divide-y rows (no row boxes). */
const {
  Badge: OvBadge,
  Button: OvButton
} = window.DS;
const METRICS = [{
  label: 'Deployments today',
  value: '24',
  delta: '+12%',
  dir: 'up'
}, {
  label: 'Avg build time',
  value: '41s',
  delta: '-8%',
  dir: 'up'
}, {
  label: 'Success rate',
  value: '98.2%',
  delta: '+0.4%',
  dir: 'up'
}, {
  label: 'Fast requests',
  value: '812',
  delta: '81% of plan',
  dir: 'flat'
}];
const ACTIVITY = [{
  name: 'web — main',
  branch: 'main',
  tone: 'ok',
  label: 'Ready',
  when: '2m ago'
}, {
  name: 'web — feat/predict-cache',
  branch: 'feat/predict-cache',
  tone: 'info',
  label: 'Building',
  when: '6m ago'
}, {
  name: 'docs — main',
  branch: 'main',
  tone: 'warning',
  label: 'Queued',
  when: '18m ago'
}, {
  name: 'api — hotfix/timeout',
  branch: 'hotfix/timeout',
  tone: 'danger',
  label: 'Failed',
  when: '41m ago'
}, {
  name: 'web — main',
  branch: 'main',
  tone: 'ok',
  label: 'Ready',
  when: '1h ago'
}];
function OverviewView() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "cs-h1"
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    className: "cs-sub"
  }, "Everything happening across acme-inc this week.")), /*#__PURE__*/React.createElement(OvButton, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus"
    })
  }, "New deployment")), /*#__PURE__*/React.createElement("div", {
    className: "cs-metrics"
  }, METRICS.map(m => /*#__PURE__*/React.createElement("div", {
    className: "cs-metric",
    key: m.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-metric__label"
  }, m.label), /*#__PURE__*/React.createElement("div", {
    className: "cs-metric__value"
  }, m.value), /*#__PURE__*/React.createElement("div", {
    className: "cs-metric__delta"
  }, m.delta)))), /*#__PURE__*/React.createElement("div", {
    className: "cs-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-section__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2"
  }, "Recent deployments"), /*#__PURE__*/React.createElement(OvButton, {
    variant: "tertiary"
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    className: "cs-list"
  }, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: "cs-list__row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-list__name"
  }, a.name), /*#__PURE__*/React.createElement("span", {
    className: "cs-list__status"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'jojo-dot jojo-dot--' + a.tone
  }), a.label), /*#__PURE__*/React.createElement("span", {
    className: "cs-list__when"
  }, a.when))))));
}
window.OverviewView = OverviewView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/OverviewView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/SettingsView.jsx
try { (() => {
/* Console — Settings. Sections are a heading + divide-y rows (no card-in-card).
   The Appearance control is wired to the real app theme. One primary action. */
const {
  Input: StInput,
  Select: StSelect,
  Switch: StSwitch,
  Checkbox: StCheckbox,
  SegmentedControl: StSegmented,
  Button: StButton
} = window.DS;
const {
  useState: stUseState
} = React;
function SetRow({
  label,
  hint,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-set-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-set-row__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-set-row__label"
  }, label), hint && /*#__PURE__*/React.createElement("div", {
    className: "cs-set-row__hint"
  }, hint)), /*#__PURE__*/React.createElement("div", {
    className: "cs-set-row__control"
  }, children));
}
function SetSection({
  title,
  desc,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "cs-set-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-set-section__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2"
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    className: "cs-sub"
  }, desc)), /*#__PURE__*/React.createElement("div", {
    className: "cs-set-rows"
  }, children));
}
function SettingsView({
  theme,
  onThemeChange
}) {
  const [tabAutocomplete, setTabAutocomplete] = stUseState(true);
  const [privacy, setPrivacy] = stUseState(false);
  const [weekly, setWeekly] = stUseState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-view cs-view--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "cs-h1"
  }, "Settings"), /*#__PURE__*/React.createElement("p", {
    className: "cs-sub"
  }, "Manage your workspace, AI features, and appearance."))), /*#__PURE__*/React.createElement(SetSection, {
    title: "General",
    desc: "Basic information about this workspace."
  }, /*#__PURE__*/React.createElement(SetRow, {
    label: "Workspace name",
    hint: "Shown across the dashboard and in invites."
  }, /*#__PURE__*/React.createElement(StInput, {
    defaultValue: "acme-inc",
    "aria-label": "Workspace name"
  })), /*#__PURE__*/React.createElement(SetRow, {
    label: "Default environment",
    hint: "Where new deployments land by default."
  }, /*#__PURE__*/React.createElement(StSelect, {
    defaultValue: "Production",
    options: ['Production', 'Staging', 'Preview'],
    "aria-label": "Default environment"
  }))), /*#__PURE__*/React.createElement(SetSection, {
    title: "AI features",
    desc: "Control how the workspace assistant indexes and suggests across your project."
  }, /*#__PURE__*/React.createElement(SetRow, {
    label: "Tab autocomplete",
    hint: "Multi-line predictions from your recent edits."
  }, /*#__PURE__*/React.createElement(StSwitch, {
    checked: tabAutocomplete,
    onChange: e => setTabAutocomplete(e.target.checked)
  })), /*#__PURE__*/React.createElement(SetRow, {
    label: "Privacy mode",
    hint: "Code is never stored remotely. SOC 2 certified."
  }, /*#__PURE__*/React.createElement(StSwitch, {
    checked: privacy,
    onChange: e => setPrivacy(e.target.checked)
  })), /*#__PURE__*/React.createElement(SetRow, {
    label: "Default model",
    hint: "Used for agent and \u2318K edits."
  }, /*#__PURE__*/React.createElement(StSelect, {
    defaultValue: "claude-sonnet",
    "aria-label": "Default model",
    options: [{
      value: 'claude-sonnet',
      label: 'Claude Sonnet'
    }, {
      value: 'gpt',
      label: 'GPT'
    }, {
      value: 'jojo-small',
      label: 'jojo-small'
    }]
  }))), /*#__PURE__*/React.createElement(SetSection, {
    title: "Appearance",
    desc: "Choose how the dashboard looks on this device."
  }, /*#__PURE__*/React.createElement(SetRow, {
    label: "Theme",
    hint: "Both themes are first-class and warm."
  }, /*#__PURE__*/React.createElement(StSegmented, {
    value: theme,
    onChange: onThemeChange,
    options: [{
      value: 'light',
      label: 'Light'
    }, {
      value: 'dark',
      label: 'Dark'
    }]
  })), /*#__PURE__*/React.createElement(SetRow, {
    label: "Weekly summary email",
    hint: "A Monday digest of deploys and usage."
  }, /*#__PURE__*/React.createElement(StCheckbox, {
    label: "Enabled",
    checked: weekly,
    onChange: e => setWeekly(e.target.checked)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-set-actions"
  }, /*#__PURE__*/React.createElement(StButton, {
    variant: "ghost"
  }, "Cancel"), /*#__PURE__*/React.createElement(StButton, {
    variant: "primary"
  }, "Save changes")));
}
window.SettingsView = SettingsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/SettingsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Console — left sidebar. bg-1 well, right hairline, 0 radius. Items: full-width,
   16px/400, 4px radius, hover one ladder step; active = orange text + a thin accent
   underline stroke (never a fill/pill, never a side-stripe). */
const {
  Avatar: SbAvatar
} = window.DS;
function NavItem({
  icon,
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'cs-navitem' + (active ? ' is-active' : ''),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "cs-navitem__label"
  }, label));
}
function Sidebar({
  active,
  onNavigate
}) {
  const main = [{
    id: 'overview',
    icon: 'layout-dashboard',
    label: 'Overview'
  }, {
    id: 'deployments',
    icon: 'rocket',
    label: 'Deployments'
  }, {
    id: 'analytics',
    icon: 'bar-chart-3',
    label: 'Analytics'
  }, {
    id: 'logs',
    icon: 'scroll-text',
    label: 'Logs'
  }];
  const workspace = [{
    id: 'members',
    icon: 'users',
    label: 'Members'
  }, {
    id: 'usage',
    icon: 'gauge',
    label: 'Usage'
  }, {
    id: 'settings',
    icon: 'settings',
    label: 'Settings'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "cs-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-side-top"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cs-logo",
    href: "#",
    "aria-label": "jojo"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "27",
    height: "27",
    rx: "5",
    stroke: "currentColor",
    strokeOpacity: "0.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.6",
    cy: "8",
    r: "2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 12 V17.4 C15.6 20.3 13.4 21.7 10.8 21",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, "jojo"), /*#__PURE__*/React.createElement("span", {
    className: "cs-logo__chev"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevrons-up-down"
  })))), /*#__PURE__*/React.createElement("nav", {
    className: "cs-nav",
    "aria-label": "Primary"
  }, main.map(it => /*#__PURE__*/React.createElement(NavItem, _extends({
    key: it.id
  }, it, {
    active: active === it.id,
    onClick: () => onNavigate(it.id)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-nav__section"
  }, "Workspace"), workspace.map(it => /*#__PURE__*/React.createElement(NavItem, _extends({
    key: it.id
  }, it, {
    active: active === it.id,
    onClick: () => onNavigate(it.id)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "cs-side-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-usage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-usage__row"
  }, /*#__PURE__*/React.createElement("span", null, "Fast requests"), /*#__PURE__*/React.createElement("span", {
    className: "cs-usage__num"
  }, "812 / 1000")), /*#__PURE__*/React.createElement("div", {
    className: "cs-usage__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-usage__fill",
    style: {
      width: '81%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-user"
  }, /*#__PURE__*/React.createElement(SbAvatar, {
    initials: "AL",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-user__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-user__name"
  }, "Ada Lovelace"), /*#__PURE__*/React.createElement("div", {
    className: "cs-user__plan"
  }, "Pro \xB7 acme-inc")), /*#__PURE__*/React.createElement("span", {
    className: "cs-user__more"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "ellipsis"
  })))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Topbar.jsx
try { (() => {
/* Console — top bar. Three-zone grid [title | search | actions]; one control height.
   Sits on the page paper with a bottom hairline. Theme toggle is inline SVG. */
const {
  Input: TbInput,
  IconButton: TbIconButton,
  Avatar: TbAvatar
} = window.DS;
const TbSun = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
}));
const TbMoon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
}));
function Topbar({
  title,
  theme,
  onToggleTheme
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "cs-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-topbar__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "cs-topbar__search"
  }, /*#__PURE__*/React.createElement(TbInput, {
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search"
    }),
    placeholder: "Search deployments, files, members\u2026",
    "aria-label": "Search"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-topbar__actions"
  }, /*#__PURE__*/React.createElement(TbIconButton, {
    icon: theme === 'dark' ? /*#__PURE__*/React.createElement(TbSun, null) : /*#__PURE__*/React.createElement(TbMoon, null),
    label: "Toggle theme",
    onClick: onToggleTheme
  }), /*#__PURE__*/React.createElement(TbIconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "bell"
    }),
    label: "Notifications"
  }), /*#__PURE__*/React.createElement(TbIconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "circle-help"
    }),
    label: "Help"
  }), /*#__PURE__*/React.createElement("span", {
    className: "cs-topbar__avatar"
  }, /*#__PURE__*/React.createElement(TbAvatar, {
    initials: "AL",
    size: "sm"
  }))));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Features.jsx
try { (() => {
/* Marketing — features. A grid grouped by gap (NO per-card borders — anti-box).
   Static lucide icons. Hierarchy by size + the mono eyebrow, not boxes. */

function Feature({
  icon,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mk-feat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-feat__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  })), /*#__PURE__*/React.createElement("h3", {
    className: "mk-feat__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "mk-feat__body"
  }, body));
}
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-section",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-eyebrow"
  }, "why jojo"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, "Familiar, but disciplined"), /*#__PURE__*/React.createElement("p", {
    className: "mk-section__lede"
  }, "jojo gives you the smallest set of decisions that still feels complete \u2014 tokens, primitives, and rules that keep every screen consistent.")), /*#__PURE__*/React.createElement("div", {
    className: "mk-feat-grid"
  }, /*#__PURE__*/React.createElement(Feature, {
    icon: "palette",
    title: "Design tokens",
    body: "One warm ink stepped into one warm paper. Reference resolved CSS variables \u2014 never hardcode a color, shadow, or radius."
  }), /*#__PURE__*/React.createElement(Feature, {
    icon: "blocks",
    title: "Component primitives",
    body: "Accessible React primitives \u2014 buttons, inputs, cards, tables, tabs \u2014 that already speak the system, in light and dark."
  }), /*#__PURE__*/React.createElement(Feature, {
    icon: "square",
    title: "Dual-border system",
    body: "A barely-there hairline for chrome, a hard ink outline for emphasis. The two-border contrast is the refined tell."
  }), /*#__PURE__*/React.createElement(Feature, {
    icon: "layout-dashboard",
    title: "Anti-box layout",
    body: "Group with whitespace, headers, and hairlines. At most one bordered container per region; never a card in a card."
  }), /*#__PURE__*/React.createElement(Feature, {
    icon: "zap",
    title: "Color-only motion",
    body: "State is color, never geometry \u2014 no lift, bounce, or spin. prefers-reduced-motion is honored by default."
  }), /*#__PURE__*/React.createElement(Feature, {
    icon: "sun-moon",
    title: "Light & dark",
    body: "The same one-hue mechanism on warm paper or warm near-black. WCAG-AA verified in both themes."
  }))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
/* Marketing — closing CTA band + footer. Footer sits on the page paper, separated
   by a single top hairline (not a different fill). Links are ink, hover → muted. */
const {
  Button: FtButton
} = window.DS;
const FOOTER_COLS = [{
  h: 'System',
  links: ['Tokens', 'Components', 'Themes', 'UI kits', 'Changelog']
}, {
  h: 'Docs',
  links: ['Getting started', 'Design language', 'English', '简体中文', 'GitHub']
}, {
  h: 'Project',
  links: ['About', 'Contributing', 'License', 'Code of conduct', 'Credits']
}];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "mk-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-cta"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "mk-cta__title"
  }, "Build calm, legible interfaces."), /*#__PURE__*/React.createElement("div", {
    className: "mk-cta__actions"
  }, /*#__PURE__*/React.createElement(FtButton, {
    variant: "primary",
    size: "lg"
  }, "Get started"), /*#__PURE__*/React.createElement(FtButton, {
    variant: "tertiary"
  }, "Read the docs"))), /*#__PURE__*/React.createElement("div", {
    className: "mk-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-footer__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-logo",
    href: "#top",
    "aria-label": "jojo home"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "27",
    height: "27",
    rx: "5",
    stroke: "currentColor",
    strokeOpacity: "0.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.6",
    cy: "8",
    r: "2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 12 V17.4 C15.6 20.3 13.4 21.7 10.8 21",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, "jojo")), /*#__PURE__*/React.createElement("p", {
    className: "mk-footer__tag"
  }, "Warm paper, drawn in ink.")), FOOTER_COLS.map(col => /*#__PURE__*/React.createElement("nav", {
    className: "mk-footer__col",
    key: col.h,
    "aria-label": col.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-footer__h"
  }, col.h), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "mk-footer__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 perelmangao \u2014 the jojo design system."), /*#__PURE__*/React.createElement("span", {
    className: "mk-footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy")))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* Marketing — hero. Flat warm paper, large light display, one tertiary accent CTA,
   and a flat code preview well (diff-add uses the ok status tint — content, not chrome). */
const {
  Button: HeroButton
} = window.DS;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-shell mk-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-eyebrow"
  }, "one ink \xB7 one paper"), /*#__PURE__*/React.createElement("h1", {
    className: "mk-hero__title"
  }, "Warm paper, drawn in ink."), /*#__PURE__*/React.createElement("p", {
    className: "mk-hero__sub"
  }, "jojo is an original, framework-agnostic design system. One warm ink, one warm paper, one disciplined accent \u2014 composed into calm, legible interfaces that work in light and dark."), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__cta"
  }, /*#__PURE__*/React.createElement(HeroButton, {
    variant: "primary",
    size: "lg"
  }, "Get started"), /*#__PURE__*/React.createElement(HeroButton, {
    variant: "tertiary"
  }, "Read the docs")), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__meta"
  }, "MIT-licensed \xB7 works with any framework \xB7 light & dark")), /*#__PURE__*/React.createElement("div", {
    className: "mk-hero__demo",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-code"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-code__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-code__file"
  }, "cta.css")), /*#__PURE__*/React.createElement("pre", {
    className: "mk-code__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-com"
  }, "// compose from tokens — never hardcode"), "\n", ".cta ", "{", "\n", "  ", "background: ", /*#__PURE__*/React.createElement("span", {
    className: "c-kw"
  }, "var(--fill-ink)"), ";", "\n", /*#__PURE__*/React.createElement("span", {
    className: "c-add"
  }, "+  color: var(--accent-orange);"), "\n", "}"),/*#__PURE__*/React.createElement("div", {
    className: "mk-code__hint"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-kbd"
  }, "var()"), " resolves to the live theme")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
/* Marketing — top navigation. Uses DS Button + IconButton. Theme toggle uses
   inline SVGs (not lucide) so the sun/moon swap stays pure-React on re-render. */
const {
  Button: MkButton,
  IconButton: MkIconButton
} = window.DS;
const SunIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
}));
const MoonIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
}));
function Nav({
  theme,
  onToggleTheme
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "mk-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-shell mk-nav__row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mk-logo",
    href: "#top",
    "aria-label": "jojo home"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 28 28",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "27",
    height: "27",
    rx: "5",
    stroke: "currentColor",
    strokeOpacity: "0.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15.6",
    cy: "8",
    r: "2",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.6 12 V17.4 C15.6 20.3 13.4 21.7 10.8 21",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, "jojo")), /*#__PURE__*/React.createElement("nav", {
    className: "mk-nav__links",
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#features",
    className: "is-active"
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#docs"
  }, "Docs"), /*#__PURE__*/React.createElement("a", {
    href: "#blog"
  }, "Blog")), /*#__PURE__*/React.createElement("div", {
    className: "mk-nav__actions"
  }, /*#__PURE__*/React.createElement(MkIconButton, {
    icon: theme === 'dark' ? /*#__PURE__*/React.createElement(SunIcon, null) : /*#__PURE__*/React.createElement(MoonIcon, null),
    label: "Toggle theme",
    onClick: onToggleTheme
  }), /*#__PURE__*/React.createElement(MkButton, {
    variant: "quinary",
    className: "mk-hide-sm"
  }, "GitHub"), /*#__PURE__*/React.createElement(MkButton, {
    variant: "primary"
  }, "Get started"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
/* Marketing — pricing. SegmentedControl toggles monthly/annual (re-renders, so the
   check glyph is inline SVG, not lucide). Pro tier uses the hard-outline card for
   emphasis; the orange never becomes a fill. */
const {
  Button: PrButton,
  Card: PrCard,
  SegmentedControl: PrSegmented
} = window.DS;
const {
  useState: prUseState
} = React;
const PrCheck = () => /*#__PURE__*/React.createElement("svg", {
  className: "mk-price__check",
  width: "15",
  height: "15",
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3.5 8.5l3 3 6-6.5",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const TIERS = [{
  name: 'Community',
  monthly: 0,
  annual: 0,
  blurb: 'Everything, forever. MIT-licensed.',
  cta: 'Get started',
  variant: 'secondary',
  features: ['All tokens & components', 'Light & dark themes', 'Docs in English & 简体中文']
}, {
  name: 'Sponsor',
  monthly: 20,
  annual: 16,
  blurb: 'Support ongoing development.',
  featured: true,
  cta: 'Become a sponsor',
  variant: 'primary',
  features: ['Everything in Community', 'Your name in BACKERS.md', 'Priority issue triage', 'Early access to RFCs']
}, {
  name: 'Studio',
  monthly: 40,
  annual: 32,
  blurb: 'For teams adopting jojo.',
  cta: 'Talk to sales',
  variant: 'outline',
  features: ['Everything in Sponsor', 'Adoption guidance', 'Private Q&amp;A channel', 'A design-system review']
}];
function PriceTier({
  tier,
  annual
}) {
  const price = annual ? tier.annual : tier.monthly;
  return /*#__PURE__*/React.createElement(PrCard, {
    variant: tier.featured ? 'outline' : 'soft',
    hairline: !tier.featured,
    padding: "lg",
    className: "mk-price"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-price__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-price__name"
  }, tier.name), tier.featured && /*#__PURE__*/React.createElement("span", {
    className: "mk-price__flag"
  }, "Most popular")), /*#__PURE__*/React.createElement("div", {
    className: "mk-price__amount"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk-price__num"
  }, "$", price), /*#__PURE__*/React.createElement("span", {
    className: "mk-price__per"
  }, "/ month", annual && price > 0 ? ', billed yearly' : '')), /*#__PURE__*/React.createElement("p", {
    className: "mk-price__blurb"
  }, tier.blurb), /*#__PURE__*/React.createElement(PrButton, {
    variant: tier.variant,
    className: "mk-price__cta"
  }, tier.cta), /*#__PURE__*/React.createElement("ul", {
    className: "mk-price__list"
  }, tier.features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(PrCheck, null), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: f
    }
  })))));
}
function Pricing() {
  const [annual, setAnnual] = prUseState(true);
  return /*#__PURE__*/React.createElement("section", {
    className: "mk-section mk-section--alt",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-section__head mk-section__head--center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mk-eyebrow"
  }, "support"), /*#__PURE__*/React.createElement("h2", {
    className: "mk-section__title"
  }, "Free forever. Sponsor if it helps."), /*#__PURE__*/React.createElement("div", {
    className: "mk-price__toggle"
  }, /*#__PURE__*/React.createElement(PrSegmented, {
    value: annual ? 'annual' : 'monthly',
    onChange: v => setAnnual(v === 'annual'),
    options: [{
      value: 'monthly',
      label: 'Monthly'
    }, {
      value: 'annual',
      label: 'Yearly · save 20%'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mk-price-grid"
  }, TIERS.map(t => /*#__PURE__*/React.createElement(PriceTier, {
    key: t.name,
    tier: t,
    annual: annual
  })))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Flyout = __ds_scope.Flyout;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
