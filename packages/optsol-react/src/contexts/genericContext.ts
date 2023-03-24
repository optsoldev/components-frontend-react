export interface GenericContext<T, P = object> {
  type: T;
  payload?: P;
}
