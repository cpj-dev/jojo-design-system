import React from 'react';

/**
 * IconButton — a square, icon-only button. Pill by default; shape="trigger" gives
 * the 8px-radius toolbar-trigger look with a hairline edge. Always pass `label`
 * (sets aria-label + title) — icon-only controls must be keyboard + SR reachable.
 */
export function IconButton({
  icon,
  label,
  size = 'md',
  shape = 'pill',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = [
    'jojo-iconbtn',
    size === 'sm' ? 'jojo-iconbtn--sm' : '',
    shape === 'trigger' ? 'jojo-iconbtn--trigger' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type="button" className={cls} aria-label={label} title={label} disabled={disabled} {...rest}>
      {icon}
    </button>
  );
}
