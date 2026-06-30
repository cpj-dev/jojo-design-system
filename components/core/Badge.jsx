import React from 'react';

/**
 * Badge — a small full-pill status/label chip. Neutral by default (ink on the
 * ladder). Status tones use the quarantined token-tint pattern (12% fill / solid
 * fg / 45% edge) and belong in CONTENT, never as chrome. Never wraps.
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
