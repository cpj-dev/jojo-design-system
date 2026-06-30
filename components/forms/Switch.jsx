import React from 'react';

/**
 * Switch — a pill toggle. Off = ladder track; on = ink track + cream knob. The knob
 * SNAPS (no animated slide — geometry stays still); only color changes. Controlled.
 */
export function Switch({ label, checked, onChange, disabled = false, id, className = '', ...rest }) {
  const swId = id || `jojo-sw-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label className={['jojo-switch', disabled ? 'jojo-switch--disabled' : '', className].filter(Boolean).join(' ')} htmlFor={swId}>
      <input id={swId} type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span className="jojo-switch__track"><span className="jojo-switch__knob" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
