import React from 'react';

/**
 * Avatar — full-pill (circular) user mark. Renders an image when `src` is set,
 * otherwise `initials` on the ladder fill. Sizes: sm 24 / md 32 / lg 44.
 */
export function Avatar({ src, alt = '', initials = '', size = 'md', className = '', ...rest }) {
  const cls = [
    'jojo-avatar',
    size === 'sm' ? 'jojo-avatar--sm' : size === 'lg' ? 'jojo-avatar--lg' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={cls} {...rest}>
      {src ? <img src={src} alt={alt} /> : initials}
    </span>
  );
}
