export declare type BreadcrumbDictionary = {
    key: string;
    value: string | null;
}[];
export interface BreadcrumbState {
    dictionary: BreadcrumbDictionary;
}
export declare const BREADCRUMB_INITIAL_STATE: BreadcrumbState;
