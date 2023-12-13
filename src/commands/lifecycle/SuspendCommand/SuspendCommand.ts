import { Command } from "commands/Command";
import { app, hydrate } from "models/App";
import { updateAuthorisation } from "utils/authorisation";

export interface ISuspendCommandParams {}

export class SuspendCommand extends Command<ISuspendCommandParams> {
  protected async onExecute(params?: ISuspendCommandParams): Promise<void> {}

  canExecute(params?: ISuspendCommandParams): boolean {
    return true;
  }
}
