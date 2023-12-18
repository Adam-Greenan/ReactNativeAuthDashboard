import React, { FC, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";

import { DashboardScreen } from "screens/Authenticated/DashboardScreen";
import { LoginScreen } from "screens/LoginScreen";
import { navigationRef, routeRef, isMountedRef } from "services/navigation";

const getActiveRouteName = (state: any): string => {
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const Stack = createNativeStackNavigator();

export interface INavigationRootProps {
  testID?: string;
}

export const NavigationRoot: FC<INavigationRootProps> = observer(() => {
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // console.log("LoginScreen");
  // useAppLifecycle();

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state: any | undefined) => {
        const currentRouteName = getActiveRouteName(state);
        routeRef.current = currentRouteName;
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
