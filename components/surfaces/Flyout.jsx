import React from 'react';

/**
 * Flyout surface for select, dropdown, menu, and context-menu UI. Uses
 * `--bg-popover`, 4px radius, `--shadow-flyout`, and a 1px border.
 * Data-driven via `items`, or pass children.
 *
 * items: [{ label, icon?, trailing?, danger?, onClick?, separator? }]
 * Positioning is up to the caller (wrap in a relatively-positioned anchor).
 */
export function Flyout({ items, className = '', children, ...rest }) {
  return (
    <div role="menu" className={['jojo-flyout', className].filter(Boolean).join(' ')} {...rest}>
      {children}
      {(items || []).map((it, i) =>
        it.separator ? (
          <div key={i} className="jojo-flyout__sep" role="separator" />
        ) : (
          <button
            key={i}
            type="button"
            role="menuitem"
            className={['jojo-flyout__item', it.danger ? 'jojo-flyout__item--danger' : ''].filter(Boolean).join(' ')}
            onClick={it.onClick}
          >
            {it.icon}
            <span style={{ flex: 1 }}>{it.label}</span>
            {it.trailing}
          </button>
        )
      )}
    </div>
  );
}
