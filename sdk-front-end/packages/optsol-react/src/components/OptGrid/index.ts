import { Column } from "react-table";
import { IconPathColor } from "../../types/IconPathColor";

export { OptGrid } from "./OptGrid";
export type { OptGridRef } from "./OptGrid";

export interface OptGridResponse<T> {
  data: T[];
  page: number;
  totalCount: number;
}

export interface OptGridRequest {
  // filters: Filter<RowData>[];
  page: number;
  pageSize: number;
  search: string;
  orderBy: string;
  orderDirection: "asc" | "desc";
}

export interface OptGridOptions {
  pageSize?: number;
  search?: boolean;
  toolbar?: boolean;
  selection?: boolean;
}

export interface OptGridAction<T> {
  disabled?: boolean;
  icon: IconPathColor; //| JSX.Element;
  isFreeAction?: boolean;
  position?: "auto" | "toolbar" | "toolbarOnSelect" | "row";
  tooltip?: string;
  onClick: (event: any, data: T | T[]) => void;
  hidden?: boolean;
}

type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type IsTuple<T extends ReadonlyArray<any>> = number extends T["length"]
  ? false
  : true;

type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

type Join<K extends string | number, V> = V extends Primitive
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`;

type Path<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKeys<T>]-?: Join<K & string, T[K]>;
      }[TupleKeys<T>]
    : Join<number, V>
  : {
      [K in keyof T]-?: Join<K & string, T[K]>;
    }[keyof T];

// type FieldPath<TFieldValues extends Record<string, any>> = Path<TFieldValues>;

export interface OptGridColumn<T> {
  width?: number;
  title: string;
  field: Path<T>;
  render?: (data: T) => JSX.Element;
  align?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
  hidden?: boolean;
}

export type OptGridDataRequest<T> = (
  query: OptGridRequest
) => Promise<OptGridResponse<T>>;

export interface OptGridProps<T> {
  data: T[] | OptGridDataRequest<T>;
  options?: OptGridOptions;
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  actionsPosition?: "start" | "end";
  headerTitlePosition?: "start" | "center" | "end";
  columns: OptGridColumn<T>[];
  onRowClick?: (data: T) => void;
  onSelect?: (selectedData: T[]) => void;
  title: string;
}

export interface OptGridControls<T> {
  totalCount: number;
  pageCount: number;
  loading: boolean;
  error: boolean;
  data: T[];
}

export interface OptInternalGridProps<T extends object> {
  title: string;
  controls: OptGridControls<T>;
  options?: OptGridOptions;
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  actionsPosition?: "start" | "end";
  headerTitlePosition?: "start" | "center" | "end";
  columns: OptGridColumn<T>[];
  hiddenColumns: string[];
  internalColumns: Column<T>[];
  onRowClick?: (data: T) => void;
  load: (pageIndex: number, pageSize: number) => void;
}
