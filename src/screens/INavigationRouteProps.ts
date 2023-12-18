/*
 * react navigations route type management is a bit of a mess
 * This just simplifies to what we need.
 */

export interface INavigationRouteProps<TRouteParams> {
  route?: {
    params?: TRouteParams;
  };
}
