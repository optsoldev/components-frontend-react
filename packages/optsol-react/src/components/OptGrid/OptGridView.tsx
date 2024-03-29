import {
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
  TablePropGetter,
  TableProps,
} from 'react-table';
import { CSSObject } from 'styled-components';

import {
  OptGridAction,
  OptGridColumn,
  OptGridControls,
  OptGridOptions,
} from './@types';
import { OptGridHeaders } from './OptGridHeaders';
import { OptGridPagination } from './OptGridPagination';
import { OptGridRows } from './OptGridRows';
import * as S from './styles';

interface OptGridViewProps<T extends object> {
  title?: string;
  getTableProps: (propGetter?: TablePropGetter<T>) => TableProps;
  headerGroups: HeaderGroup<T>[];
  columns: OptGridColumn<T>[];
  actionsPosition?: 'start' | 'end';
  getTableBodyProps: (propGetter?: TableBodyPropGetter<T>) => TableBodyProps;
  onRowClick?: (data: T) => void;
  page: Row<T>[];
  prepareRow: (row: Row<T>) => void;
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  controls: OptGridControls<T>;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: number[];
  pageCount: number;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
  pageIndex: number;
  pageSize: number;
  headerTitlePosition?: 'start' | 'center' | 'end';
  options?: OptGridOptions;
  headerStyle?: CSSObject;
  cellStyle?: CSSObject;
  rowStyle?: CSSObject;
}

function OptGridView<T extends object>({
  title,
  cellStyle,
  rowStyle,
  getTableProps,
  headerGroups,
  columns,
  actionsPosition,
  getTableBodyProps,
  onRowClick,
  page,
  prepareRow,
  actions,
  controls,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  headerStyle,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
  headerTitlePosition,
  options,
}: OptGridViewProps<T>) {
  return (
    <S.GridContainer className="opt-grid">
      <div className="tableWrap">
        <S.StyledTable
          $showBorderRadius={!title}
          $headerStyle={headerStyle}
          $cellStyle={cellStyle}
          $rowStyle={rowStyle}
          {...getTableProps()}
        >
          <OptGridHeaders
            groups={headerGroups}
            actionsPosition={actionsPosition}
            titlePosition={headerTitlePosition}
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
                <td colSpan={10000} style={{ textAlign: 'center' }}>
                  Carregando...
                </td>
              </tr>
            )}

            {controls.error && (
              <tr>
                <td colSpan={10000} style={{ textAlign: 'center' }}>
                  Erro ao carregar registros
                </td>
              </tr>
            )}

            {!controls.data.length && (
              <tr>
                <td colSpan={10000} style={{ textAlign: 'center' }}>
                  Não há registros a serem exibidos
                </td>
              </tr>
            )}

            {options?.bottomElement && (
              <tr role="row">
                <td
                  role="cell"
                  colSpan={10000}
                  style={{ textAlign: 'end', padding: '18px 24px' }}
                >
                  {options.bottomElement}
                </td>
              </tr>
            )}
            <tr role="row" />
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
}

export default OptGridView;
