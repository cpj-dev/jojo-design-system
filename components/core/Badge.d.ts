import * as React from 'react';

export type BadgeTone = 'neutral' | 'ok' | 'info' | 'warning' | 'danger';

/** A small full-pill status/label chip. Status tones are for CONTENT only. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  tone?: BadgeTone;
  /** Use the mono family (for versions, counts, codes). @default false */
  mono?: boolean;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): React.ReactElement;
