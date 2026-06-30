import * as React from 'react';

/** A quiet framed note on the well surface (10px). No colored rail. */
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional bold first line. */
  title?: React.ReactNode;
  /** Shows a leading status dot on the title. */
  tone?: 'ok' | 'info' | 'warning' | 'danger' | 'accent';
  children?: React.ReactNode;
}

export declare function Callout(props: CalloutProps): React.ReactElement;
