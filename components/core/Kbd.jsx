import React from 'react';

/**
 * Kbd — a monospace key cap for keyboard shortcuts (e.g. ⌘K, Tab). Micro 2px radius,
 * faint hairline, mono type. Compose several for a chord: <Kbd>⌘</Kbd><Kbd>K</Kbd>.
 */
export function Kbd({ className = '', children, ...rest }) {
  return (
    <kbd className={['jojo-kbd', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </kbd>
  );
}
