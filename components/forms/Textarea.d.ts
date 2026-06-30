import * as React from 'react';

/** Multiline input — same surface + focus treatment as Input. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string | boolean;
}

export declare function Textarea(props: TextareaProps): React.ReactElement;
