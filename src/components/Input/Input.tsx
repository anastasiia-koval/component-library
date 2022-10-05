import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import colors from "../../../constants/colors";

interface InputProps {
  label: string;
  keyboardType?: "email-address" | "phone-pad";
  secure?: boolean;
  onUpdateValue: ((text: string) => void) | undefined;
  value: string;
  isInvalid: boolean;
}
const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={"none"}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    alignSelf: "stretch",
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 10,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
  label: {
    color: colors.greyDark,
    marginBottom: 4,
    fontFamily: "primaryFont_400",
    fontSize: 16,
  },
  labelInvalid: {
    color: colors.error,
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    borderRadius: 10,
    fontSize: 16,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  inputInvalid: {
    borderColor: colors.error,
    borderWidth: 1,
  },
});
export default Input;
