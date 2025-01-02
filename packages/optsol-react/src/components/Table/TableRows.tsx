import { TableCell, TableRow } from '@mui/material';
import { Table as ReactTable, flexRender } from '@tanstack/react-table';

import { TableRowProps } from './@types';

type Props<T extends object> = {
  table: ReactTable<T>;
  TableRowProps?: TableRowProps<T>;
};

export function TableRows<T extends object>({
  table,
  TableRowProps
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
      onClick && onClick(row, event);
    }
  };

  return (
    <>
      {table.getRowModel().rows.map((row) => {
        return (
          <TableRow
            key={row.id}
            sx={{ cursor: onClick ? 'pointer' : 'default' }}
            onClick={(e) => handleRowClick(row, e)}
          >
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
