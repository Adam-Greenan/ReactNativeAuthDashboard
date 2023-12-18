import React from "react";

import { storiesOf } from "@storybook/react-native";
import { SafeAreaView } from "react-native";

import { ResponseToast } from "./ResponseToast";

storiesOf("Components/ResponseToast", module)
  .add("Success Popup", () => (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <ResponseToast
        message="Updated Successfully"
        type="SUCCESS"
        onClose={() => null}
        show={true}
      />
    </SafeAreaView>
  ))
  .add("Error Popup", () => (
    <SafeAreaView style={{ paddingHorizontal: 16 }}>
      <ResponseToast
        message="ERROR 418: Error not found"
        type="ERROR"
        onClose={() => null}
        show={true}
      />
    </SafeAreaView>
  ));
