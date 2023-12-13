import * as React from 'react';
import {View, Text, StyleSheet, TextInput as Input} from 'react-native';
import {regular} from '../text';

export interface ITextInputProps {
  testID?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secure?: boolean;
}
export const TextInput: React.FunctionComponent<ITextInputProps> = props => {
  return (
    <Input
      style={[regular.m, styles.input]}
      secureTextEntry={props.secure}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor="#4F555A"
      onChangeText={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',

    height: 60,
    width: '100%',

    marginVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    lineHeight: 18,
  },
});
