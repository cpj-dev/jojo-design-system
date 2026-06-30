import React from 'react';

/**
 * Flyout — the warm popover surface (select / dropdown / menu / context menu). Cream
 * `--bg-popover`, 4px, the flat halo shadow, 1px border — never white glass, never
 * backdrop-blur, never shadow-md/lg. Data-driven via `items`, or pass children.
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
