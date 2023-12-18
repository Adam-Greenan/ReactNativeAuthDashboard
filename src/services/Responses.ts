// import { string } from "mobx-state-tree/dist/internal";
// import * as Keychain from "react-native-keychain";
export type Result = "SUCCESS" | "ERROR";

export interface GeneralResponse {
  action: Result;
  reason?: any;
}
