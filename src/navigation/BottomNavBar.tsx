import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ComponentsNavigation, DocsNavigation } from "./AppStack";

import colors from "../../constants/colors";
import { Text, View } from "react-native";

const BottomNavBar = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: colors.primaryMain,
          position: "absolute",
          height: 120,
          paddingHorizontal: 20,
        },
        tabBarIcon: ({ focused }) => {
          return (
            <View
              style={{
                backgroundColor: focused ? colors.white : colors.primaryMain,
                paddingHorizontal: 35,
                paddingVertical: 16,
                borderRadius: 25,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: focused ? colors.primaryMain : colors.white,
                  fontFamily: "primaryFont_600",
                  fontSize: 14,
                }}
              >
                {route.name === "Components" ? "Components" : "Documentation"}
              </Text>
            </View>
          );
        },
      })}
    >
      <BottomTab.Screen name="Documentation" component={DocsNavigation} />
      <BottomTab.Screen name="Components" component={ComponentsNavigation} />
    </BottomTab.Navigator>
  );
};

export default BottomNavBar;
