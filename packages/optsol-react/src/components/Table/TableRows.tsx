import { TableCell, TableRow, Checkbox } from '@mui/material';
import { Table as ReactTable, flexRender } from '@tanstack/react-table';

import { TableRowProps } from './@types';

interface Props<T extends object> {
  table: ReactTable<T>;
  TableRowProps?: TableRowProps<T>;
  selectableRows?: boolean;
  selectedRowIds?: Record<string, boolean>;
  onSelectRow?: (rowId: string, isSelected: boolean) => void;
  disableSelectAll?: boolean;
}

export function TableRows<T extends object>({
  table,
  TableRowProps,
  selectableRows = false,
  selectedRowIds = {},
  onSelectRow,
  disableSelectAll = false
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
            {selectableRows && (
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isSelected}
                  onChange={(e) => {
                    onSelectRow && onSelectRow(row.id, e.target.checked);
                  }}
                  disabled={
                    disableSelectAll && Object.keys(selectedRowIds).length > 0
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
