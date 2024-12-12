import {
  TableContainer as MuiTableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow
} from '@mui/material';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table';
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle
} from 'react';

import { TableControls, TableProps, TableRef } from './@types';
import { TableHeaders } from './TableHeaders';
import { TableRows } from './TableRows';

type DefaultTableProps<T extends object> = Omit<
  TableProps<T>,
  'columns' | 'data'
>;

export type InternalTableProps<T extends object> = DefaultTableProps<T> & {
  columns: ColumnDef<T>[];
  controls: TableControls<T>;
  hiddenColumns?: { [key: string]: boolean };
  load: (pageIndex: number, pageSize: number) => void;
};

const TableContainerView = <T extends object>(
  {
    load,
    controls,
    columns,
    hiddenColumns,
    TableRowProps,
    columnOrder,
    sorting,
    renderFooter,
    HeaderProps,
    onSortingChange,
    onRowSelectionChange,
    enableRowSelection,
    enableMultiRowSelection
  }: Readonly<InternalTableProps<T>>,
  ref: ForwardedRef<TableRef>
) => {
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });

  const table = useReactTable<T>({
    columns,
    data: controls.data,
    enableRowSelection,
    enableMultiRowSelection,
    manualPagination: true,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: onSortingChange,
    state: {
      sorting,
      pagination,
      rowSelection,
      columnOrder:
        rowSelection && columnOrder ? ['select', ...columnOrder] : columnOrder,
      columnVisibility: hiddenColumns
    }
  });

  const { pageIndex, pageSize } = pagination;

  useImperativeHandle(
    ref,
    () => ({
      refresh: () => load(pageIndex, pageSize),
      removeSelectedRows: () => setRowSelection({})
    }),
    [pageIndex, pageSize, load]
  );

  useEffect(() => {
    load(pageIndex, pageSize);
  }, [load, pageIndex, pageSize]);

  useEffect(() => {
    const { rows: selectedRows } = table.getSelectedRowModel();
    const rows = selectedRows.map((row) => row.original);

    onRowSelectionChange?.(rows);
  }, [table, onRowSelectionChange, rowSelection]);

  return (
    <Paper sx={{ width: '100%' }}>
      <MuiTableContainer sx={{ maxHeight: 1 }}>
        <Table stickyHeader size="small">
          <TableHeaders
            groups={table.getHeaderGroups()}
            titlePosition={HeaderProps?.titlePosition}
          />

          <TableBody>
            <TableRows table={table} TableRowProps={TableRowProps} />

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

            {!controls.data.length && !controls.error && (
              <TableRow>
                <TableCell colSpan={10000} style={{ textAlign: 'center' }}>
                  Não há registros a serem exibidos
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            {renderFooter && <>{renderFooter(controls.data)}</>}
          </TableFooter>
        </Table>
      </MuiTableContainer>
      <TablePagination
        size="small"
        component="div"
        page={pageIndex}
        rowsPerPage={pageSize}
        count={controls.totalCount}
        rowsPerPageOptions={[5, 10, 25, 50]}
        labelRowsPerPage="Linhas por página"
        onPageChange={(_, page) => {
          setRowSelection({});
          table.setPageIndex(page);
        }}
        onRowsPerPageChange={(e) => {
          const size = e.target.value ? Number(e.target.value) : 10;
          table.setPageSize(size);
        }}
      />
    </Paper>
  );
};

export const TableContainer = forwardRef(TableContainerView) as <
  T extends object
>(
  props: InternalTableProps<T> & { ref?: React.ForwardedRef<TableRef> }
) => ReturnType<typeof TableContainerView>;
