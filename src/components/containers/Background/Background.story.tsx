import React from "react";
import { SafeAreaView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Background } from "./Background";

storiesOf("Components/Background", module).add("Background", () => (
  <SafeAreaView>
    <Background />
  </SafeAreaView>
));
