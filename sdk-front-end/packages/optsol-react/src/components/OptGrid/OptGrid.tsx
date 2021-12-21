import React, { ForwardedRef, useState } from "react";
import { Column } from "react-table";
import {
  OptGridProps,
  OptGridDataRequest,
  OptGridRequest,
  OptGridControls,
} from ".";
import { OptDefaultGrid } from "./OptDefaultGrid";
import { OptSelectableGrid } from "./OptSelectableGrid";
export interface OptGridRef {
  refresh: () => void;
}

const OptGridInternal = <T extends {}>(
  {
    columns,
    data,
    options,
    title,
    actions,
    actionsPosition,
    onRowClick,
    onSelect,
  }: OptGridProps<T>,
  ref: ForwardedRef<OptGridRef>
) => {
  const isRemote = !Array.isArray(data);

  const [controls, setControls] = useState<OptGridControls<T>>({
    totalCount: isRemote ? 0 : data.length,
    pageCount: isRemote ? 0 : Math.ceil(data.length / 10),
    loading: false,
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

  function load(pageIndex: number, pageSize: number) {
    if (isRemote) {
      loadRemote(data as OptGridDataRequest<T>, pageIndex, pageSize);
    } else {
      // todo
      loadLocal(data as T[], pageIndex, pageSize);
    }
  }

  function loadRemote(
    data: OptGridDataRequest<T>,
    pageIndex: number,
    pageSize = 10
  ) {
    const query: OptGridRequest = {
      orderBy: "",
      orderDirection: "asc",
      page: pageIndex,
      pageSize: pageSize,
      search: "",
    };

    setControls({ ...controls, data: [], loading: true });

    data(query)
      .then((result) => {
        setControls({
          ...controls,
          data: result.data,
          totalCount: result.totalCount,
          pageCount: Math.ceil(result.totalCount / pageSize),
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setControls({
          ...controls,
          data: [],
          loading: false,
          error: true,
        });
      });
  }

  function loadLocal(data: T[], pageIndex: number, pageSize: number) {
    const startRow = pageSize * pageIndex;
    const endRow = startRow + pageSize;
    const slicedData = data.slice(startRow, endRow);

    setControls({
      ...controls,
      data: slicedData,
      totalCount: data.length,
      pageCount: Math.ceil(data.length / pageSize),
      loading: false,
      error: false,
    });
  }

  const hiddenColumns = columns
    .map((column) => {
      if (column.hidden) return column.field.toString();
      return "";
    })
    .filter((column) => column !== "");

  const attrs = {
    ref,
    columns,
    hiddenColumns,
    internalColumns,
    options,
    title,
    actions,
    actionsPosition,
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
};

export const OptGrid = React.forwardRef(OptGridInternal) as <T extends {}>(
  props: OptGridProps<T> & { ref?: React.ForwardedRef<OptGridRef> }
) => ReturnType<typeof OptGridInternal>;
