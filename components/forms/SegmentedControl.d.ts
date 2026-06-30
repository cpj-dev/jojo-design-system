import * as React from 'react';

export interface SegmentedOption { value: string; label: React.ReactNode; icon?: React.ReactNode; }

/** A pill segmented control for 2–3 short options. For primary nav use Tabs. */
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: Array<SegmentedOption | string>;
  value: string;
  onChange?: (value: string) => void;
}

export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement;
