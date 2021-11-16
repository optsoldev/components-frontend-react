/// <reference types="react" />
import { OptGridAction } from '.';
interface Props<T extends object> {
    actions?: (OptGridAction<T> | ((rowData: T) => OptGridAction<T>))[];
    data: T;
}
export declare const OptGridActionsCell: <T extends object>({ actions, data, }: Props<T>) => JSX.Element;
export {};
