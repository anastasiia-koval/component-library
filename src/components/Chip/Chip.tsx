import React from "react";
import { Chip as RNEChip } from "@rneui/themed";
import colors from "../../../constants/colors";
import { Platform } from "react-native";

interface ChipProps {
  title: string;
  selected?: boolean;
  onPress: () => void;
}
const Chip = (props: ChipProps) => {
  return (
    <RNEChip
      title={props.title}
      onPress={props.onPress}
      buttonStyle={{
        backgroundColor: props.selected ? colors.selectedChip : colors.grey,
        marginRight: Platform.OS === "android" ? 8 : 0,
      }}
      titleStyle={{
        color: props.selected ? colors.primaryMain : colors.greyDark,
      }}
      style={{ marginRight: 10 }}
    />
  );
};

export default Chip;
