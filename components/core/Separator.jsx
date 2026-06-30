import React from 'react';

/**
 * Separator — a 1px hairline divider. Horizontal by default; orientation="vertical"
 * stretches to its flex parent's height. This is rung 3 of the grouping ladder.
 */
export function Separator({ orientation = 'horizontal', className = '', ...rest }) {
  const cls = [
    'jojo-sep',
    orientation === 'vertical' ? 'jojo-sep--v' : 'jojo-sep--h',
    className,
  ].filter(Boolean).join(' ');

  return <div role="separator" aria-orientation={orientation} className={cls} {...rest} />;
}
