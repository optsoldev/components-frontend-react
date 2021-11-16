/// <reference types="react" />
import { HeaderGroup } from 'react-table';
import { OptGridColumn } from '.';
interface Props<T extends object> {
    headerGroups: HeaderGroup<T>[];
    columns: OptGridColumn<T>[];
    actionsPosition?: 'start' | 'end';
}
export declare const OptGridHeaders: <T extends object>({ headerGroups, columns, actionsPosition }: Props<T>) => JSX.Element;
export {};
