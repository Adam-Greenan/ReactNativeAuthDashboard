import { makeObservable, observable } from "mobx";

import { Command } from "commands/Command";

export interface ILoginCommandParams {
  email: string;
  password: string;
  remember: boolean;
}

export class LoginCommand extends Command<ILoginCommandParams> {
  public error: string | null = null;

  constructor() {
    super();

    makeObservable(this, {
      error: observable,
    });
  }

  protected async onExecute(params: ILoginCommandParams): Promise<void> {
    this.error = null;

    try {
    } catch (err: any) {
      console.log(err);
    }
  }

  canExecute(params: ILoginCommandParams): boolean {
    if (params.email && params.password) {
      return true;
    }
    return false;
  }
}
