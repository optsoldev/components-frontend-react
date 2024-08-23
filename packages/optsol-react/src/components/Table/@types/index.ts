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
  query: TableRequest
) => Promise<TableResponse<T>>;

export interface TableRowProps<T> {
  onClick?: (value: T, event?: React.MouseEvent<HTMLTableRowElement>) => void;
}

export type SelectionProps<T> = {
  rowSelection?: boolean;
  selectedRowIds?: Record<string, boolean>;
  onSelectRow?: (row: T, isSelected: boolean) => void;
  onSelectedRows?: (row: T[]) => void;
  disableMultipleSelection?: boolean;
} & {
  rowSelection?: boolean;
  selectedRowIds?: Record<string, boolean>;
  onSelectRow?: (row: T, isSelected: boolean) => void;
  onSelectedRows?: (row: T[]) => void;
  disableMultipleSelection?: never | boolean;
};

export type TableProps<T> = {
  data: T[] | TableDataRequest<T>;
  columns: TableColumn<T>[];
  TableRowProps?: TableRowProps<T>;
} & SelectionProps<T>;

export interface TableControls<T> {
  totalCount: number;
  pageCount: number;
  loading: boolean;
  error: boolean;
  data: T[];
}
