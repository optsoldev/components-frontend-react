import { Column } from 'react-table';
import { IconPathColor } from '../../types/IconPathColor';

export { OptGrid } from './OptGrid';
export type { OptGridRef } from './OptGrid';

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
  orderDirection: 'asc' | 'desc';
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
  position?: 'auto' | 'toolbar' | 'toolbarOnSelect' | 'row';
  tooltip?: string;
  onClick: (event: any, data: T | T[]) => void;
  hidden?: boolean;
}

export interface OptGridColumn<T> {
  width?: number;
  title: string;
  field: keyof T;
  render?: (data: T) => JSX.Element;
  align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}

export type OptGridDataRequest<T> = (query: OptGridRequest) => Promise<OptGridResponse<T>>;

export interface OptGridProps<T> {
  data: T[] | OptGridDataRequest<T>;
  options?: OptGridOptions;
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  actionsPosition?: 'start' | 'end';
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
  actionsPosition?: 'start' | 'end';
  columns: OptGridColumn<T>[];
  internalColumns:  Column<T>[];
  onRowClick?: (data: T) => void;
  load: (pageIndex: number,  pageSize: number) => void
}
