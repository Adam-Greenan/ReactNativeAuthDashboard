import {IResponse} from 'api/IResponse';

const MOCK_API = true;

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: {
    firstname: string;
    lastname: string;
    email: string;
  };
  authenticated: boolean;
}

export const Login = async (
  request: ILoginRequest,
): Promise<IResponse<ILoginResponse>> => {
  if (MOCK_API) {
    return require('./mock.json');
  }
  try {
    const response = await fetch(`login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    let data = undefined;

    if (response.status === 200) {
      data = await response.json();
    }

    return {
      status: response.status,
      message: response.statusText,
      data,
    };
  } catch (err: any) {
    return {
      status: 0,
      message: err.message,
    };
  }
};
