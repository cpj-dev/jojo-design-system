import React from 'react';

/**
 * StatusDot — a small filled circle in a status token. The brand's preferred way to
 * show state (instead of an icon or emoji). Pass `label` for an accessible name.
 */
export function StatusDot({ tone = 'neutral', label, className = '', ...rest }) {
  const cls = ['jojo-dot', tone !== 'neutral' ? `jojo-dot--${tone}` : '', className]
    .filter(Boolean).join(' ');
  return (
    <span
      className={cls}
      role={label ? 'img' : undefined}
      aria-label={label}
      {...rest}
    />
  );
}
