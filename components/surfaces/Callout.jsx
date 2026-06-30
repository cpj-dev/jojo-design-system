import React from 'react';

/**
 * Callout — a quiet framed note on the well surface (10px radius, hairline). No
 * colored left-rail, no icon banner. Optional `tone` shows a leading status dot.
 */
export function Callout({ title, tone, className = '', children, ...rest }) {
  return (
    <div className={['jojo-callout', className].filter(Boolean).join(' ')} {...rest}>
      {title && (
        <div className="jojo-callout__title">
          {tone && <span className={`jojo-dot jojo-dot--${tone}`} />}
          {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
