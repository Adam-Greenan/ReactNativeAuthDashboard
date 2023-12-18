import React, { FC } from "react";

import CheckBox from "@react-native-community/checkbox";
import { View, Text, StyleSheet } from "react-native";

import config from "config";

export interface ICheckboxProps {
  onChange: (value: boolean) => void;
  value: boolean;
  text?: string;
  disabled?: boolean;
  testID?: string;
}
export const Checkbox: FC<ICheckboxProps> = ({
  onChange,
  value,
  text,
  disabled,
  testID,
}) => {
  return (
    <View testID={testID} style={styles.container}>
      <CheckBox
        boxType="square"
        style={styles.boxStyle}
        value={value}
        onValueChange={(check: boolean) => onChange(check)}
        disabled={disabled}
        onCheckColor={config.colors.text.primary}
        tintColor={config.colors.text.primary}
        onTintColor={config.colors.text.primary}
        tintColors={{
          true: config.colors.text.primary,
          false: config.colors.text.primary,
        }}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  boxStyle: {
    height: 22,
    width: 22,
    borderWidth: 3,
    borderColor: config.colors.text.primary,
  },
  text: {
    alignSelf: "center",
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: config.colors.text.primary,
  },
});
