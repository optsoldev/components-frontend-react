/// <reference types="react" />
interface Props {
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    pageCount: number;
    gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
    nextPage: () => void;
    previousPage: () => void;
    setPageSize: (pageSize: number) => void;
    pageIndex: number;
    pageSize: number;
}
export declare const OptGridPagination: ({ canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, pageIndex, pageSize, }: Props) => JSX.Element;
export {};
