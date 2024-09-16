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

import {
  SelectionProps,
  TableControls,
  TableRef,
  TableRowProps
} from './@types';
import TableView from './TableView';

export type InternalTableProps<T extends object> = {
  controls: TableControls<T>;
  columns: ColumnDef<T>[];
  hiddenColumns?: { [key: string]: boolean };
  load: (pageIndex: number, pageSize: number) => void;
  TableRowProps?: TableRowProps<T>;
} & SelectionProps<T>;

const TableInternal = <T extends object>(
  {
    load,
    controls,
    columns,
    hiddenColumns,
    TableRowProps,
    rowSelection = false,
    selectedRowIds = {},
    onSelectRow,
    disableMultipleSelection,
    onSelectedRows
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
  const [currentListObject, setCurrentObjectOnList] = useState<T[]>([]);

  const handleSelectRow = (row: T, isSelected: boolean) => {
    const rowId = (row as any).id as string;
    setLocalSelectedRowIds((prevSelected) => ({
      ...prevSelected,
      [rowId]: isSelected
    }));

    if (onSelectRow) {
      onSelectRow((row as any).original, isSelected);
    }
    updateObjectsOnList(row, isSelected);
  };

  const handleSelectAllRows = (rows: T[], isSelected: boolean) => {
    if (isSelected) {
      const transformedRows = rows.map((row: T) => (row as any).original);
      setCurrentObjectOnList([...transformedRows]);
    } else {
      setCurrentObjectOnList([]);
    }
  };

  const removeAllSelectedRows = () => {
    const updatedSelections = currentListObject.reduce(
      (acc, selectedObject) => {
        const rowId = (selectedObject as any).id as string;
        acc[rowId] = false;
        return acc;
      },
      {} as Record<string, boolean>
    );

    const updatedList: T[] = [];

    setCurrentObjectOnList(updatedList);
    setLocalSelectedRowIds(updatedSelections);
  };

  function updateObjectsOnList(object: T, isSelected: boolean) {
    const exists = currentListObject.some(
      (existingObject) =>
        JSON.stringify(existingObject) ===
        JSON.stringify((object as any).original)
    );

    if (exists) {
      if (!isSelected) {
        setCurrentObjectOnList(
          currentListObject.filter(
            (existingObject) =>
              JSON.stringify(existingObject) !==
              JSON.stringify((object as any).original)
          )
        );
      }
    } else {
      if (isSelected) {
        setCurrentObjectOnList([
          ...currentListObject,
          (object as any).original
        ]);
      }
    }
  }

  useEffect(() => {
    if (onSelectedRows) {
      onSelectedRows(currentListObject);
    }
  }, [currentListObject]);

  useImperativeHandle(
    ref,
    () => ({
      refresh: () => load(pageIndex, pageSize),
      removeSelectedRows: removeAllSelectedRows
    }),
    [pageIndex, pageSize, load, removeAllSelectedRows]
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
        rowSelection={rowSelection}
        selectedRowIds={localSelectedRowIds}
        onSelectRow={handleSelectRow}
        disableMultipleSelection={disableMultipleSelection}
        handleSelectAllRows={handleSelectAllRows}
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
