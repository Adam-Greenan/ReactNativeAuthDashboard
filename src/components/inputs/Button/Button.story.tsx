import React from "react";

import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "react-native";

import { DummyCommand } from "test/DummyCommand";

import { Button } from "./Button";

storiesOf("Components/Button", module)
  .add("Primary", () => (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <Button
        type="primary"
        title="Primary"
        command={
          new DummyCommand(() => {
            console.log("press");
          }, true)
        }
      />
    </SafeAreaView>
  ))
  .add("Secondary", () => (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <Button type="secondary" title="Secondary" />
    </SafeAreaView>
  ))
  .add("Disabled", () => (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <Button
        type="primary"
        title="Disabled"
        command={new DummyCommand(() => {}, false)}
      />
    </SafeAreaView>
  ));
