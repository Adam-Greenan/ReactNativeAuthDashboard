import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnalyticsTrackScreen } from "services/analytics";
import { observer } from "mobx-react";
import { Background } from "components/containers/Background";
import { StatusBar } from "components/display/StatusBar";
import { t } from "services/i18n";

export interface I{{pascalCase name}}ScreenProps {}

export const {{pascalCase name}}Screen: React.FunctionComponent<I{{pascalCase name}}ScreenProps> = observer(
  props => {
    const insets = useSafeAreaInsets();

    return (
      <>
        <AnalyticsTrackScreen screen={"{{pascalCase name}}Screen"} />
        <StatusBar />
        <Background
          style={[
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom
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
