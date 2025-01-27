import { Checkbox } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import React, { ForwardedRef, useCallback, useMemo, useState } from 'react';

import {
  TableControls,
  TableDataRequest,
  TableProps,
  TableRef,
  TableRequest
} from './@types';
import { TableContainer } from './TableContainer';

function TableInternal<T extends object>(
  {
    data,
    columns,
    columnOrder,
    TableRowProps,
    HeaderProps,
    renderFooter,
    // RowSelectionProps,
    enableRowSelection,
    enableMultiRowSelection,
    onRowSelectionChange,
    // sorting,
    enableMultiSort,
    sorting,
    onSortingChange
  }: TableProps<T>,
  ref: ForwardedRef<TableRef>
) {
  const isRemote = useMemo(() => !Array.isArray(data), [data]);

  const [controls, setControls] = useState<TableControls<T>>({
    totalCount: isRemote ? 0 : data.length,
    pageCount: isRemote ? 0 : Math.ceil(data.length / 10),
    loading: isRemote,
    data: isRemote ? [] : (data as T[]),
    error: false
  });

  const loadRemote = useCallback(
    (remoteData: TableDataRequest<T>, page: number, pageSize = 10) => {
      const query: TableRequest = {
        orderBy: '',
        orderDirection: 'asc',
        page,
        pageSize,
        search: ''
      };

      setControls((previous) => ({
        ...previous,
        loading: true,
        error: false
      }));

      remoteData(query)
        .then((result) => {
          setControls((previous) => ({
            ...previous,
            data: result.data,
            totalCount: result.total,
            pageCount: Math.ceil(result.total / pageSize),
            loading: false,
            error: false
          }));
        })
        .catch(() => {
          setControls((previous) => ({
            ...previous,
            data: [],
            loading: false,
            error: true
          }));
        });
    },
    []
  );

  const loadLocal = useCallback(
    (tableData: T[], pageIndex: number, pageSize: number) => {
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;
      const slicedData = tableData.slice(startRow, endRow);

      setControls((previous) => ({
        ...previous,
        data: slicedData,
        totalCount: tableData.length,
        pageCount: Math.ceil(tableData.length / pageSize),
        loading: false,
        error: false
      }));
    },
    []
  );

  const load = useCallback(
    (pageIndex: number, pageSize: number) => {
      if (!Array.isArray(data)) loadRemote(data, pageIndex, pageSize);
      else loadLocal(data, pageIndex, pageSize);
    },
    [loadLocal, loadRemote, data]
  );

  const hiddenColumns: { [key: string]: boolean } = useMemo(
    () =>
      columns.reduce((acc, cur) => {
        if (cur.field) return { ...acc, [cur.field]: !cur.hidden };
        return acc;
      }, {}),
    [columns]
  );

  const tableColumns = React.useMemo(() => {
    const tableColumns: Array<ColumnDef<T>> = columns.map((column) => ({
      id: column.field ?? column.title,
      header: column.title,
      accessorKey: column.field,
      size: column.width ?? NaN,
      cell: (info) => {
        if (column.render) return column.render(info.row.original);
        return info.getValue();
      }
    }));

    const selectColumn: ColumnDef<T> = {
      id: 'select',
      size: 0,
      header: ({ table }) => (
        <Checkbox
          sx={{ p: 0.5 }}
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          sx={{ p: 0.5 }}
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          indeterminate={row.getIsSomeSelected()}
          onChange={(e, checked) => {
            row.getToggleSelectedHandler()(e);
            onRowSelectionChange?.(row.original, checked);
          }}
        />
      )
    };

    if (enableRowSelection) tableColumns.unshift(selectColumn);

    return tableColumns;
  }, [columns, enableRowSelection, onRowSelectionChange]);

  return (
    <TableContainer
      ref={ref}
      load={load}
      controls={controls}
      columns={tableColumns}
      columnOrder={columnOrder}
      hiddenColumns={hiddenColumns}
      TableRowProps={TableRowProps}
      HeaderProps={HeaderProps}
      enableRowSelection={enableRowSelection}
      enableMultiRowSelection={enableMultiRowSelection}
      sorting={sorting}
      enableMultiSort={enableMultiSort}
      onSortingChange={onSortingChange}
      renderFooter={renderFooter}
    />
  );
}

export const Table = React.forwardRef(TableInternal) as <T extends object>(
  props: TableProps<T> & {
    ref?: React.ForwardedRef<TableRef>;
  }
) => ReturnType<typeof TableInternal>;
