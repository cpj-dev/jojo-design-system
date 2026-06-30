import * as React from 'react';

export type StatusTone = 'neutral' | 'ok' | 'info' | 'warning' | 'danger' | 'accent';

/** A small filled status circle — the brand's preferred state indicator. */
export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  tone?: StatusTone;
  /** Accessible name; when set the dot gets role="img". */
  label?: string;
}

export declare function StatusDot(props: StatusDotProps): React.ReactElement;
