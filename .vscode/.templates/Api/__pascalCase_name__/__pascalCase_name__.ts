import {getAuthorizationHeader} from 'api/authorization';
import { IResponse } from "../../api/IResponse";
import { IAuthData } from "../IAuthData";
import Config from "react-native-config";

const MOCK_API = Config.MOCK_API === "true";

export interface I{{pascalCase name}}Request {
  authorisation_code: string;
}

export const {{pascalCase name}} = async (request: I{{pascalCase name}}Request): Promise<IResponse<IAuthData>> => {
  if (MOCK_API) {
    return require("./mock.json");
  }
  try {
    const authHeader = await getAuthorizationHeader();

    const body = { code: request.authorisation_code };

    const response = await fetch("{{pascalCase name}}", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...authHeader,
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
