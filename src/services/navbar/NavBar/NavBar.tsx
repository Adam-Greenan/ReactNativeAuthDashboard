import { FC, useCallback } from "react";

import { useFocusEffect } from "@react-navigation/native";

import config from "config";

import { navbar } from "..";

export interface INavBarProps {
  testID?: string;
  left?: JSX.Element | null;
  right?: JSX.Element | null;
  canGoBack?: boolean;
  title?: string;
  color?: string;
  headerShown?: boolean;
}
export const NavBar: FC<INavBarProps> = (props) => {
  useFocusEffect(
    useCallback(() => {
      navbar.setConfig({
        headerShown: props.headerShown === undefined ? true : props.headerShown,
        left: props.left,
        right: props.right,
        title: props.title === undefined ? "" : props.title,
        canGoBack: props.canGoBack === undefined ? true : props.canGoBack,
        color: props.color === undefined ? config.colors.primary : props.color,
      });
    }, [props]),
  );
  return null;
};
