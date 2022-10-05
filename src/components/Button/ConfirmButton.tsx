import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

interface ConfirmButtonProps {
  buttonText: string;
  onPress: () => void;
}
const ConfirmButton = ({ buttonText, onPress }: ConfirmButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    marginTop: 25,
  },
  button: {
    backgroundColor: colors.primaryMain,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "primaryFont_600",
    color: colors.white,
    fontSize: 16,
  },
});
