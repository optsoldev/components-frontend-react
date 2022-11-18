import React, { ForwardedRef, useCallback, useMemo, useState } from 'react';
import { Column } from 'react-table';
import {
  OptGridControls,
  OptGridDataRequest,
  OptGridProps,
  OptGridRef,
  OptGridRequest,
} from './@types';
import { OptDefaultGrid } from './OptDefaultGrid';
import { OptSelectableGrid } from './OptSelectableGrid';

function OptGridInternal<T extends {}>(
  {
    columns,
    data,
    options,
    title,
    actions,
    actionsPosition,
    headerTitlePosition,
    onRowClick,
    onSelect,
  }: OptGridProps<T>,
  ref: ForwardedRef<OptGridRef>
) {
  const isRemote = useMemo(() => !Array.isArray(data), [data]);

  const [controls, setControls] = useState<OptGridControls<T>>({
    totalCount: isRemote ? 0 : data.length,
    pageCount: isRemote ? 0 : Math.ceil(data.length / 10),
    loading: isRemote,
    data: isRemote ? [] : (data as T[]),
    error: false,
  });

  const internalColumns = React.useMemo<Array<Column<T>>>(
    () =>
      columns.map((x) => {
        const transformedColumn: Readonly<Column<T>> = {
          Header: x.title,
          accessor: x.field as keyof T extends never
            ? Extract<keyof T, string>
            : never,
          minWidth: x.width,
          width: x.width,
          maxWidth: x.width,
        };

        return transformedColumn;
      }),
    [columns]
  );

  const loadRemote = useCallback(
    (remoteData: OptGridDataRequest<T>, pageIndex: number, pageSize = 10) => {
      const query: OptGridRequest = {
        orderBy: '',
        orderDirection: 'asc',
        page: pageIndex,
        pageSize,
        search: '',
      };

      console.log('Remote', controls.data.length, controls.loading);

      if (!controls.loading || controls.data.length > 0)
        setControls((previous) => ({
          ...previous,
          loading: true,
        }));

      remoteData(query)
        .then((result) => {
          setControls((previous) => ({
            ...previous,
            data: result.data,
            totalCount: result.totalCount,
            pageCount: Math.ceil(result.totalCount / pageSize),
            loading: false,
            error: false,
          }));
        })
        .catch(() => {
          setControls((previous) => ({
            ...previous,
            data: [],
            loading: false,
            error: true,
          }));
        });
    },
    [controls.data.length, controls.loading]
  );

  const loadLocal = useCallback(
    (tableData: T[], pageIndex: number, pageSize: number) => {
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;

      const slicedData = tableData.slice(startRow, endRow);

      console.log(
        'Exec data',
        tableData.length,
        pageIndex,
        pageSize,
        startRow,
        endRow
      );
      setControls((previous) => {
        console.log('set Controls');

        return {
          ...previous,
          data: slicedData,
          totalCount: tableData.length,
          pageCount: Math.ceil(tableData.length / pageSize),
          loading: false,
          error: false,
        };
      });
    },
    []
  );

  const load = useCallback(
    (pageIndex: number, pageSize: number) => {
      console.log('load', data, pageIndex, pageSize);
      if (!Array.isArray(data)) loadRemote(data, pageIndex, pageSize);
      else loadLocal(data, pageIndex, pageSize);
    },
    [loadLocal, loadRemote, data]
  );

  const hiddenColumns = useMemo(
    () =>
      columns
        .filter((column) => column.hidden)
        .map((column) => column.field.toString()),
    [columns]
  );

  // const attrs = {
  //   ref,
  //   columns,
  //   hiddenColumns,
  //   internalColumns,
  //   options,
  //   title,
  //   actions,
  //   actionsPosition,
  //   headerTitlePosition,
  //   controls,
  //   load,
  //   onRowClick,
  //   onSelect: options?.selection ? onSelect : undefined,
  // };

  console.log('render Optgrid ');
  return (
    <>
      {options?.selection && (
        <OptSelectableGrid
          ref={ref}
          columns={columns}
          hiddenColumns={hiddenColumns}
          internalColumns={internalColumns}
          options={options}
          title={title}
          actions={actions}
          actionsPosition={actionsPosition}
          headerTitlePosition={headerTitlePosition}
          controls={controls}
          load={load}
          onRowClick={onRowClick}
          onSelect={options?.selection ? onSelect : undefined}
        />
      )}
      {!options?.selection && (
        <OptDefaultGrid
          ref={ref}
          columns={columns}
          hiddenColumns={hiddenColumns}
          internalColumns={internalColumns}
          options={options}
          title={title}
          actions={actions}
          actionsPosition={actionsPosition}
          headerTitlePosition={headerTitlePosition}
          controls={controls}
          load={load}
          onRowClick={onRowClick}
        />
      )}
    </>
  );
}

export const OptGrid = React.forwardRef(OptGridInternal) as <T extends {}>(
  props: OptGridProps<T> & { ref?: React.ForwardedRef<OptGridRef> }
) => ReturnType<typeof OptGridInternal>;
