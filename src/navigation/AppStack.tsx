import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ComponentScreen,
  ComponentListScreen,
  DocumentationScreen,
  ComponentDocsScreen,
} from "../screens";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";

export const ComponentsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ComponentList" component={ComponentListScreen} />
      <Stack.Screen name="ComponentOverview" component={ComponentScreen} />
    </Stack.Navigator>
  );
};

export const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export const DocsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DocumentationList" component={DocumentationScreen} />
      <Stack.Screen
        name="ComponentDocumentation"
        component={ComponentDocsScreen}
      />
    </Stack.Navigator>
  );
};
