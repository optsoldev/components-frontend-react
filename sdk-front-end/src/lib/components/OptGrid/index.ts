import { QueryResult, Query, Action, Column, MaterialTableProps, Options } from 'material-table';

export { OptGrid } from './OptGrid';

export interface OptGridResponse<T extends object> extends Promise<QueryResult<T>> {}

export interface OptGridRequest<T extends object> extends Query<T> {}

export interface OptGridOptions<T extends object> extends Options<T> {}

export interface OptGridAction<T extends object> extends Action<T> {}

export interface OptGridColumn<T extends object> extends Column<T> {}

export interface OptGridProps<T extends object>
  extends Omit<Omit<Omit<MaterialTableProps<T>, 'icons'>, 'columns'>, 'localization'> {
  data: T[] | ((query: OptGridRequest<T>) => OptGridResponse<T>);
  options?: OptGridOptions<T>;
  actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
  actionsPosition?: 'start' | 'end';
  columns: OptGridColumn<T>[];
}
