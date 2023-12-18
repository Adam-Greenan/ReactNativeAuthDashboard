// if you use expo remove this line
import React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { withKnobs } from "@storybook/addon-knobs";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { AppRegistry } from "react-native";
import "./rn-addons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { name as appName } from "../app.json";

import { loadStories } from "./storyLoader";

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookRoot = getStorybookUI({
  port: 7007,
  asyncStorage: AsyncStorage,
});

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = () => {
  return (
    <SafeAreaProvider>
      <StorybookRoot />
    </SafeAreaProvider>
  );
};

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
