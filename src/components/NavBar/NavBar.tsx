import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../../constants/colors";
import Avatar from "../Avatar/Avatar";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../../store/auth-context";

interface NavBarProps {
  routeName?: string;
  isPadding?: boolean;
  isBackButton?: boolean;
  navigation?: any;
}
const NavBar = ({ navigation, ...props }: NavBarProps) => {
  const authCtx = useContext(AuthContext);
  return (
    <View
      style={[
        styles.navigation,
        { paddingHorizontal: props.isPadding ? 22 : 0 },
      ]}
    >
      {props.isBackButton ? (
        <View style={styles.iconContainer}>
          <Ionicons
            name="chevron-back"
            size={26}
            onPress={() => navigation.goBack()}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.greetings}>Good morning,</Text>
          <Text style={styles.userName}>{authCtx.name}</Text>
        </View>
      )}
      <Pressable onPress={authCtx.logout}>
        <Avatar />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.primaryLight,
    paddingBottom: 10,
  },
  userName: {
    color: colors.primaryMain,
    fontWeight: "600",
    fontSize: 20,
    fontFamily: "primaryFont_600",
  },
  greetings: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "primaryFont_400",
  },
  iconContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default NavBar;
