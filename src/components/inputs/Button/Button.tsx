import React, { FC } from "react";

import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";

import { ICommandExecutor } from "commands/ICommandExecutor";
import config from "config";
import { useCommandExecutor } from "hooks/useCommandExecutor";

export interface IButtonProps extends ICommandExecutor {
  type: "primary" | "secondary";
  title: string;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  testID?: string;
}

export const Button: FC<IButtonProps> = ({
  type = "primary",
  title,
  command,
  style,
  commandParams,
  loading,
  testID,
}) => {
  const { execute, canExecute } = useCommandExecutor({
    command,
    commandParams,
  });

  const containerStyle =
    type === "primary" ? styles.primaryContainer : styles.secondaryContainer;

  return (
    <View style={style}>
      <TouchableOpacity onPress={execute} disabled={!canExecute}>
        <View
          style={[
            canExecute
              ? [styles.container, containerStyle]
              : [styles.container, styles.disabledContainer],
            config.effects.dropshadow,
          ]}
          testID={testID}>
          {!loading ? (
            <Text style={[styles.text, canExecute ? null : styles.disabled]}>
              {title}
            </Text>
          ) : (
            <ActivityIndicator size="small" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    height: 50,
    justifyContent: "center",
  },
  primaryContainer: {
    backgroundColor: config.colors.primary,
    borderColor: config.colors.border.light,
  },
  secondaryContainer: {
    backgroundColor: config.colors.secondary,
    borderColor: config.colors.border.light,
  },
  disabledContainer: {
    backgroundColor: config.colors.disabled.tintedWhite,
    borderColor: config.colors.disabled.lightGray,
  },
  text: {
    alignSelf: "center",
    color: config.colors.white,
    fontSize: 20,
  },
  disabled: {
    color: "black",
  },
});
