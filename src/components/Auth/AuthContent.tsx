import { useState } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";

import Button from "../Button/Button";
import AuthForm from "./AuthForm";
import colors from "../../../constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface AuthContentProp {
  isLogin: boolean;
  onAuthenticate?: any;
  navigation?: any;
}
function AuthContent({ isLogin, onAuthenticate, navigation }: AuthContentProp) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    userName: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, userName, password } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const userNameIsValid = userName.length > 2;

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        userName: !userNameIsValid,
        password: !passwordIsValid,
      });
      return;
    }
    if (!isLogin) {
      onAuthenticate({ email, password, userName });
    } else {
      onAuthenticate({ email, password });
    }
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <Button
          onPress={switchAuthModeHandler}
          buttonText={
            isLogin
              ? "Don't have an accoun yet?"
              : `Do you have an account already?`
          }
        />
        <Button
          style={styles.underlined}
          onPress={switchAuthModeHandler}
          buttonText={isLogin ? "Sign up" : "Log in"}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.primaryLight,
    height: "100%",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  underlined: {
    color: colors.primaryMain,
    fontFamily: "primaryFont_600",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});
