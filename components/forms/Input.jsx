import React from 'react';

/**
 * Input — a real text input on the card surface (4px, hairline, focus darkens the
 * border + adds the accent ring). Pass `label`/`hint` to wrap it in a field; pass
 * `leadingIcon` to render the 36px search-trigger variant. `mono` for command input.
 */
export function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  mono = false,
  leadingIcon = null,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `jojo-in-${Math.random().toString(36).slice(2, 8)}` : undefined);
  const invalid = !!error;
  const inputCls = [
    'jojo-input',
    size === 'sm' ? 'jojo-input--sm' : '',
    mono ? 'jojo-input--mono' : '',
    leadingIcon ? '' : className,
  ].filter(Boolean).join(' ');

  const control = leadingIcon ? (
    <span className={['jojo-search', className].filter(Boolean).join(' ')}>
      <span className="jojo-search__icon">{leadingIcon}</span>
      <input id={inputId} className={inputCls} aria-invalid={invalid || undefined} {...rest} />
    </span>
  ) : (
    <input id={inputId} className={inputCls} aria-invalid={invalid || undefined} {...rest} />
  );

  if (!label && !hint && !error) return control;

  return (
    <span className="jojo-field">
      {label && <label className="jojo-field__label" htmlFor={inputId}>{label}</label>}
      {control}
      {(hint || error) && (
        <span className={`jojo-field__hint${error ? ' jojo-field__hint--error' : ''}`}>
          {typeof error === 'string' ? error : hint}
        </span>
      )}
    </span>
  );
}
