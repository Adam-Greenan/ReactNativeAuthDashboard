import React from "react";
import { SafeAreaView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { AsyncGate } from "./AsyncGate";

storiesOf("Components/AsyncGate", module).add("AsyncGate", () => (
  <SafeAreaView>
    <AsyncGate action={async () => {}} />
  </SafeAreaView>
));
