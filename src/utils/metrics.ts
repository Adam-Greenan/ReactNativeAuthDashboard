import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

export function isIPhone(): boolean {
  return Platform.OS === "ios";
}

export function isIPhoneWithNotch(): boolean {
  return Platform.OS === "ios" && DeviceInfo.hasNotch();
}

export interface IDeviceValues<T> {
  iPhoneWithNotch: T;
  iPhone: T;
  android: T;
}

export function switchDeviceValues<T>(values: IDeviceValues<T>): T {
  return isIPhoneWithNotch()
    ? values.iPhoneWithNotch
    : isIPhone()
    ? values.iPhone
    : values.android;
}
export const IOS_STATUSBAR_SIZE = 20;
export const IOSX_STATUSBAR_SIZE = 44;
export const IOS_INSETS_TOP = 64;
export const IOSX_INSETS_TOP = 48;
export const IOSX_INSETS_BOTTOM = 34;
export const ANDROID_STATUSBAR_HEIGHT = 24;
export const ANDROID_STATUSBAR_SIZE = 0;
