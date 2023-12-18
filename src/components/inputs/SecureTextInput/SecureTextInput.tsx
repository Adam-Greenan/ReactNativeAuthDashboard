import React, { FC, LegacyRef, useState } from "react";
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  KeyboardType,
  StyleProp,
  ViewStyle,
  Text,
  TouchableOpacity,
} from "react-native";

import { regular } from "components/text";
import config from "config";
import EyeClosed from "src/assets/images/svgs/eye-closed.svg";
import EyeOpen from "src/assets/images/svgs/eye-open.svg";

export interface ISecureTextInputProps {
  onChange: (value: string) => void;
  value: string;
  ref?: LegacyRef<RNTextInput>;
  placeHolder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  multiline?: boolean;
  editable?: boolean;
  keyboardType?: KeyboardType;
  testID?: string;
  label?: string;
  autoFocus?: boolean;
  unsecure?: boolean;
}
export const SecureTextInput: FC<ISecureTextInputProps> = ({
  onChange,
  value,
  ref,
  placeHolder,
  multiline,
  containerStyle,
  keyboardType,
  editable,
  label,
  testID,
  autoFocus,
  unsecure,
}) => {
  const [focus, setFocus] = useState(false);
  const [secure, setSecure] = useState(true);
  const [width, setWidth] = useState(0);

  return (
    <View
      testID={testID}
      style={[
        styles.outerContainer,
        styles.border,
        focus ? styles.selectedBorder : null,
        config.effects.dropshadow,
        containerStyle,
      ]}>
      {label ? (
        <>
          <View style={[styles.borderCover, { width: width + 15 }]} />
          <View style={styles.labelContainer}>
            <Text
              onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setWidth(width);
              }}
              style={regular.s}>
              {label}
            </Text>
          </View>
        </>
      ) : undefined}
      <View style={styles.textInputContainer}>
        <RNTextInput
          onChangeText={(value) => onChange(value)}
          onBlur={() => setFocus(false)}
          value={value}
          onFocus={() => setFocus(true)}
          placeholder={placeHolder}
          multiline={multiline}
          editable={editable}
          keyboardType={keyboardType}
          ref={ref}
          autoFocus={autoFocus}
          maxFontSizeMultiplier={config.accessibility.maxFontSizeMultiplier}
          secureTextEntry={secure && !unsecure}
          style={styles.text}
        />
      </View>
      {!unsecure ? (
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              editable ? setSecure(!secure) : null;
            }}>
            {secure ? (
              <EyeOpen
                width={30}
                height={30}
                stroke={config.colors.lightGray}
              />
            ) : (
              <EyeClosed
                width={30}
                height={30}
                stroke={config.colors.lightGray}
              />
            )}
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

SecureTextInput.defaultProps = {
  editable: true,
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    backgroundColor: config.colors.secondary,
  },
  border: {
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: config.colors.border.light,
    paddingLeft: 16,
    color: config.colors.lightGray,
    fontSize: 20,
    fontWeight: "bold",
  },
  textInputContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  text: {
    // color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconContainer: {
    height: "100%",
    width: 30,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
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
});
