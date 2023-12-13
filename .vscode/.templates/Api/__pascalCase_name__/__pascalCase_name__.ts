import { IResponse } from "../../api/IResponse";
import { IAuthData } from "../IAuthData";
import Config from "react-native-config";

const MOCK_API = Config.MOCK_API === "true";

export interface I{{pascalCase name}}Request {
  apiUrl: string;
}

export const {{pascalCase name}} = async (request: I{{pascalCase name}}Request): Promise<IResponse<IAuthData>> => {
  if (MOCK_API) {
    return require("./mock.json");
  }
  try {
    const response = await fetch(`${request.apiUrl}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(body),
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
