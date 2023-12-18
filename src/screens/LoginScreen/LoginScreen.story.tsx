import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { storiesOf } from "@storybook/react-native";

import { StorybookSafeArea } from "storybook/StorybookSafeArea";

import { LoginScreen } from "./LoginScreen.1";

const Stack = createStackNavigator();

storiesOf("Screens", module).add("LoginScreen", () => (
  <StorybookSafeArea>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"LoginScreen"}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </StorybookSafeArea>
));
