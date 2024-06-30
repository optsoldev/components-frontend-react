/**
 * @deprecated This will be removed soon
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};
