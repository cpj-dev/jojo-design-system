import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** A native <select> styled to match Input, with a hairline chevron. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string | boolean;
  /** Options as objects or plain strings; or pass <option> children instead. */
  options?: Array<SelectOption | string>;
  /** @default 'md' */
  size?: 'md' | 'sm';
  children?: React.ReactNode;
}

export declare function Select(props: SelectProps): React.ReactElement;
