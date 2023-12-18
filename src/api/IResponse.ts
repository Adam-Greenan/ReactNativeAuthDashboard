export interface IResponse<T> {
  action: string;
  status?: number;
  message?: string;
  data?: T;
}
