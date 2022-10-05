import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import colors from "../../../constants/colors";
import ConfirmButton from "../Button/ConfirmButton";
import Input from "../Input/Input";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredUserName, setEnteredUserName] = useState("");

  const {
    email: emailIsInvalid,
    userName: userNameIsValid,
    password: passwordIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "userName":
        setEnteredUserName(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      userName: enteredUserName,
      password: enteredPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.header}>{isLogin ? "Log in" : "Sign up"}</Text>
      </View>
      <Input
        label="Email *"
        onUpdateValue={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
      />
      {!isLogin && (
        <Input
          label="Name *"
          onUpdateValue={updateInputValueHandler.bind(this, "userName")}
          value={enteredUserName}
          isInvalid={userNameIsValid}
        />
      )}
      <Input
        label="Password *"
        onUpdateValue={updateInputValueHandler.bind(this, "password")}
        secure
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
      />
      <ConfirmButton buttonText="Submit" onPress={submitHandler} />
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  header: {
    fontFamily: "primaryFont_600",
    fontSize: 26,
    color: colors.primaryMain,
  },
  form: {
    display: "flex",
    paddingHorizontal: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});
