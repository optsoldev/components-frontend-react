import { TableCell, TableRow, Checkbox } from '@mui/material';
import { Table as ReactTable, flexRender } from '@tanstack/react-table';

import { SelectionProps, TableRowProps } from './@types';

type Props<T extends object> = {
  table: ReactTable<T>;
  TableRowProps?: TableRowProps<T>;
} & SelectionProps<T>;

export function TableRows<T extends object>({
  table,
  TableRowProps,
  rowSelection = false,
  selectedRowIds = {},
  onSelectRow,
  disableMultipleSelection
}: Readonly<Props<T>>) {
  const { onClick } = TableRowProps || {};

  const handleRowClick = (
    row: any,
    event: React.MouseEvent<HTMLTableRowElement>
  ) => {
    if (
      !(
        event.target instanceof HTMLInputElement &&
        event.target.type === 'checkbox'
      )
    ) {
      onClick && onClick(row.original, event);
    }
  };

  return (
    <>
      {table.getRowModel().rows.map((row) => {
        const isSelected = !!selectedRowIds[row.id];

        return (
          <TableRow
            key={row.id}
            sx={{ cursor: onClick ? 'pointer' : 'default' }}
            onClick={(e) => handleRowClick(row, e)}
          >
            {rowSelection && (
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isSelected}
                  onChange={(e) => {
                    onSelectRow && onSelectRow(row.original, e.target.checked);
                  }}
                  disabled={
                    disableMultipleSelection &&
                    Object.keys(selectedRowIds).length > 0
                  }
                />
              </TableCell>
            )}
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </>
  );
}
