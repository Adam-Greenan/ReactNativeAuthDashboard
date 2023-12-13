// if you use expo remove this line
import { AppRegistry } from "react-native";

import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadStories } from "./storyLoader";
import "./rn-addons";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
AppRegistry.registerComponent("HARMySmartE", () => StorybookUIRoot);

export default StorybookUIRoot;
