import React from 'react';

/**
 * Table with divided rows. Numeric columns are right-aligned tabular mono. A
 * selected row gets a `--bg-2` tint and inset accent ring. The table scrolls
 * inside its wrapper on narrow viewports.
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
