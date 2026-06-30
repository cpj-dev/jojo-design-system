import React from 'react';

/**
 * SegmentedControl — a pill track of 2–3 short options; the active item gets a
 * subtle lighter pill + solid ink text (selection by color, not a heavy fill).
 * Controlled via `value` + `onChange(value)`. For primary navigation use Tabs.
 */
export function SegmentedControl({ options, value, onChange, className = '', ...rest }) {
  const opts = (options || []).map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div role="tablist" className={['jojo-seg', className].filter(Boolean).join(' ')} {...rest}>
      {opts.map((o) => (
        <button
          key={o.value}
          type="button"
          role="tab"
          aria-selected={value === o.value}
          className="jojo-seg__item"
          onClick={() => onChange && onChange(o.value)}
        >
          {o.icon}
          {o.label}
        </button>
      ))}
    </div>
  );
}
