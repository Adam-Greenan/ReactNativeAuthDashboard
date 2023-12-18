import React from "react";

import { useState } from "@storybook/addons";
import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "react-native";

import { LoginInput } from "./LoginInput";

storiesOf("Components/LoginInput", module)
  .add("Empty Input", () => {
    const [value, setValue] = useState("");
    return (
      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <LoginInput value={value} onChange={(text: string) => setValue(text)} />
      </SafeAreaView>
    );
  })
  .add("Placeholder Input", () => {
    const [value, setValue] = useState("");
    return (
      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <LoginInput
          value={value}
          onChange={(text: string) => setValue(text)}
          placeHolder="This is a placeholder"
        />
      </SafeAreaView>
    );
  })
  .add("Non-Editable", () => {
    const [value, setValue] = useState("");
    return (
      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <LoginInput
          value={value}
          onChange={(text: string) => setValue(text)}
          editable={false}
        />
      </SafeAreaView>
    );
  });
