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
  const isRemote = !Array.isArray(data);
  const tableData = useMemo(() => {
    console.log('useMemo', data);
    return isRemote ? [] : data;
  }, [data, isRemote]);

  const [controls, setControls] = useState<OptGridControls<T>>({
    totalCount: isRemote ? 0 : data.length,
    pageCount: isRemote ? 0 : Math.ceil(data.length / 10),
    loading: isRemote,
    data: tableData,
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

      if (!controls.loading || controls.data.length > 0)
        setControls((previous) => ({
          ...previous,
          data: [],
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
    (localData: T[], pageIndex: number, pageSize: number) => {
      const startRow = pageSize * pageIndex;
      const endRow = startRow + pageSize;
      const slicedData = localData.slice(startRow, endRow);
      console.log('Exec localData', localData, pageIndex, pageSize);
      setControls((previous) => ({
        ...previous,
        data: slicedData,
        totalCount: localData.length,
        pageCount: Math.ceil(localData.length / pageSize),
        loading: false,
        error: false,
      }));
    },
    []
  );

  const load = useCallback(
    (pageIndex: number, pageSize: number) => {
      console.log(pageIndex, pageSize);
      console.log(data, isRemote);
      if (isRemote) {
        loadRemote(data, pageIndex, pageSize);
      } else {
        // todo
        loadLocal(tableData, pageIndex, pageSize);
      }
    },
    [tableData, isRemote, loadLocal, loadRemote, data]
  );

  const hiddenColumns = columns
    .filter((column) => column.hidden)
    .map((column) => column.field.toString());

  const attrs = {
    ref,
    columns,
    hiddenColumns,
    internalColumns,
    options,
    title,
    actions,
    actionsPosition,
    headerTitlePosition,
    controls,
    load,
    onRowClick,
    onSelect: options?.selection ? onSelect : undefined,
  };

  return (
    <>
      {options?.selection && <OptSelectableGrid {...attrs} />}
      {!options?.selection && <OptDefaultGrid {...attrs} />}
    </>
  );
}

export const OptGrid = React.forwardRef(OptGridInternal) as <T extends {}>(
  props: OptGridProps<T> & { ref?: React.ForwardedRef<OptGridRef> }
) => ReturnType<typeof OptGridInternal>;
