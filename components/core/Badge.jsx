import React from 'react';

/**
 * Badge — a small full-pill status or label chip. Status tones use token tint
 * pairs (12% fill / solid foreground / 45% edge). Badges do not wrap.
 */
export function Badge({ tone = 'neutral', mono = false, className = '', children, ...rest }) {
  const cls = [
    'jojo-badge',
    tone !== 'neutral' ? `jojo-badge--${tone}` : '',
    mono ? 'jojo-badge--mono' : '',
    className,
  ].filter(Boolean).join(' ');

  return <span className={cls} {...rest}>{children}</span>;
}
