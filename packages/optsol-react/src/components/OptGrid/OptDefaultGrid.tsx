import React, { ForwardedRef, useEffect, useImperativeHandle } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';

import { OptGridRef, OptInternalGridProps } from './@types';
import OptGridView from './OptGridView';

function OptGridInternal<T extends object>(
  {
    title,
    controls,
    options,
    columns,
    hiddenColumns,
    internalColumns,
    actions,
    actionsPosition,
    headerTitlePosition,
    onRowClick,
    load,
  }: OptInternalGridProps<T>,
  ref: ForwardedRef<OptGridRef>
) {
  const table = useTable<T>(
    {
      columns: internalColumns,
      data: controls.data,
      autoResetPage: false,
      initialState: {
        pageIndex: 0,
        pageSize: options?.pageSize ?? 10,
        hiddenColumns,
      }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controls.pageCount,
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = table;

  useImperativeHandle(
    ref,
    () => ({
      refresh: () => {
        load(pageIndex, pageSize);
      },
    }),
    [pageIndex, pageSize, load]
  );

  useEffect(() => {
    load(pageIndex, pageSize);
  }, [pageIndex, pageSize, load]);

  return (
    <OptGridView
      title={title}
      getTableProps={getTableProps}
      headerGroups={headerGroups}
      columns={columns}
      actionsPosition={actionsPosition}
      getTableBodyProps={getTableBodyProps}
      onRowClick={onRowClick}
      page={page}
      prepareRow={prepareRow}
      actions={actions}
      controls={controls}
      canPreviousPage={canPreviousPage}
      canNextPage={canNextPage}
      pageOptions={pageOptions}
      pageCount={pageCount}
      gotoPage={gotoPage}
      nextPage={nextPage}
      previousPage={previousPage}
      setPageSize={setPageSize}
      pageIndex={pageIndex}
      pageSize={pageSize}
      headerTitlePosition={headerTitlePosition}
      options={options}
    />
  );
}

export const OptDefaultGrid = React.forwardRef(OptGridInternal) as <
  T extends object
>(
  props: OptInternalGridProps<T> & { ref?: React.ForwardedRef<OptGridRef> }
) => ReturnType<typeof OptGridInternal>;
