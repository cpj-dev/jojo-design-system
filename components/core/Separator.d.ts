import * as React from 'react';

/** A 1px hairline divider (grouping-ladder rung 3). */
export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
}

export declare function Separator(props: SeparatorProps): React.ReactElement;
