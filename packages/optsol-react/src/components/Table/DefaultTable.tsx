import { Paper, TablePagination } from '@mui/material';
import {
  ColumnDef,
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState
} from 'react';

import { TableControls, TableRef, TableRowProps } from './@types';
import TableView from './TableView';

export interface InternalTableProps<T extends object> {
  controls: TableControls<T>;
  columns: ColumnDef<T>[];
  hiddenColumns?: { [key: string]: boolean };
  load: (pageIndex: number, pageSize: number) => void;
  TableRowProps?: TableRowProps<T>;
  selectableRows?: boolean;
  selectedRowIds?: Record<string, boolean>;
  onSelectRow?: (rowId: string, isSelected: boolean) => void;
  disableSelectAll?: boolean;
}

const TableInternal = <T extends object>(
  {
    load,
    controls,
    columns,
    hiddenColumns,
    TableRowProps,
    selectableRows = false,
    selectedRowIds = {},
    onSelectRow,
    disableSelectAll = false
  }: Readonly<InternalTableProps<T>>,
  ref: ForwardedRef<TableRef>
) => {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });

  const [localSelectedRowIds, setLocalSelectedRowIds] =
    useState<Record<string, boolean>>(selectedRowIds);

  const table = useReactTable<T>({
    data: controls.data,
    columns,
    state: {
      columnVisibility: hiddenColumns,
      pagination
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true
  });

  const { pageIndex, pageSize } = pagination;

  const handleSelectRow = (rowId: string, isSelected: boolean) => {
    setLocalSelectedRowIds((prevSelected) => ({
      ...prevSelected,
      [rowId]: isSelected
    }));

    if (onSelectRow) {
      onSelectRow(rowId, isSelected);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      refresh: () => load(pageIndex, pageSize)
    }),
    [pageIndex, pageSize, load]
  );

  useEffect(() => {
    load(pageIndex, pageSize);
  }, [load, pageIndex, pageSize]);

  return (
    <Paper sx={{ width: '100%' }}>
      <TableView
        table={table}
        controls={controls}
        TableRowProps={TableRowProps}
        selectableRows={selectableRows}
        selectedRowIds={localSelectedRowIds}
        onSelectRow={handleSelectRow}
        disableSelectAll={disableSelectAll}
      />
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
  props: InternalTableProps<T> & { ref?: React.ForwardedRef<TableRef> }
) => ReturnType<typeof TableInternal>;
