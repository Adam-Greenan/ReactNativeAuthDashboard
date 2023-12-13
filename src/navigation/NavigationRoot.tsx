import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, routeRef, isMountedRef} from 'services/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {useAppLifecycle} from 'hooks/useAppLifecycle';

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

  let stack = <Stack.Screen name="Screens" component={OnboardingStack} />;

  // if (app.auth.authenticated) {
  //   stack = <Stack.Screen name="Screens" component={AuthenticatedStack} />;
  // }

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state: any | undefined) => {
        const currentRouteName = getActiveRouteName(state);
        routeRef.current = currentRouteName;
      }}>
      <Stack.Navigator
        presentation="modal"
        screenOptions={{
          headerShown: false,
        }}>
        {stack}
        <Stack.Screen name={'Modal'} component={ModalStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
