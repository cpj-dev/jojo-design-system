import React from 'react';

/**
 * Tag — a full-pill chip for filters / tokens / removable selections. Quieter than
 * Badge (transparent fill, hairline edge). Pass onRemove to show the × affordance.
 */
export function Tag({ onRemove, leadingIcon = null, className = '', children, ...rest }) {
  const cls = ['jojo-tag', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {leadingIcon}
      {children}
      {onRemove && (
        <button type="button" className="jojo-tag__x" aria-label="Remove" onClick={onRemove}>×</button>
      )}
    </span>
  );
}
