import React from 'react';

/**
 * Tabs — editor-style tabs: bg matches the page, a bottom hairline, 0 radius, and
 * the active tab carries an accent bottom-border (orange = active state). Controlled
 * via `value` + `onChange(id)`. Use this for primary navigation, not a pill segment.
 *
 * tabs: [{ id, label, icon? }]
 */
export function Tabs({ tabs, value, onChange, className = '', ...rest }) {
  return (
    <div role="tablist" className={['jojo-tabs', className].filter(Boolean).join(' ')} {...rest}>
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          aria-selected={value === t.id}
          className="jojo-tab"
          onClick={() => onChange && onChange(t.id)}
        >
          {t.icon}
          {t.label}
        </button>
      ))}
    </div>
  );
}
