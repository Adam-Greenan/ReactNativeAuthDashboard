export interface ICommand<Params = any> {
  executing: boolean;
  execute(params?: Params): Promise<void>;
  canExecute(params?: Params): boolean;
}
