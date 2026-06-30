import React from 'react';

/**
 * Table — a divided card grid: divide-y hairline rows, no zebra, no outer border,
 * no radius. Numeric columns are right-aligned tabular mono. A selected row gets a
 * `--bg-2` tint + inset accent ring (NEVER a per-row border). Scrolls inside its
 * wrapper on narrow viewports — it never pushes the page width.
 *
 * columns: [{ key, label, numeric?, width?, render?(value,row) }]
 */
export function Table({ columns, data, rowKey = 'id', selectedId, onRowClick, className = '', ...rest }) {
  const clickable = !!onRowClick;

  return (
    <div className="jojo-table-wrap">
      <table className={['jojo-table', className].filter(Boolean).join(' ')} {...rest}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={c.numeric ? 'jojo-num' : ''} style={c.width ? { width: c.width } : undefined}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const id = row[rowKey];
            const selected = selectedId != null && id === selectedId;
            const trCls = [
              clickable ? 'jojo-row--clickable' : '',
              selected ? 'jojo-row--selected' : '',
            ].filter(Boolean).join(' ');
            const handlers = clickable
              ? {
                  onClick: () => onRowClick(row),
                  tabIndex: 0,
                  'aria-selected': selected || undefined,
                  onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onRowClick(row); }
                  },
                }
              : {};
            return (
              <tr key={id} className={trCls} {...handlers}>
                {columns.map((c) => (
                  <td key={c.key} className={c.numeric ? 'jojo-num' : ''}>
                    {c.render ? c.render(row[c.key], row) : row[c.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
