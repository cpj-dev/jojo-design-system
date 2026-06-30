import * as React from 'react';

/** A monospace key cap for keyboard shortcuts. Compose several for a chord. */
export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export declare function Kbd(props: KbdProps): React.ReactElement;
