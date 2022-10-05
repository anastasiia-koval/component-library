import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../../constants/colors";

interface ScreenWrapperProps {
  children: React.ReactNode;
}
const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return <View style={styles.mainContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primaryLight,
    height: "100%",
    paddingHorizontal: 22,
  },
});

export default ScreenWrapper;
