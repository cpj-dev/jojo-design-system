import React from 'react';

/**
 * Button — the primary action primitive. All variants are full-pill and animate
 * NOTHING (instant chrome state). The orange is never a fill: it appears only as
 * the tertiary (accent) CTA's text. Action is ink-black.
 */
export function Button({
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
  const cls = [
    'jojo-btn',
    `jojo-btn--${variant}`,
    size === 'sm' ? 'jojo-btn--sm' : size === 'lg' ? 'jojo-btn--lg' : '',
    className,
  ].filter(Boolean).join(' ');

  const showArrow = variant === 'tertiary' && !trailingIcon;
  const Tag = as || (href ? 'a' : 'button');
  const props = { className: cls, ...rest };

  if (Tag === 'a') {
    props.href = disabled ? undefined : href;
    if (disabled) props['aria-disabled'] = 'true';
  } else {
    props.type = type;
    props.disabled = disabled;
  }

  return (
    <Tag {...props}>
      {leadingIcon}
      {children != null && <span>{children}</span>}
      {trailingIcon}
      {showArrow && <span aria-hidden="true">→</span>}
    </Tag>
  );
}
