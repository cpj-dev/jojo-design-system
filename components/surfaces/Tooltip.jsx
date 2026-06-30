import React from 'react';

/**
 * Tooltip — a tiny ink-fill label shown on hover AND keyboard focus. Wrap a
 * focusable trigger (e.g. an IconButton). Appears above the trigger by default.
 */
export function Tooltip({ content, className = '', children, ...rest }) {
  const [open, setOpen] = React.useState(false);
  return (
    <span
      className="jojo-tooltip-wrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      {...rest}
    >
      {children}
      {open && (
        <span className="jojo-tooltip-pop" role="tooltip">
          <span className={['jojo-tooltip', className].filter(Boolean).join(' ')}>{content}</span>
        </span>
      )}
    </span>
  );
}
