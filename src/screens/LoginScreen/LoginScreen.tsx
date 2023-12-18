import React, { FC, useState } from "react";

import { observer } from "mobx-react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LoginCommand } from "commands/LoginCommand";
import { Background } from "components/containers/Background";
import { StatusBar } from "components/display/StatusBar";
import { Button } from "components/inputs/Button";
import { Link } from "components/inputs/Link";
import { SecureTextInput } from "components/inputs/SecureTextInput";
import { regular } from "components/text";
import { useCommand } from "hooks/useCommand";

import Logo from "../../assets/images/Logos/ColabChatLogo.png";

export interface ILoginScreenProps {}

export const LoginScreen: FC<ILoginScreenProps> = observer(() => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginCommand = useCommand(() => new LoginCommand());

  console.log("LoginScreen");

  return (
    <>
      <StatusBar />
      <Background
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: 32,
        }}>
        <View style={styles.container}>
          <Text style={[regular.m, styles.logoText]}>Welcome to</Text>
          <Image style={styles.logoContainer} source={Logo} />
        </View>
        <View style={styles.container}>
          <SecureTextInput
            containerStyle={styles.input}
            placeHolder="Enter your email"
            onChange={(value) => setEmail(value)}
            value={email}
            label="Email"
            unsecure
          />
          <SecureTextInput
            placeHolder="Enter your password"
            onChange={(value) => setPassword(value)}
            value={password}
            editable
            label="Password"
          />
          <Link
            style={[regular.s, styles.forgotPasswordText]}
            text="Forgot Password?"
          />
          {loginCommand.error && (
            <Text style={styles.error}>{loginCommand.error}</Text>
          )}
        </View>
        <View>
          <Button
            style={styles.button}
            type="primary"
            title="Login"
            command={loginCommand}
            commandParams={{ email, password }}
          />
          <View style={styles.supportTextContainer}>
            <Text style={regular.s}>Need some help? </Text>
            <Link
              style={[regular.s, styles.textUnderline]}
              text="Contact Support"
            />
          </View>
        </View>
      </Background>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 22,
  },
  checkboxContainer: {
    paddingBottom: 16,
    alignSelf: "center",
  },
  logoContainer: {
    height: 150,
    width: 300,
    alignSelf: "center",
  },
  logoText: {
    alignSelf: "center",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  forgotPasswordText: {
    alignSelf: "flex-end",
    paddingTop: 8,
    textDecorationLine: "underline",
  },
  supportTextContainer: {
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: 8,
  },
  error: {
    color: "red",
    alignSelf: "center",
  },
});
