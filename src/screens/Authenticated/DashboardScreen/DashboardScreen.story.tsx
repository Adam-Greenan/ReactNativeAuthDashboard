import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { storiesOf } from "@storybook/react-native";

import { StorybookSafeArea } from "storybook/StorybookSafeArea";

import { DashboardScreen } from "./DashboardScreen";

const Stack = createStackNavigator();
storiesOf("Screens", module).add("DashboardScreen", () => (
  <StorybookSafeArea>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"DashboardScreen"}
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </StorybookSafeArea>
));
