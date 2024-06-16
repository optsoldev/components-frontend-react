import { TableCell, TableRow } from '@mui/material';
import { Table as ReactTable, flexRender } from '@tanstack/react-table';

interface Props<T extends object> {
  table: ReactTable<T>;
}

export function TableRows<T extends object>({ table }: Readonly<Props<T>>) {
  return (
    <>
      {table.getRowModel().rows.map((row) => {
        return (
          <TableRow key={row.id}>
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
