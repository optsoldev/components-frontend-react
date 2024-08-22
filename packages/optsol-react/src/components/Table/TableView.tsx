import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import { Table as ReactTable } from '@tanstack/react-table';
import { useEffect } from 'react';

import { SelectionProps, TableControls, TableRowProps } from './@types';
import { TableHeaders } from './TableHeaders';
import { TableRows } from './TableRows';

type TableViewProps<T extends object> = {
  title?: string;
  table: ReactTable<T>;
  controls: TableControls<T>;
  headerTitlePosition?: 'start' | 'center' | 'end';
  TableRowProps?: TableRowProps<T>;
  // rowSelection?: boolean;
  // selectedRowIds?: Record<string, boolean>;
  // onSelectRow?: (rowId: string, isSelected: boolean) => void;
  // disableMultipleSelection?: boolean;
} & SelectionProps;

function TableView<T extends object>({
  table,
  controls,
  headerTitlePosition,
  TableRowProps,
  rowSelection = false,
  selectedRowIds = {},
  onSelectRow,
  disableMultipleSelection = false
}: Readonly<TableViewProps<T>>) {
  useEffect(() => {
    if (onSelectRow) {
      table.getRowModel().rows.forEach((row: any) => {
        if (selectedRowIds[row.id]) {
          onSelectRow(row.id, false);
        }
      });
    }
  }, [table.getState().pagination.pageIndex]);

  const handleSelectAll = () => {
    const allSelected = table
      .getRowModel()
      .rows.every((row: any) => selectedRowIds[row.id]);
    table.getRowModel().rows.forEach((row: any) => {
      onSelectRow && onSelectRow(row.id, !allSelected);
    });
  };

  return (
    <TableContainer sx={{ maxHeight: 1 }}>
      <Table stickyHeader size="small">
        <TableHeaders
          groups={table.getHeaderGroups()}
          titlePosition={headerTitlePosition}
          rowSelection={rowSelection}
          disableMultipleSelection={disableMultipleSelection}
          onSelectAll={handleSelectAll}
          isAllSelected={
            table.getRowModel().rows.every((row: any) => selectedRowIds[row.id])
              ? 'all'
              : Object.keys(selectedRowIds).length &&
                  table
                    .getRowModel()
                    .rows.some((row: any) => selectedRowIds[row.id])
                ? 'indeterminate'
                : 'none'
          }
        />

        <TableBody>
          <TableRows
            table={table}
            TableRowProps={TableRowProps}
            rowSelection={rowSelection}
            selectedRowIds={selectedRowIds}
            onSelectRow={onSelectRow}
          />

          {controls.loading && (
            <TableRow>
              <TableCell colSpan={10000} style={{ textAlign: 'center' }}>
                Carregando...
              </TableCell>
            </TableRow>
          )}

          {controls.error && (
            <TableRow>
              <TableCell colSpan={10000} style={{ textAlign: 'center' }}>
                Erro ao carregar registros
              </TableCell>
            </TableRow>
          )}

          {!controls.data.length && (
            <TableRow>
              <TableCell colSpan={10000} style={{ textAlign: 'center' }}>
                Não há registros a serem exibidos
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableView;
