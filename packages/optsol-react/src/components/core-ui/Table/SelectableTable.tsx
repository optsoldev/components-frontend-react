import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

import { InternalTableProps, TableRef } from './@types';
import TableView from './TableView';

interface InternalSelectableTableProps<T extends object>
  extends InternalTableProps<T> {
  onSelect?: (selectedData: T[]) => void;
}

function TableInternal<T extends object>({
  controls,
  options,
  columns,
}: Readonly<InternalSelectableTableProps<T>>) {
  // const loadRef = useRef(load);
  // const onSelectRef = useRef(onSelect);
  const [rowSelection, setRowSelection] = React.useState({});

  /*   const selectionHook = useCallback((hooks: Hooks<T>) => {
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
        Cell
      },
      ...allColumns
    ]);
  }, []); */

  const table = useReactTable<T>({
    data: controls.data,
    columns,
    state: {
      rowSelection,
    },
    // Pipeline
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  });

  return <TableView table={table} options={options} controls={controls} />;
}

export const SelectableTable = React.forwardRef(TableInternal) as <
  T extends object,
>(
  props: InternalSelectableTableProps<T> & {
    ref?: React.ForwardedRef<TableRef>;
  },
) => ReturnType<typeof TableInternal>;
