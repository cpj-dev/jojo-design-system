import * as React from 'react';

/** A tiny ink-fill label shown on hover + keyboard focus. Wrap a focusable trigger. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  content: React.ReactNode;
  children: React.ReactNode;
}

export declare function Tooltip(props: TooltipProps): React.ReactElement;
