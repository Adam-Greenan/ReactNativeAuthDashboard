import React from "react";
import { SafeAreaView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { Button } from "./Button";

storiesOf("Components/Button", module).add("Button", () => (
  <SafeAreaView>
    <Button />
  </SafeAreaView>
));
