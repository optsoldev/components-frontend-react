import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

export interface TableRef {
  refresh: () => void;
}
export interface TableResponse<T> {
  data: T[];
  total: number;
}

export interface TableRequest {
  page: number;
  pageSize: number;
  search: string;
  orderBy: string;
  orderDirection: 'asc' | 'desc';
}

export interface TableOptions {
  pageIndex?: number;
  pageSize?: number;
  search?: boolean;
  toolbar?: boolean;
  selection?: boolean;
  bottomElement?: React.ReactNode;
  headerBgColor?: string;
}

export interface TableAction<T> {
  disabled?: boolean;
  icon: JSX.Element;
  isFreeAction?: boolean;
  position?: 'auto' | 'toolbar' | 'toolbarOnSelect' | 'row';
  tooltip?: string;
  onClick: (event: any, data: T | T[]) => void;
  hidden?: boolean;
}

type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
  ? false
  : true;

type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

type Join<K extends string | number, V> = V extends Primitive
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`;

type Path<T> =
  T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
      ? {
          [K in TupleKeys<T>]-?: Join<K & string, T[K]>;
        }[TupleKeys<T>]
      : Join<number, V>
    : {
        [K in keyof T]-?: Join<K & string, T[K]>;
      }[keyof T];

// type FieldPath<TFieldValues extends Record<string, any>> = Path<TFieldValues>;

export interface TableColumn<T> {
  width?: number;
  title: string;
  field?: Path<T>;
  render?: (data: T) => JSX.Element;
  align?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'match-parent';
  hidden?: boolean;
}

export type TableDataRequest<T> = (
  query: TableRequest,
) => Promise<TableResponse<T>>;

export interface TableProps<T> {
  data: T[] | TableDataRequest<T>;
  options?: TableOptions;
  columns: TableColumn<T>[];
}

export interface TableControls<T> {
  totalCount: number;
  pageCount: number;
  loading: boolean;
  error: boolean;
  data: T[];
}

export interface InternalTableProps<T extends object> {
  controls: TableControls<T>;
  options?: TableOptions;
  actions?: (TableAction<T> | ((rowData: T) => TableAction<T>))[];
  actionsPosition?: 'start' | 'end';
  columns: ColumnDef<T>[];
  hiddenColumns?: string[];
  onRowClick?: (data: T) => void;
  ActionsComponent?: React.ComponentType;
}
