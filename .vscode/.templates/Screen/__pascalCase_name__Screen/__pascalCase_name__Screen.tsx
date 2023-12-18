import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { observer } from "mobx-react";
import { Background } from "components/containers/Background";
import { StatusBar } from "components/display/StatusBar";

export interface I{{pascalCase name}}ScreenProps {}

export const {{pascalCase name}}Screen: FC<I{{pascalCase name}}ScreenProps> = observer(
  props => {
    const insets = useSafeAreaInsets();

    return (
      <>
        <StatusBar />
        <Background
          style={[
            {
              paddingTop: insets.top / 4,
              paddingHorizontal: 32
            }
          ]}>
          <View style={styles.container}>
            <Text>{{pascalCase name}} Screen</Text>
          </View>
        </Background>
      </>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
