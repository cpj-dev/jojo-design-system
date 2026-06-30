import React from 'react';

const Check = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Checkbox — 4px box, hairline; checked = ink fill + cream check. Controlled via
 * `checked` + `onChange`. The whole label is the click target.
 */
export function Checkbox({ label, checked, onChange, disabled = false, id, className = '', ...rest }) {
  const cbId = id || `jojo-cb-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label className={['jojo-check', disabled ? 'jojo-check--disabled' : '', className].filter(Boolean).join(' ')} htmlFor={cbId}>
      <input id={cbId} type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="jojo-check__box"><Check /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
