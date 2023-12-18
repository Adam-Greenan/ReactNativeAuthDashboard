import React, { FC } from "react";

import { View, ViewStyle, StyleSheet } from "react-native";

import {
  switchDeviceValues,
  IOSX_STATUSBAR_SIZE,
  ANDROID_STATUSBAR_SIZE,
  IOS_STATUSBAR_SIZE,
  IOSX_INSETS_TOP,
} from "../../src/utils/metrics";

export interface IStorybookSafeAreaProps {
  style?: ViewStyle;
}
export const StorybookSafeArea: FC<IStorybookSafeAreaProps> = (props) => {
  const style = Object.assign({}, props.style);

  return <View style={[styles.container, style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: switchDeviceValues({
      iPhoneWithNotch: -IOSX_INSETS_TOP,
      android: -ANDROID_STATUSBAR_SIZE,
      iPhone: -IOS_STATUSBAR_SIZE,
    }),
    marginBottom: switchDeviceValues({
      iPhoneWithNotch: -IOSX_STATUSBAR_SIZE,
      android: 0,
      iPhone: 0,
    }),
  },
});
