import { ColumnDef } from '@tanstack/react-table';
import React, { ForwardedRef, useCallback, useMemo, useState } from 'react';

import {
  TableControls,
  TableDataRequest,
  TableProps,
  TableRef,
  TableRequest
} from './@types';
import { DefaultTable } from './DefaultTable';

function TableInternal<T extends object>(
  {
    columns,
    data,
    TableRowProps,
    selectableRows = false,
    selectedRowIds = {},
    onSelectRow,
    disableSelectAll = false
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

  const internalColumns = React.useMemo(
    (): ColumnDef<T>[] =>
      columns.map((column) => ({
        header: column.title,
        accessorKey: column.field,
        cell: (info) => {
          if (column.render) return column.render(info.row.original);
          return info.getValue();
        },
        ...(column.width && { size: column.width })
      })),
    [columns]
  );

  return (
    <DefaultTable
      ref={ref}
      columns={internalColumns}
      controls={controls}
      hiddenColumns={hiddenColumns}
      load={load}
      TableRowProps={TableRowProps}
      selectableRows={selectableRows}
      selectedRowIds={selectedRowIds}
      onSelectRow={onSelectRow}
      disableSelectAll={disableSelectAll}
    />
  );
}

export const Table = React.forwardRef(TableInternal) as <T extends object>(
  props: TableProps<T> & { ref?: React.ForwardedRef<TableRef> }
) => ReturnType<typeof TableInternal>;
