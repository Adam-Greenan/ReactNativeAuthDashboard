import * as React from "react";
import { View, Text } from "react-native";

export interface I{{ pascalCase name }}Props {
  testID?: string;
}
export const {{ pascalCase name }}: React.FunctionComponent<I{{ pascalCase name }}Props> = (props) => {
  return (
    <View testID={props.testID}>
      <Text>{{ pascalCase name }}</Text>
    </View>
  );
};
