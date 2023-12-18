import { makeObservable, observable } from "mobx";

import { Login } from "api/Login/Login";
import { Command } from "commands/Command";
import { app } from "models/App";
import { navigation } from "services/navigation";
import { isValidEmail } from "utils/helper";

export interface ILoginCommandParams {
  email: string;
  password: string;
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
    console.log("here1");
    if (!isValidEmail(params.email)) {
      this.error = "Please enter a valid email.";
      return;
    }

    if (params.password.length < 6) {
      this.error = "Password must be at least 6 characters.";
      return;
    }

    try {
      const loginResponse = await Login({
        email: params.email,
        password: params.password,
      });

      if (loginResponse.status !== 200) {
        app.setAuthenticated(false);

        this.error = "Something went wrong, please try again later.";
        return;
      }

      if (
        loginResponse.data &&
        loginResponse.data.user &&
        loginResponse.data.user.firstName &&
        loginResponse.data.user.lastName
      ) {
        app.setAuthenticated(true);
        app.setUser({
          firstName: loginResponse.data.user.firstName,
          lastName: loginResponse.data.user.lastName,
        });
      }

      navigation.navigate("DashboardScreen");
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
