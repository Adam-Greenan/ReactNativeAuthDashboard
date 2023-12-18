import React, { FC, useRef } from "react";

import {
  View,
  TextInput as RNLoginInput,
  StyleSheet,
  KeyboardType,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import config from "config";

export interface ILoginInputProps {
  onChange: (value: any) => void;
  value: any;
  placeHolder?: string;
  multiline?: boolean;
  icon?: string;
  iconLeft?: string;
  iconPress?: () => void;
  editable?: boolean;
  keyboardType?: KeyboardType;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
  autoFocus?: boolean;
  secure?: boolean;
}
export const LoginInput: FC<ILoginInputProps> = ({
  onChange,
  value,
  placeHolder,
  multiline,
  keyboardType,
  icon,
  iconLeft,
  iconPress,
  containerStyle,
  editable,
  testID,
  autoFocus,
  secure,
}) => {
  let conditionalStyles = {};

  switch (true) {
    case multiline === true && editable === false:
      conditionalStyles = [styles.multiline, styles.disabled];
      break;
    case editable === false:
      conditionalStyles = styles.disabled;
      break;
    case multiline:
      conditionalStyles = [styles.multiline];
      break;
    default:
      conditionalStyles = styles.input;
  }

  const textInputRef = useRef<RNLoginInput>(null);

  return (
    <View style={styles.outerContainer}>
      {iconLeft ? (
        <View style={styles.leftIconContainer}>
          <Icon
            name={iconLeft}
            size={15}
            color={config.colors.text.primary}
            style={styles.icon}
          />
        </View>
      ) : undefined}
      <TouchableOpacity
        onPress={() => textInputRef.current?.focus()}
        style={[styles.container, containerStyle, conditionalStyles]}
        testID={testID}>
        <RNLoginInput
          onChangeText={(text) => onChange(text)}
          value={value}
          placeholder={placeHolder}
          multiline={multiline}
          editable={editable}
          keyboardType={keyboardType}
          ref={textInputRef}
          autoFocus={autoFocus}
          style={styles.text}
          secureTextEntry={secure}
          autoCapitalize="none"
          maxFontSizeMultiplier={config.accessibility.maxFontSizeMultiplier}
        />
        {icon ? (
          <TouchableOpacity onPress={() => iconPress}>
            <Icon
              name={icon}
              size={25}
              color={config.colors.lightGray}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : undefined}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
  },
  container: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: config.colors.border.light,
    borderWidth: 1,
    backgroundColor: config.colors.white,
    paddingLeft: 16,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    color: config.colors.lightGray,
    fontSize: 15,
    fontWeight: "bold",
  },
  multiline: {
    minHeight: 150,
    paddingTop: 16,
    color: config.colors.lightGray,
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  icon: {
    marginHorizontal: 16,
  },

  leftIconContainer: {
    backgroundColor: config.colors.lightGray,
    height: 50,
    justifyContent: "center",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: config.colors.border.light,
    borderWidth: 1,
  },
  disabled: {
    color: config.colors.disabled.text,
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
    color: config.colors.text.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
