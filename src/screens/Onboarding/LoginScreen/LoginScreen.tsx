import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Background} from 'components/containers/Background';
import {regular} from '../../../components/text';
import config from '../../../config';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {useCommand} from '../../../hooks/useCommand';
import {LoginCommand} from '../../../commands/LoginCommand';
import {observer} from 'mobx-react';

export interface ILoginScreenProps {}

export const LoginScreen: React.FunctionComponent<ILoginScreenProps> = observer(
  props => {
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginCommand = useCommand(() => new LoginCommand());

    return (
      <>
        <Background
          style={[
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              backgroundColor: config.gradients.background,
            },
          ]}>
          <View style={styles.container}>
            <Text style={[regular.xl, {...styles.title}]}>
              Sign In to dashboard
            </Text>

            <View style={styles.inputsContainer}>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter Email"
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder="Enter Password"
                  secure
                  value={password}
                  onChangeText={value => setPassword(value)}
                />
              </View>
              <Text style={[regular.s, styles.recoverLink]}>
                Recover Password?
              </Text>
            </View>
            {loginCommand.error ? (
              <View style={styles.errorContainer}>
                <Text style={[regular.s, styles.error]}>
                  {loginCommand.error}
                </Text>
              </View>
            ) : null}
            <View style={styles.buttonContainer}>
              <Button
                command={loginCommand}
                commandParams={{email: email, password: password}}
                text="Sign In"
              />
            </View>
          </View>
        </Background>
      </>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputsContainer: {
    marginTop: 32,
  },
  input: {
    paddingVertical: 8,
  },
  recoverLink: {
    textAlign: 'center',
    marginTop: 8,
    color: '#C7C7C7',
  },
  buttonContainer: {
    marginVertical: 32,
  },
  errorContainer: {
    marginTop: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
