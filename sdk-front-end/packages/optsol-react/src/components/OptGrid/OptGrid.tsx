import React, { ForwardedRef, useImperativeHandle, useState } from "react";
import { Column, usePagination, useTable } from "react-table";
import { OptGridDataRequest, OptGridProps, OptGridRequest } from ".";
import { OptGridHeaders } from "./OptGridHeaders";
import { OptGridPagination } from "./OptGridPagination";
import { OptGridRows } from "./OptGridRows";
import * as S from "./styles";

interface OptGridControls<T> {
  totalCount: number;
  pageCount: number;
  loading: boolean;
  error: boolean;
  data: T[];
}

export interface OptGridRef {
  refresh: () => void;
}

const OptGridInternal = <T extends object>(
  {
    columns,
    data,
    options,
    onRowClick,
    title,
    actions,
    actionsPosition,
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

  const table = useTable<T>(
    {
      columns: internalColumns,
      data: controls.data,
      initialState: { pageIndex: 0, pageSize: options?.pageSize ?? 10 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controls.pageCount,
    },
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

  function loadRemote(data: OptGridDataRequest<T>) {
    const query: OptGridRequest = {
      orderBy: "",
      orderDirection: "asc",
      page: pageIndex,
      pageSize: pageSize ?? 10,
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

  function loadLocal(data: T[]) {
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

  function load() {
    if (isRemote) {
      loadRemote(data as OptGridDataRequest<T>);
    } else {
      // todo
      loadLocal(data as T[]);
    }
  }

  useImperativeHandle(ref, () => ({
    refresh: () => {
      load();
    },
  }));

  React.useEffect(() => {
    console.log("useEffect");
    load();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, pageSize]);

  return (
    <S.GridContainer className="opt-grid">
      <S.Title>{title}</S.Title>

      <div className="tableWrap">
        <S.StyledTable {...getTableProps()}>
          <OptGridHeaders
            headerGroups={headerGroups}
            columns={columns}
            actionsPosition={actionsPosition}
          />

          <tbody {...getTableBodyProps()}>
            <OptGridRows
              columns={columns}
              onRowClick={onRowClick}
              page={page}
              prepareRow={prepareRow}
              actions={actions}
              actionsPosition={actionsPosition}
            />

            {controls.loading && (
              <tr>
                <td colSpan={10000} style={{ textAlign: "center" }}>
                  Carregando...
                </td>
              </tr>
            )}

            {controls.error && (
              <tr>
                <td colSpan={10000} style={{ textAlign: "center" }}>
                  Erro ao carregar registros
                </td>
              </tr>
            )}
          </tbody>
        </S.StyledTable>
      </div>

      <OptGridPagination
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
      />
    </S.GridContainer>
  );
};

export const OptGrid = React.forwardRef(OptGridInternal) as <T extends object>(
  props: OptGridProps<T> & { ref?: React.ForwardedRef<OptGridRef> }
) => ReturnType<typeof OptGridInternal>;
