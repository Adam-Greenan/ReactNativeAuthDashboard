import { IAdapter } from "./IAdapter";

export interface IDataAdapter<TResult = any> extends IAdapter<TResult> {
  pending: boolean;
  fill(): void;
}
