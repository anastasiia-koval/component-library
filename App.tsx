import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./constants/colors";
import {
  useFonts,
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_700Bold,
} from "@expo-google-fonts/baloo-bhai-2";
import BottomNavBar from "./src/navigation/BottomNavBar";
import { AuthNavigation } from "./src/navigation/AppStack";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { BalooBhaijaan_Regular400 } from "@expo-google-fonts/baloo-bhaijaan";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "./src/components";

export const AppNavigation = () => {
  const authCntx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCntx.isAuthenticated ? <AuthNavigation /> : <BottomNavBar />}
    </NavigationContainer>
  );
};

export const Root = () => {
  const authCntx = useContext(AuthContext);
  const [isTryingToLogin, setIsTryingToLogin] = useState<boolean>(true);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCntx.authenticate(storedToken);
      }
      setIsTryingToLogin(false);
    }
    fetchToken();
  }, []);

  if (isTryingToLogin) {
    return <Loading />;
  }

  return <AppNavigation />;
};

export default function App() {
  let [fontsLoaded] = useFonts({
    primaryFont_400: BalooBhai2_400Regular,
    primaryFont_500: BalooBhai2_500Medium,
    primaryFont_700: BalooBhai2_700Bold,
    primaryFont_600: BalooBhaijaan_Regular400,
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style="auto" />
        </SafeAreaView>
        <AuthContextProvider>
          <Root />
        </AuthContextProvider>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLight,
  },
  safeArea: {
    marginHorizontal: 22,
    backgroundColor: colors.primaryLight,
  },
});
