import React from "react";

import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "react-native";

import { Background } from "./Background";

storiesOf("Components/Background", module).add("Background", () => (
  <SafeAreaView>
    <Background children={undefined} />
  </SafeAreaView>
));
