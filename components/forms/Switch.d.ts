import * as React from 'react';

/** A pill toggle; on = ink track + cream knob. The knob snaps (no slide). Controlled. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export declare function Switch(props: SwitchProps): React.ReactElement;
