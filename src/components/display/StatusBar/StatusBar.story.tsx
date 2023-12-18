import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { storiesOf } from "@storybook/react-native";

import { StorybookSafeArea } from "storybook/StorybookSafeArea";

import { StatusBar } from "./StatusBar";

const Stack = createStackNavigator();

storiesOf("Components/StatusBar", module)
  .add("Content", () => (
    <StorybookSafeArea>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"StatusBar"}>
            {() => <StatusBar mode={"content"} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </StorybookSafeArea>
  ))
  .add("Header", () => (
    <StorybookSafeArea>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"StatusBar"}>
            {() => <StatusBar mode={"header"} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </StorybookSafeArea>
  ));
