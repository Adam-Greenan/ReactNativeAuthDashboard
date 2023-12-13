import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import config from '../../config';
import {regular} from '../text';
import {ICommandExecutor} from '../../commands/ICommandExecutor';
import {useCommandExecutor} from '../../hooks/useCommandExecutor';
import {observer} from 'mobx-react';

export interface IButtonProps extends ICommandExecutor {
  testID?: string;
  text: string;
}
export const Button: React.FunctionComponent<IButtonProps> = observer(props => {
  const {execute} = useCommandExecutor(props);
  return (
    <TouchableOpacity
      onPress={execute}
      style={styles.container}
      testID={props.testID}>
      <Text style={[regular.l, styles.text]}>{props.text}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.colors.primary,

    justifyContent: 'center',
    alignItems: 'center',

    height: 60,
    width: '100%',

    marginVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    lineHeight: 18,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
