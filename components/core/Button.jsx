import React from 'react';

/**
 * Button action primitive. Variants are full-pill and use immediate state
 * changes. The tertiary variant uses `--accent-orange` text.
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
