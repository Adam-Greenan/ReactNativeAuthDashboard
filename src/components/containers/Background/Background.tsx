import React, { FC, ReactNode } from "react";

import { View, StyleSheet } from "react-native";

import { ViewStyleProp } from "components/StyleProps";
import config from "config";
import { useStyleProp } from "hooks/useStyleProp";

export interface IBackgroundProps {
  children: ReactNode;
  style?: ViewStyleProp;
  testID?: string;
}

export const Background: FC<IBackgroundProps> = ({
  style,
  testID,
  children,
}) => {
  const styleHook = useStyleProp(style);

  return (
    <View testID={testID} style={[styles.container, ...styleHook]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: config.colors.containers.background.normal,
  },
});
