import { Paper, TablePagination } from '@mui/material';
import {
  ColumnDef,
  ColumnOrderState,
  PaginationState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle
} from 'react';

import { TableControls, TableRef, TableRowProps } from './@types';
import TableView from './TableView';

export type InternalTableProps<T extends object> = {
  controls: TableControls<T>;
  columns: ColumnDef<T>[];
  hiddenColumns?: { [key: string]: boolean };
  load: (pageIndex: number, pageSize: number) => void;
  TableRowProps?: TableRowProps<T>;
  columnOrder?: ColumnOrderState;
} & {
  enableRowSelection?: boolean;
  enableMultiRowSelection?: boolean;
  onRowSelectionChange?: (row: T[]) => void;
} & {
  sorting?: SortingState;
  enableMultiSort?: boolean;
  onSortingChange?: (sorting: SortingState) => void;
};

const TableInternal = <T extends object>(
  {
    load,
    controls,
    columns,
    hiddenColumns,
    TableRowProps,
    columnOrder,
    sorting,
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
      <TableView
        table={table}
        controls={controls}
        TableRowProps={TableRowProps}
      />
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

export const DefaultTable = forwardRef(TableInternal) as <T extends object>(
  props: InternalTableProps<T> & { ref?: React.ForwardedRef<TableRef> }
) => ReturnType<typeof TableInternal>;
