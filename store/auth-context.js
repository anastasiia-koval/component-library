import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  name: "",
  authenticate: (a) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [name, setName] = useState();

  function authenticate(token) {
    setAuthToken(token);

    const decodedToken = jwt_decode(token);
    setName(decodedToken.name);
    AsyncStorage.setItem("token", token.toString());
    AsyncStorage.setItem("name", decodedToken.name);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    name: name,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
