import { ICommand } from "./ICommand";

export interface ICommandExecutor<Params = any> {
  command?: ICommand<Params>;
  commandParams?: Partial<Params>;
}

export const executeCommand = async <T = any>(
  command: ICommand<T>,
  params: T,
): Promise<void> => {
  if (command.canExecute(params)) {
    await command.execute(params);
  }
};
