import * as React from "react";
import { View, Text } from "react-native";

export interface IButtonProps {
  testID?: string;
}
export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <View testID={props.testID}>
      <Text>Button</Text>
    </View>
  );
};
