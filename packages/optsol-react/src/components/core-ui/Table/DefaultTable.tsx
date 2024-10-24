import { Paper, TablePagination } from '@mui/material';
import {
  ColumnDef,
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react';

import { TableAction, TableControls, TableOptions, TableRef } from './@types';
import TableView from './TableView';

export interface InternalTableProps<T extends object> {
  controls: TableControls<T>;
  options?: TableOptions;
  actions?: (TableAction<T> | ((rowData: T) => TableAction<T>))[];
  actionsPosition?: 'start' | 'end';
  columns: ColumnDef<T>[];
  hiddenColumns?: { [key: string]: boolean };
  load: (pageIndex: number, pageSize: number) => void;
  ActionsComponent?: React.ElementType;
}

const TableInternal = <T extends object>(
  {
    load,
    controls,
    options,
    columns,
    hiddenColumns,
  }: Readonly<InternalTableProps<T>>,
  ref: ForwardedRef<TableRef>,
) => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable<T>({
    data: controls.data,
    columns,
    state: {
      columnVisibility: hiddenColumns,
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });

  const { pageIndex, pageSize } = pagination;

  useImperativeHandle(
    ref,
    () => ({
      refresh: () => load(pageIndex, pageSize),
    }),
    [pageIndex, pageSize, load],
  );

  useEffect(() => {
    load(pageIndex, pageSize);
  }, [load, pageIndex, pageSize]);

  return (
    <Paper sx={{ width: '100%' }}>
      <TableView table={table} options={options} controls={controls} />
      <TablePagination
        size="small"
        component="div"
        page={pageIndex}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[5, 10, 25, 50]}
        onPageChange={(_, page) => {
          table.setPageIndex(page);
        }}
        onRowsPerPageChange={(e) => {
          const size = e.target.value ? Number(e.target.value) : 10;
          table.setPageSize(size);
        }}
        count={controls.totalCount}
        labelRowsPerPage="Linhas por página"
      />
    </Paper>
  );
};

export const DefaultTable = forwardRef(TableInternal) as <T extends object>(
  props: InternalTableProps<T> & { ref?: React.ForwardedRef<TableRef> },
) => ReturnType<typeof TableInternal>;
