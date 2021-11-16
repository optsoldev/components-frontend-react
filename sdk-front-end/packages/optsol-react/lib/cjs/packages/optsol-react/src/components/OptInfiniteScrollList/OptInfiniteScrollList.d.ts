/// <reference types="react" />
import { OptSearchResponse } from "../../types";
export interface OptInfiniteScrollListProps<T> {
    carregar: (search: string, page: number, pageSize: number) => Promise<OptSearchResponse<T>>;
    renderItem: (item: T, index: number) => JSX.Element;
    pageSize?: number;
    semPesquisa?: boolean;
    onError?: (error: string) => void;
}
export declare const OptInfiniteScrollList: <T extends object>({ carregar, renderItem, pageSize, semPesquisa, onError, }: OptInfiniteScrollListProps<T>) => JSX.Element;
