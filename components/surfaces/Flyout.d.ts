import * as React from 'react';

export interface FlyoutItem {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  danger?: boolean;
  separator?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

/** The warm popover surface for menus/dropdowns. Caller handles positioning. */
export interface FlyoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Menu items; or pass children for custom content. */
  items?: FlyoutItem[];
  children?: React.ReactNode;
}

export declare function Flyout(props: FlyoutProps): React.ReactElement;
