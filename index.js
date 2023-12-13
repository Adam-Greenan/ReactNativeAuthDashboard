/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StorybookUI from './storybook';
import {enableScreens} from 'react-native-screens';
import { configure } from "mobx";

const useStorybook = false;


configure({
  enforceActions: "never",
});

enableScreens();

const Main = useStorybook ? StorybookUI : App;

AppRegistry.registerComponent(appName, () => Main);
