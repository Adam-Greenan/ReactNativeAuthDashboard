import React from "react";

import { useState } from "@storybook/addons";
import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "react-native";

import { Checkbox } from "./Checkbox";

storiesOf("Components/Checkbox", module)
  .add("Checkbox", () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <Checkbox
          text="This is a checkbox"
          value={isSelected}
          onChange={() => setIsSelected(!isSelected)}
        />
      </SafeAreaView>
    );
  })
  .add("Disabled Checkbox", () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <SafeAreaView style={{ paddingHorizontal: 16 }}>
        <Checkbox
          text="This is a checkbox"
          value={isSelected}
          onChange={() => setIsSelected(!isSelected)}
          disabled
        />
      </SafeAreaView>
    );
  });
