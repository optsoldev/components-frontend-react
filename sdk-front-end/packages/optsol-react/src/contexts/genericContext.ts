export interface GenericContext<T, P = {}> {
  type: T;
  payload?: P;
}
