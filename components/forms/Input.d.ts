import * as React from 'react';

/** A real text input on the card surface; focus darkens the border + accent ring. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Optional label — when set, the input is wrapped in a field with the label above. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message (string) or boolean; sets aria-invalid + danger styling. */
  error?: string | boolean;
  /** @default 'md' (md 44 / sm 36) */
  size?: 'md' | 'sm';
  /** Use the mono family — for command / search / literal input. @default false */
  mono?: boolean;
  /** Leading icon node → renders the 36px search-trigger variant. */
  leadingIcon?: React.ReactNode;
}

export declare function Input(props: InputProps): React.ReactElement;
