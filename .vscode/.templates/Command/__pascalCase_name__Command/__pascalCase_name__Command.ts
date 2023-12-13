import { Command } from "commands/Command";
import { NotImplementedError } from "errors/NotImplementedError";

export interface I{{pascalCase name}}CommandParams {}

export class {{pascalCase name}}Command extends Command<I{{pascalCase name}}CommandParams> {

  protected async onExecute(params?:  I{{pascalCase name}}CommandParams): Promise<void> {
    throw new NotImplementedError("{{pascalCase name}}Command not implemented.");
  }

  canExecute(params?: I{{pascalCase name}}CommandParams): boolean {
    return true;
  }
}
