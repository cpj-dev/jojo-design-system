import React from 'react';

/**
 * Card — the workhorse surface. `soft` (default, on the card ladder, flat) or
 * `outline` (paper + the hard ink stroke, for emphasis/framed/selected). Set
 * `interactive` (or pass href/onClick) to make it a real keyboard-reachable
 * button/link with a color-only hover. NEVER nest a Card in a Card (anti-box).
 */
export function Card({
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
  const cls = [
    'jojo-card',
    variant === 'outline' ? 'jojo-card--outline' : '',
    well ? 'jojo-card--well' : '',
    hairline && variant !== 'outline' && !well ? 'jojo-card--hairline' : '',
    padding === 'lg' ? 'jojo-card--pad-lg' : padding === 'md' ? 'jojo-card--pad' : '',
    clickable ? 'jojo-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');

  const Tag = as || (href ? 'a' : clickable ? 'button' : 'div');
  const props = { className: cls, ...rest };
  if (Tag === 'a') props.href = href;
  if (Tag === 'button') props.type = props.type || 'button';

  return <Tag {...props}>{children}</Tag>;
}
