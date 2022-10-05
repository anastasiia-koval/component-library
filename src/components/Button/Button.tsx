import React from "react";
import { View, Text, Pressable } from "react-native";

interface ButtonProps {
  buttonText: string;
  onPress: any;
  style?: any;
}
const Button = ({ buttonText, onPress, style }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={style}>
        <Text style={style}>{buttonText}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
