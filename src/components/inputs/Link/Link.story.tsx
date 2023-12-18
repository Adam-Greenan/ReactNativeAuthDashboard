import React from "react";

import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "react-native";

import config from "config";
import { DummyCommand } from "test/DummyCommand";

import { Link } from "./Link";

storiesOf("Components/Link", module)
  .add("Link", () => (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <Link
        command={
          new DummyCommand(() => {
            console.log("press");
          }, true)
        }
        text="This is actually a link"
      />
    </SafeAreaView>
  ))
  .add("Disabled Link", () => (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <Link
        command={new DummyCommand(() => {}, false)}
        text="This is a disabled link"
      />
    </SafeAreaView>
  ))
  .add("Styled Link", () => (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <Link
        command={
          new DummyCommand(() => {
            console.log("press");
          }, true)
        }
        style={{
          color: config.colors.lightGray,
          fontWeight: "bold",
        }}
        text="This is a styled link"
      />
    </SafeAreaView>
  ));
