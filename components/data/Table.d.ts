import * as React from 'react';

export interface TableColumn<Row = any> {
  key: string;
  label: React.ReactNode;
  /** Right-align + tabular mono (for numbers). */
  numeric?: boolean;
  /** Fixed column width (table cells only) e.g. "120px". */
  width?: string;
  /** Custom cell renderer. */
  render?: (value: any, row: Row) => React.ReactNode;
}

/**
 * A divided card grid — divide-y rows, no zebra, no outer border. Selected row =
 * tint + inset accent ring. Scrolls inside its wrapper, never widens the page.
 */
export interface TableProps<Row = any> extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: TableColumn<Row>[];
  data: Row[];
  /** Field used as the React key + selection id. @default 'id' */
  rowKey?: string;
  /** Highlights the matching row. */
  selectedId?: string | number;
  /** Makes rows keyboard-clickable. */
  onRowClick?: (row: Row) => void;
}

export declare function Table(props: TableProps): React.ReactElement;
