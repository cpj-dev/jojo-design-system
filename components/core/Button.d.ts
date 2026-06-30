import * as React from 'react';

export type ButtonVariant =
  | 'primary'    // ink fill, cream text — the one ink action
  | 'secondary'  // ladder fill + faint hairline
  | 'ghost'      // transparent + ghost hairline edge
  | 'outline'    // paper + the hard ink outline (emphasis CTA edge)
  | 'tertiary'   // the accent CTA: no box, orange text + trailing → (auto-added)
  | 'quinary';   // bare ink text, no chrome

export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * The primary action primitive — full-pill, instant (no motion). Action is ink;
 * the orange only ever appears as the `tertiary` variant's text.
 *
 * @startingPoint section="Core" subtitle="Pill buttons — every variant & size" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual role. @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Render as a different element/component (e.g. a router Link). */
  as?: React.ElementType;
  /** When set (and no `as`), renders an <a>. */
  href?: string;
  /** Button type when rendered as <button>. @default 'button' */
  type?: 'button' | 'submit' | 'reset';
  /** Icon node placed before the label (16px, inherits currentColor). */
  leadingIcon?: React.ReactNode;
  /** Icon node placed after the label. */
  trailingIcon?: React.ReactNode;
  /** @default false */
  disabled?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): React.ReactElement;
