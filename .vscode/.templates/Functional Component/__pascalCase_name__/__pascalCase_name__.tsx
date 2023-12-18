import React, { FC } from "react";
import { View, Text } from "react-native";

export interface I{{ pascalCase name }}Props {
  testID?: string;
}
export const {{ pascalCase name }}: FC<I{{ pascalCase name }}Props> = ({ testID }) => {
  return (
    <View testID={testID}>
      <Text>{{ pascalCase name }}</Text>
    </View>
  );
};
