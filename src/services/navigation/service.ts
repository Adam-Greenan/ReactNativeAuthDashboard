import { MutableRefObject, createRef } from "react";

import {
  NavigationAction,
  CommonActions,
  StackActions,
  createNavigationContainerRef,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const routeRef: MutableRefObject<string> =
  createRef<string>() as MutableRefObject<string>;

export const isMountedRef: MutableRefObject<boolean> =
  createRef<boolean>() as MutableRefObject<boolean>;

export const push = (item: StackItem) => {
  navigationRef.current?.dispatch(StackActions.push(item.name, item.params));
};

export const pop = (count: number = 1) => {
  navigationRef.current?.dispatch(
    StackActions.pop(count > 1 ? count : undefined),
  );
};

export const canGoBack = () => {
  return navigationRef.current?.canGoBack();
};

export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

export const navigate = (name: string, params?: any) => {
  navigationRef.navigate(name, params);
};

export const navigateNested = (
  name: string,
  screen: { screen: string; params?: any },
) => {
  navigationRef.current?.navigate(name, screen);
};

export const currentRoute = () => {
  return navigationRef.getCurrentRoute()?.name;
};

export const replace = (name: string, params?: any) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const dispatch = (action: NavigationAction) => {
  navigationRef.current?.dispatch(action);
};

export const resetStack = (stack: Array<StackItem>) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: stack.length,
      routes: stack,
    }),
  );
};
export interface StackItem {
  key?: string;
  name: string;
  params?: object;
}
