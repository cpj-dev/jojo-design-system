import * as React from 'react';

/** A full-pill chip for filters / tokens / removable selections. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** When provided, renders a × control that calls this on click. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Optional leading icon (e.g. a status dot or 14px glyph). */
  leadingIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): React.ReactElement;
