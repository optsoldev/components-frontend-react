import React, {
  ForwardedRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  CellProps,
  HeaderProps,
  Hooks,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';

import { OptGridRef, OptInternalGridProps } from './@types';
import OptGridView from './OptGridView';
import * as S from './styles';

interface OptInternalSelectableGridProps<T extends object>
  extends OptInternalGridProps<T> {
  onSelect?: (selectedData: T[]) => void;
}

function Header<T extends object>({
  getToggleAllRowsSelectedProps,
}: HeaderProps<T>) {
  return (
    <S.CustomCheckbox
      {...getToggleAllRowsSelectedProps()}
      onClick={(e: any) => {
        e.stopPropagation();
      }}
    />
  );
}

function Cell<T extends object>({ row }: CellProps<T>) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <S.CustomCheckbox
        {...row.getToggleRowSelectedProps()}
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
}

function OptGridInternal<T extends object>(
  {
    controls,
    options,
    columns,
    hiddenColumns,
    internalColumns,
    actions,
    actionsPosition,
    onRowClick,
    onSelect,
    load,
  }: OptInternalSelectableGridProps<T>,
  ref: ForwardedRef<OptGridRef>
) {
  const loadRef = useRef(load);
  const onSelectRef = useRef(onSelect);

  const selectionHook = useCallback((hooks: Hooks<T>) => {
    hooks.allColumns.push((allColumns) => [
      // Let's make a column for selection
      {
        id: '_selector',
        width: 80,
        maxWidth: 80,
        minWidth: 80,
        align: 'center',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header,
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell,
      },
      ...allColumns,
    ]);
  }, []);

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
    usePagination,
    useRowSelect,
    selectionHook
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
    selectedFlatRows,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = table;

  useImperativeHandle(ref, () => ({
    refresh: () => {
      loadRef.current(pageIndex, pageSize);
    },
  }));

  React.useEffect(() => {
    const selected = selectedFlatRows.map((value) => value.original);
    const isFunction = typeof onSelectRef.current === 'function';

    if (onSelectRef.current && isFunction) onSelectRef.current(selected);
  }, [selectedFlatRows, selectedFlatRows.length]);

  React.useEffect(() => {
    loadRef.current(pageIndex, pageSize);
  }, [pageIndex, pageSize]);

  return (
    <OptGridView
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
      options={options}
    />
  );
}

export const OptSelectableGrid = React.forwardRef(OptGridInternal) as <
  T extends object
>(
  props: OptInternalSelectableGridProps<T> & {
    ref?: React.ForwardedRef<OptGridRef>;
  }
) => ReturnType<typeof OptGridInternal>;
