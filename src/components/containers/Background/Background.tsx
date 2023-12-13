import * as React from 'react';
import {View, ViewStyle, StyleSheet, ImageBackground} from 'react-native';
import config from 'config';
import {ViewStyleProp} from 'components/StyleProps';
import {useStyleProp} from 'hooks/useStyleProp';

export interface IBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyleProp;
  testID?: string;
}

export const Background: React.FunctionComponent<IBackgroundProps> = props => {
  const style = useStyleProp(props.style);

  return (
    <View testID={props.testID} style={[styles.container, ...style]}>
      {props.children}
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
