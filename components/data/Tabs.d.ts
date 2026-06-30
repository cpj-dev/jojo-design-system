import * as React from 'react';

export interface TabItem { id: string; label: React.ReactNode; icon?: React.ReactNode; }

/** Editor-style tabs; active tab gets the accent bottom-border. Primary navigation. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  value: string;
  onChange?: (id: string) => void;
}

export declare function Tabs(props: TabsProps): React.ReactElement;
