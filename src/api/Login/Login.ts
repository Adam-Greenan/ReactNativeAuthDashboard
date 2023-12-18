import { IResponse } from "../../api/IResponse";
import { IAuthData } from "../IAuthData";
import Config from "react-native-config";

const MOCK_API = "true";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: {
    firstName: string;
    lastName: string;
  };
}

export const Login = async (
  request: ILoginRequest,
): Promise<IResponse<ILoginResponse>> => {
  if (MOCK_API) {
    return require("./mock.json");
  }
  try {
    const body = { email: request.email, password: request.password };

    const response = await fetch("Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
