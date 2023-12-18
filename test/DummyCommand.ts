import { ICommand } from "../src/commands/ICommand";

export class DummyCommand<Params = any> implements ICommand<Params> {
  public executing: boolean = false; //simulate this as never executing
  public _callback: (params?: Params) => void;
  public _canExecute: boolean;
  constructor(
    callback: (params?: Params) => void = () => {},
    canExecute: boolean = true,
  ) {
    this._callback = callback;
    this._canExecute = canExecute;
  }
  public async execute(params?: Params): Promise<void> {
    //@ts-ignore comment
    if (this._canExecute && this._callback) {
      await this.onExecute(params);
    }
  }
  protected async onExecute(params?: Params): Promise<void> {
    this._canExecute = false;
    this._callback(params);
  }
  public canExecute(_params?: Params): boolean {
    return this._canExecute;
  }
}
