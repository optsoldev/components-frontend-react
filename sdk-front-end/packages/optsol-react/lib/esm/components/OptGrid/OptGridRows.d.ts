/// <reference types="react" />
import { Row } from 'react-table';
import { OptGridAction, OptGridColumn } from '.';
interface Props<T extends object> {
    actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
    actionsPosition?: 'start' | 'end';
    columns: OptGridColumn<T>[];
    onRowClick: (data: T) => void;
    page: Row<T>[];
    prepareRow: (row: Row<T>) => void;
}
export declare const OptGridRows: <T extends object>({ page, prepareRow, onRowClick, actions, actionsPosition, columns }: Props<T>) => JSX.Element;
export {};
