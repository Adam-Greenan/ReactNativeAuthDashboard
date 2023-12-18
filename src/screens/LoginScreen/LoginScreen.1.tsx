import React, { FC } from "react";
import { observer } from "mobx-react";
import { View, Text, Image } from "react-native";
import { Background } from "components/containers/Background";
import { StatusBar } from "components/display/StatusBar";
import { Link } from "components/inputs/Link";
import { regular } from "components/text";
import config from "config";
import { LoginInput } from "components/inputs/LoginInput";
import { ILoginScreenProps, styles } from "./LoginScreen";

export const LoginScreen: FC<ILoginScreenProps> = observer(() => {
  const insets = useSafeAreaInsets();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const loginCommand = useCommand(() => new LoginCommand());

  console.log("LoginScreen");

  return (
    <>
      <StatusBar />
      <Background
        style={[
          styles.background,
          // {
          //   paddingTop: insets.top,
          //   paddingBottom: insets.bottom,
          // },
        ]}>
        <Image style={styles.logoContainer} source={config.logo} />
        <Text style={[regular.l, styles.headerText]}>Sign In</Text>
        <Text style={styles.subHeaderText}>
          Sign in to continue to ColabChat
        </Text>
        <View style={styles.container}>
          <Text style={[regular.m, styles.username]}>Username</Text>
          <LoginInput
            iconLeft="user"
            containerStyle={styles.input}
            placeHolder="Enter your email"
            onChange={(value) => setIdentifier(value)}
            value={identifier}
          />
          <View>
            <Text>Password</Text>
            <Text>Password</Text>
            <Text>Password</Text>
            <Text>Password</Text>
            <Text>Password</Text>
            <Text>Password</Text>
            <Link
              style={[regular.s, styles.forgotPasswordText]}
              text="Forgot Password?"
            />
          </View>
          <LoginInput
            iconLeft="lock"
            placeHolder="Enter your password"
            onChange={(value) => setPassword(value)}
            value={password}
            editable
            secure
          />
          <Button
            type="primary"
            title="Sign In"
            command={loginCommand}
            commandParams={{ identifier, password }}
          />
        </View>
      </Background>
    </>
  );
});
