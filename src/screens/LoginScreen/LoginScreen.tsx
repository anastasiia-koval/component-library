import React, { useState, useContext } from "react";
import { Alert, View } from "react-native";
import { AuthContext } from "../../../store/auth-context";
import { AuthContent, Loading } from "../../components";
import { login } from "../../../util/auth";

const LoginScreen = ({ navigation }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticated(true);
    try {
      const token = await login(email, password);
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
      <View>
        <AuthContent
          isLogin
          navigation={navigation}
          onAuthenticate={loginHandler}
        />
      </View>
    );
  }
};

export default LoginScreen;
