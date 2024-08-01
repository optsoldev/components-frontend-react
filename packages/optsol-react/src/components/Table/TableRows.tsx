import { TableCell, TableRow } from '@mui/material';
import { Table as ReactTable, flexRender } from '@tanstack/react-table';

import { TableRowProps } from './@types';

interface Props<T extends object> {
  table: ReactTable<T>;
  TableRowProps?: TableRowProps<T>;
}

export function TableRows<T extends object>({
  table,
  TableRowProps
}: Readonly<Props<T>>) {
  const { onClick } = TableRowProps || {};

  return (
    <>
      {table.getRowModel().rows.map((row) => {
        return (
          <TableRow
            key={row.id}
            sx={{ cursor: onClick ? 'pointer' : 'default' }}
            {...(onClick && {
              onClick: (e: React.MouseEvent<HTMLTableRowElement> | undefined) =>
                onClick(row.original, e)
            })}
          >
            {row.getVisibleCells().map((cell) => {
              return (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </>
  );
}
