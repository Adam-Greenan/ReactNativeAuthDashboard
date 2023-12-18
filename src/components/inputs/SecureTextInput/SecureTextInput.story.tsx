import React from "react";
import { SafeAreaView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { useState } from "@storybook/addons";

import { SecureTextInput } from "./SecureTextInput";

storiesOf("Components/SecureTextInput", module)
  .add("Empty Input", () => {
    const [value, setValue] = useState("");
    return (
      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <SecureTextInput
          value={value}
          onChange={(value: string) => setValue(value)}
        />
      </SafeAreaView>
    );
  })
  .add("Placeholder", () => {
    const [value, setValue] = useState("");
    return (
      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <SecureTextInput
          value={value}
          placeHolder="Password"
          onChange={(value: string) => setValue(value)}
        />
      </SafeAreaView>
    );
  })
  .add("Disabled Input", () => {
    const [value, setValue] = useState("");
    return (
      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <SecureTextInput
          value={value}
          editable={false}
          onChange={(value: string) => setValue(value)}
        />
      </SafeAreaView>
    );
  });
