import { useRoute } from "@react-navigation/native";

export const useRouteParam = <T>() => {
  /*
   * react navigations route type management is a bit of a mess
   * this is just simplifies the process by making an assumption
   * on the passed type and validating that assumption. Making
   * route params easier to consume.
   */
  const route = useRoute();

  if (route.params) {
    return route?.params as unknown as T;
  } else {
    return null;
  }
};
