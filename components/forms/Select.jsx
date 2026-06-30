import React from 'react';

const Chevron = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Select — a native <select> styled to match Input, with a hairline chevron. Pass
 * `options` ([{value,label}] or string[]) or <option> children. Native = free
 * keyboard + mobile behavior.
 */
export function Select({ label, hint, error, id, options, size = 'md', className = '', children, ...rest }) {
  const selId = id || (label ? `jojo-sel-${Math.random().toString(36).slice(2, 8)}` : undefined);
  const opts = (options || []).map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

  const control = (
    <span className="jojo-select-wrap">
      <select
        id={selId}
        className={['jojo-select', size === 'sm' ? 'jojo-input--sm' : '', className].filter(Boolean).join(' ')}
        aria-invalid={!!error || undefined}
        {...rest}
      >
        {children}
        {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <span className="jojo-select-wrap__chev"><Chevron /></span>
    </span>
  );

  if (!label && !hint && !error) return control;

  return (
    <span className="jojo-field">
      {label && <label className="jojo-field__label" htmlFor={selId}>{label}</label>}
      {control}
      {(hint || error) && (
        <span className={`jojo-field__hint${error ? ' jojo-field__hint--error' : ''}`}>
          {typeof error === 'string' ? error : hint}
        </span>
      )}
    </span>
  );
}
