import * as React from 'react';

/** A checkbox with an inline label; checked = ink fill + cream check. Controlled. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export declare function Checkbox(props: CheckboxProps): React.ReactElement;
