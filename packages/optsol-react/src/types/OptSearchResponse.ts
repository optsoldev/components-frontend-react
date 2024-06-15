/**
 * @deprecated This will be removed soon
 */
export type OptSearchResponse<T> = {
  page: number;
  pageSize: number;
  total: number;
  data: T[];
};
