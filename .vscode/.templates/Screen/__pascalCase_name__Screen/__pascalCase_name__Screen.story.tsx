import React from "react";
import { storiesOf } from "@storybook/react-native";
import { StorybookSafeArea } from "storybook/StorybookSafeArea";
import { {{pascalCase name}}Screen } from "./{{pascalCase name}}Screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

storiesOf("Screens", module).add("{{pascalCase name}}Screen", () => (
  <StorybookSafeArea>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"{{pascalCase name}}Screen"} component={ {{pascalCase name}}Screen } />
      </Stack.Navigator>
    </NavigationContainer>
  </StorybookSafeArea>
));
