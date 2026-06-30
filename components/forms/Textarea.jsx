import React from 'react';

/** Textarea — multiline input, same surface + focus treatment as Input. */
export function Textarea({ label, hint, error, id, className = '', ...rest }) {
  const taId = id || (label ? `jojo-ta-${Math.random().toString(36).slice(2, 8)}` : undefined);
  const invalid = !!error;
  const control = (
    <textarea
      id={taId}
      className={['jojo-textarea', className].filter(Boolean).join(' ')}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );

  if (!label && !hint && !error) return control;

  return (
    <span className="jojo-field">
      {label && <label className="jojo-field__label" htmlFor={taId}>{label}</label>}
      {control}
      {(hint || error) && (
        <span className={`jojo-field__hint${error ? ' jojo-field__hint--error' : ''}`}>
          {typeof error === 'string' ? error : hint}
        </span>
      )}
    </span>
  );
}
