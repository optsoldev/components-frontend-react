import { PropsWithChildren } from 'react';
export declare type OptActionToolbarProps = {
    title?: string | JSX.Element;
    goBackRoute?: string;
    clearMargin?: boolean;
    background?: string;
    color?: string;
    noBorder?: boolean;
    noPadding?: boolean;
};
export declare const OptActionToolbar: ({ title, children, goBackRoute, clearMargin, background, color, noBorder, noPadding, }: PropsWithChildren<OptActionToolbarProps>) => JSX.Element;
