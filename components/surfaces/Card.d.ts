import * as React from 'react';

/**
 * The workhorse surface. `soft` sits on the card ladder (flat); `outline` is paper +
 * the hard ink stroke for emphasis. Never nest a Card in a Card.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** @default 'soft' */
  variant?: 'soft' | 'outline';
  /** Add a faint hairline edge to a soft card. @default false */
  hairline?: boolean;
  /** Use the recessed well fill (--bg-1) instead of the card fill. @default false */
  well?: boolean;
  /** Inner padding. @default 'md' */
  padding?: 'none' | 'md' | 'lg';
  /** Make it a keyboard-reachable button with a color-only hover. @default false */
  interactive?: boolean;
  /** Render as a custom element/component. */
  as?: React.ElementType;
  /** When set, renders an <a> (implies interactive). */
  href?: string;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): React.ReactElement;
