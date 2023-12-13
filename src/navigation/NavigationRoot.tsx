import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, routeRef, isMountedRef} from 'services/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {useAppLifecycle} from 'hooks/useAppLifecycle';
import {LoginScreen} from '../screens/Onboarding/LoginScreen';
import {DashboardScreen} from '../screens/Authenticated/DashboardScreen';

const getActiveRouteName = (state: any): string => {
  const route = state.routes[state.index];

  if (route.state) {
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const Stack = createStackNavigator();

export interface INavigationRootProps {
  testID?: string;
}

export const NavigationRoot: React.FunctionComponent<
  INavigationRootProps
> = () => {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useAppLifecycle();

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
        }}
        initialRouteName="LoginScreen">
        <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        <Stack.Screen name={'DashboardScreen'} component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
