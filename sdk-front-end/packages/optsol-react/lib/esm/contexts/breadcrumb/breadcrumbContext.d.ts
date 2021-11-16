import React from 'react';
import { BreadcrumbState } from './breadcrumbState';
declare type BreadcrumbProps = {
    children: React.ReactNode;
};
declare function BreadcrumbProvider({ children }: BreadcrumbProps): JSX.Element;
declare function useBreadcrumb(): {
    state: BreadcrumbState;
    setDictionary: (...arrayDictonary: [string, string | null][]) => void;
    resetValues: () => void;
};
export { BreadcrumbProvider, useBreadcrumb };
