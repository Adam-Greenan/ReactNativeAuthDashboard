import {
  StackItem as SI,
  push,
  pop,
  navigate,
  resetStack,
  dispatch,
  navigationRef as navRef,
  isMountedRef as mountedRef,
  replace,
  navigateNested,
  currentRoute,
  routeRef as rRef,
  popToTop,
  goBack,
  canGoBack,
} from "./service";

export type StackItem = SI;
export const navigationRef = navRef;
export const routeRef = rRef;
export const isMountedRef = mountedRef;
export const navigation = {
  push: push,
  pop: pop,
  popToTop: popToTop,
  navigate: navigate,
  navigateNested: navigateNested,
  reset: resetStack,
  dispatch: dispatch,
  replace: replace,
  currentRoute: currentRoute,
  canGoBack: canGoBack,
  goBack: goBack,
};
