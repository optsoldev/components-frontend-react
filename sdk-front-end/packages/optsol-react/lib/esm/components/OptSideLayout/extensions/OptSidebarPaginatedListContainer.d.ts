import { PropsWithChildren } from 'react';
import { OptSearchResponse } from '../../../types';
import { OptSidebarListBaseProps } from './OptSidebarListBaseContainer';
interface Props<T> extends OptSidebarListBaseProps {
    render: (item: T) => JSX.Element;
    listItemTo: (id: string) => string;
    load: (search: string, page: number, pageSize: number) => Promise<OptSearchResponse<T>>;
    pageSize?: number;
    onError?: (error: string) => void;
}
export declare const OptSidebarPaginatedListContainer: <T extends {
    id: Key;
}, Key extends import("react").Key>({ createTo, listItemTo, title, background, borderColor, width, goBackRoute, render, load, pageSize, onError, header, }: PropsWithChildren<Props<T>>) => JSX.Element;
export {};
