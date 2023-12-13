import * as React from 'react';
import {View, ViewStyle, StyleSheet, ImageBackground} from 'react-native';
import config from '../../../config';
import {ViewStyleProp} from 'components/StyleProps';
import {useStyleProp} from 'hooks/useStyleProp';
import LinearGradient from 'react-native-linear-gradient';

export interface IBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyleProp;
  testID?: string;
}

export const Background: React.FunctionComponent<IBackgroundProps> = props => {
  const style = useStyleProp(props.style);

  return (
    <LinearGradient
      colors={config.gradients.background.colors}
      locations={config.gradients.background.locations}
      start={{ x: 0.4, y: 0.8}}
      end={{ x: 1, y: 0}}
      style={{flex: 1}}>
      <View testID={props.testID} style={[styles.container, ...style]}>
        {props.children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: config.colors.containers.background.normal,
  },
});
