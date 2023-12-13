import {Command} from 'commands/Command';
import {isValidEmail} from '../../utils/helper';
import {makeObservable, observable} from 'mobx';
import { Login } from '../../api/Login/Login';
import { app } from '../../models/App';
import { navigation } from '../../services/navigation';

export interface ILoginCommandParams {
  email: string;
  password: string;
}

export class LoginCommand extends Command<ILoginCommandParams> {
  public error: string | null = null;

  constructor() {
    // TODO: [mobx-undecorate] verify the constructor arguments and the arguments of this automatically generated super call
    super();

    makeObservable(this, {
      error: observable,
    });
  }

  protected async onExecute(params?: ILoginCommandParams): Promise<void> {
    this.error = null;
    const {email, password} = params;

    if (!isValidEmail(email)) {
      this.error = 'Please enter a valid email address';
      return;
    }

    if (password.length < 8) {
      this.error = 'Password must be at least 8 characters';
      return;
    }

    try {
      const loginResponse = await Login({ email, password })

      if (loginResponse.status !== 200) {
        console.log('LoginCommand failed:', loginResponse.data);
        this.error = "Something went wrong, please try again later."
        return;
      }

      if (!loginResponse.data.authenticated) {
        console.log('LoginCommand failed:', loginResponse.data);
        this.error = "Invalid email or password."
        return;
      }

      app.setAuth(true);
      app.setUser(loginResponse.data.user);

      navigation.navigate("DashboardScreen")
    } catch (err) {
      console.log('LoginCommand error:', err);
    }
  }

  canExecute(params?: ILoginCommandParams): boolean {
    if (params.email && params.password) {
      return true;
    }
    return false;
  }
}
