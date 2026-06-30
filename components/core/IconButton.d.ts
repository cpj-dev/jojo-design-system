import * as React from 'react';

/** An icon-only button. Always provide `label` for accessibility. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The icon node (e.g. a Lucide <i> or inline SVG). */
  icon: React.ReactNode;
  /** Accessible name — sets aria-label + title. Required. */
  label: string;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** 'pill' (default) or 'trigger' (8px radius + hairline edge for toolbars). */
  shape?: 'pill' | 'trigger';
  /** @default false */
  disabled?: boolean;
}

export declare function IconButton(props: IconButtonProps): React.ReactElement;
