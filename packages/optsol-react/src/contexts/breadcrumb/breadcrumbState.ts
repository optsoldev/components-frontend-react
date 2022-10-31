export type BreadcrumbDictionary = { key: string; value: string | null }[];

export interface BreadcrumbState {
  dictionary: BreadcrumbDictionary;
}

export const BREADCRUMB_INITIAL_STATE: BreadcrumbState = {
  dictionary: [],
};
