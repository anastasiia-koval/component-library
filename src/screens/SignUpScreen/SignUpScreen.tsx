import React, { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { AuthContext } from "../../../store/auth-context";
import { createUser } from "../../../util/auth";
import { AuthContent, Loading } from "../../components";

const SignUpScreen = ({ navigation }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const authCtx = useContext(AuthContext);

  async function signUpHandler({ email, password, userName }) {
    setIsAuthenticated(true);
    try {
      const token = await createUser(email, password, userName);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication failed!", "OOOps, something went wrong");
      setIsAuthenticated(false);
    }
  }

  if (isAuthenticated) {
    return <Loading />;
  } else {
    return (
      <AuthContent
        isLogin={false}
        navigation={navigation}
        onAuthenticate={signUpHandler}
      />
    );
  }
};

export default SignUpScreen;
