import React, { FC, LegacyRef, useRef, useState } from "react";

import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  KeyboardType,
  ViewStyle,
  StyleProp,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { regular } from "components/text";
import config from "config";

export interface ITextInputProps {
  onChange: (value: any) => void;
  value: any;
  ref?: LegacyRef<RNTextInput>;
  placeHolder?: string;
  multiline?: boolean;
  icon?: string;
  iconLeft?: string;
  iconPress?: () => void;
  editable?: boolean;
  keyboardType?: KeyboardType;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
  autoFocus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}
export const TextInput: FC<ITextInputProps> = ({
  onChange,
  value,
  placeHolder,
  label,
  multiline,
  keyboardType,
  icon,
  iconLeft,
  iconPress,
  containerStyle,
  editable,
  testID,
  autoFocus,
  onFocus,
  onBlur,
}) => {
  const [focus, setFocus] = useState(false);
  const [labelWidth, setLabelWidth] = useState(0);

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

  const textInputRef = useRef<RNTextInput>(null);

  const onFocusHandler = () => {
    onFocus && onFocus();
    textInputRef.current?.focus();
    setFocus(true);
  };

  const onBlurHandler = () => {
    onBlur && onBlur();
    setFocus(false);
    textInputRef.current?.blur();
  };

  return (
    <TouchableOpacity
      onPress={() => onFocusHandler()}
      style={[
        !focus
          ? [styles.container, containerStyle, conditionalStyles]
          : [
              styles.container,
              styles.selectedBorder,
              containerStyle,
              conditionalStyles,
            ],
      ]}
      testID={testID}>
      {label ? (
        <>
          <View style={[styles.borderCover, { width: labelWidth + 15 }]} />
          <View style={styles.labelContainer}>
            <Text
              onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setLabelWidth(width);
              }}
              style={regular.s}>
              {label}
            </Text>
          </View>
        </>
      ) : undefined}
      {iconLeft ? (
        <Icon
          name={iconLeft}
          size={25}
          color={config.colors.text.primary}
          style={styles.icon}
        />
      ) : undefined}
      <RNTextInput
        onChangeText={(text) => onChange(text)}
        onBlur={() => onBlurHandler()}
        value={value}
        placeholder={placeHolder}
        multiline={multiline}
        editable={editable}
        keyboardType={keyboardType}
        ref={textInputRef}
        autoFocus={autoFocus}
        style={styles.text}
        autoCapitalize="none"
        maxFontSizeMultiplier={config.accessibility.maxFontSizeMultiplier}
      />
      {icon ? (
        <TouchableOpacity onPress={() => iconPress}>
          <Icon
            name={icon}
            size={25}
            color={config.colors.text.primary}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : undefined}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    backgroundColor: config.colors.secondary,
    paddingLeft: 16,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    color: config.colors.text.primary,
    fontSize: 15,
    fontWeight: "bold",
  },
  multiline: {
    minHeight: 150,
    paddingTop: 16,
    color: config.colors.text.primary,
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "flex-start",
  },
  icon: {
    marginRight: 16,
  },
  selectedBorder: {
    borderColor: config.colors.border.selected,
  },
  labelContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    marginStart: 10,
    zIndex: 2,
    elevation: 1,
    shadowColor: config.colors.secondary,
    position: "absolute",
    top: -14,
  },
  borderCover: {
    backgroundColor: config.colors.secondary,
    height: 10,
    marginStart: 10,
    elevation: 1,
    alignSelf: "flex-start",
    position: "absolute",
    top: -2,
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
