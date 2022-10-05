import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Bounce } from "react-native-animated-spinkit";
import colors from "../../../constants/colors";

const Loading = () => {
  return (
    <View style={styles.rootContainer}>
      <Bounce color={colors.primaryMain} size={60} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: colors.primaryLight,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
