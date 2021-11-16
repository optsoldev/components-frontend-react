import React, { ForwardedRef } from "react";
import { OptGridProps } from ".";
export interface OptGridRef {
    refresh: () => void;
}
declare const OptGridInternal: <T extends object>({ columns, data, options, onRowClick, title, actions, actionsPosition, }: OptGridProps<T>, ref: ForwardedRef<OptGridRef>) => JSX.Element;
export declare const OptGrid: <T extends object>(props: OptGridProps<T> & {
    ref?: React.ForwardedRef<OptGridRef> | undefined;
}) => ReturnType<typeof OptGridInternal>;
export {};
