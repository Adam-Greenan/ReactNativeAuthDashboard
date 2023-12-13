import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Background} from 'components/containers/Background';

export interface ILoginScreenProps {}

export const LoginScreen: React.FunctionComponent<
  ILoginScreenProps
> = props => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Background
        style={[
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}>
        <View style={styles.container}>
          <Text>Login Screen</Text>
        </View>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
