import { Command } from "commands/Command";
import { persistStore } from "models/App";

export interface IResumeCommandParams {}

export class ResumeCommand extends Command<IResumeCommandParams> {
  protected async onExecute(): Promise<void> {
    while (persistStore.isRehydrated !== true) {
      return;
    }
  }

  canExecute(): boolean {
    return true;
  }
}
