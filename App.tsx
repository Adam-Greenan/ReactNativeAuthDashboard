import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { AsyncGate } from "components/behaviors/AsyncGate";
import { stores } from "models/stores";
import { NavigationRoot } from "navigation/NavigationRoot";
import { Text, View } from "react-native";

const App = () => {
  console.log("app");
  return (
    <SafeAreaProvider>
      {/* <AsyncGate> */}
      <NavigationRoot />
      {/* </AsyncGate> */}
    </SafeAreaProvider>
  );
};

export default App;
