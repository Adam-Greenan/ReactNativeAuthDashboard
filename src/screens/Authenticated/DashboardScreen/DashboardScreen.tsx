import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { observer } from "mobx-react";
import { Background } from "components/containers/Background";

export interface IDashboardScreenProps {}

export const DashboardScreen: React.FunctionComponent<IDashboardScreenProps> = observer(
  props => {
    const insets = useSafeAreaInsets();

    return (
      <>
        <Background
          style={[
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom
            }
          ]}>
          <View style={styles.container}>
            <Text>Dashboard Screen</Text>
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
