import React from "react";
import { storiesOf } from "@storybook/react-native";
import { StorybookSafeArea } from "storybook/StorybookSafeArea";
import { DashboardScreen } from "./DashboardScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

storiesOf("Screens", module).add("DashboardScreen", () => (
  <StorybookSafeArea>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"DashboardScreen"} component={ DashboardScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  </StorybookSafeArea>
));
