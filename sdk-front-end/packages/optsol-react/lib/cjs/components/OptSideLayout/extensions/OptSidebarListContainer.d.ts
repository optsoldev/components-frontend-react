import React, { PropsWithChildren } from 'react';
import { OptSidebarListBaseProps } from './OptSidebarListBaseContainer';
interface Props<T> extends OptSidebarListBaseProps {
    data: T[];
    loading?: boolean;
    render: (item: T) => JSX.Element;
    listItemTo: (id: string) => string;
}
export declare const OptSidebarListContainer: <T extends {
    id: Key;
}, Key extends React.Key>({ data, createTo, listItemTo, title, background, borderColor, width, loading, render, goBackRoute, children, header, }: React.PropsWithChildren<Props<T>>) => JSX.Element;
export {};
