import React, { FC } from "react";

import { Text, TextStyle, StyleSheet, StyleProp } from "react-native";

import { ICommandExecutor } from "commands/ICommandExecutor";
import { useCommandExecutor } from "hooks/useCommandExecutor";

export interface ILinkProps extends ICommandExecutor {
  text: string;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

export const Link: FC<ILinkProps> = ({
  text,
  testID,
  command,
  commandParams,
  style,
}) => {
  const { execute, canExecute } = useCommandExecutor({
    command,
    commandParams,
  });

  return (
    <Text
      onPress={canExecute ? () => execute() : undefined}
      style={canExecute ? style : [style, styles.disabledText]}
      testID={testID}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  disabledText: {
    opacity: 0.6,
  },
});
