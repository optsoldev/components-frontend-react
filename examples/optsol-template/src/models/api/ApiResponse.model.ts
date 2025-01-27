export interface APIResponse<T> {
  data: T;
  success: boolean;
  failure: boolean;
  messages: string[];
}
