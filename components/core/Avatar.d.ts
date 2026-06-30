import * as React from 'react';

/** A full-pill (circular) avatar — image, or initials on the ladder fill. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; when omitted, `initials` render. */
  src?: string;
  alt?: string;
  /** 1–2 letters shown when there is no image. */
  initials?: string;
  /** @default 'md' (sm 24 / md 32 / lg 44) */
  size?: 'sm' | 'md' | 'lg';
}

export declare function Avatar(props: AvatarProps): React.ReactElement;
