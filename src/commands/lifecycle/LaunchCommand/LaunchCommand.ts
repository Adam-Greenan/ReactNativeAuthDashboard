import { Command } from "commands/Command";
import { persistStore } from "models/App";

export interface ILaunchCommandParams {}

export class LaunchCommand extends Command<ILaunchCommandParams> {
  protected async onExecute(): Promise<void> {
    while (persistStore.isRehydrated !== true) {
      return;
    }
  }

  canExecute(): boolean {
    return true;
  }
}
