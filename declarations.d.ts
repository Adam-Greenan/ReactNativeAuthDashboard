import React from "react";

declare module "*.svg" {
  import { SvgProps } from "react-native-svg";

  const content: React.FC<SvgProps>;
  export default content;
}
declare module "*.png";

declare module "@react-navigation/native";

declare module "@react-navigation/stack";

declare module "@storybook/react-native";
