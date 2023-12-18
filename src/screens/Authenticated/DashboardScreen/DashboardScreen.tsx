import React, { FC } from "react";

import { observer } from "mobx-react";
import { Text, StyleSheet } from "react-native";

import { Background } from "components/containers/Background";
import { StatusBar } from "components/display/StatusBar";

export interface IDashboardScreenProps {}

export const DashboardScreen: FC<IDashboardScreenProps> = observer(() => {
  return (
    <>
      <StatusBar />
      <Background style={styles.backgroundContainer}>
        <Text>DashboardScreen</Text>
      </Background>
    </>
  );
});

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
