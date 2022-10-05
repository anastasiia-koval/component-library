import React from "react";
import { Button as RNEUIButton } from "@rneui/themed";

interface ButtonProps {
  title: string;
  type?: "outline" | "clear" | "solid";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return <RNEUIButton {...props} />;
};

export default Button;
