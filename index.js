/**
 * @format
 */
import "react-native-gesture-handler";

import { configure } from "mobx";
import { AppRegistry } from "react-native";
import Config from "react-native-config";
import { enableScreens } from "react-native-screens";

import App from "./App";
import { name as appName } from "./app.json";
import StorybookUI from "./storybook";

configure({
  enforceActions: "never",
});

enableScreens();

console.log("here");

const Main = Config.USE_STORYBOOK === "true" ? StorybookUI : App;

AppRegistry.registerComponent(appName, () => Main);
