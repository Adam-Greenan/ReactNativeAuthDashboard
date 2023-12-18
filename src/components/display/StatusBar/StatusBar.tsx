import React, { FC, useCallback } from "react";

import { useFocusEffect } from "@react-navigation/native";
import {
  StatusBar as RNStatusBar,
  StatusBarProps,
  StatusBarStyle,
  Platform,
} from "react-native";

export interface IStatusBarProps {
  mode?: "content" | "header";
  backgroundColor?: string;
}

export const StatusBar: FC<IStatusBarProps> = ({ mode, backgroundColor }) => {
  let style: StatusBarProps;

  switch (mode) {
    case "header":
      style = {
        barStyle: "light-content",
        translucent: true,
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
      };
      break;
    default:
      style = {
        barStyle: "dark-content",
        translucent: true,
        backgroundColor: backgroundColor ? backgroundColor : "transparent",
      };
  }

  useFocusEffect(
    useCallback(() => {
      RNStatusBar.setBarStyle(style.barStyle as StatusBarStyle);

      if (Platform.OS === "android") {
        RNStatusBar.setBackgroundColor(style.backgroundColor as string, true);
        RNStatusBar.setTranslucent(style.translucent as boolean);
      }
    }, []),
  );

  return <RNStatusBar {...style} />;
};
