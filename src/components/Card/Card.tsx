import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

interface CardProps {
  name: string;
  type: "document" | "component";
  onPress: () => void;
}

const Card = (props: CardProps) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.cardContainer}>
        <Ionicons
          name={
            props.type === "document"
              ? "document-text-outline"
              : "bookmark-outline"
          }
          size={24}
          color={colors.primaryMain}
        />
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    shadowColor: colors.shadow,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 13,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 10,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
    marginBottom: 16,
  },
  text: {
    fontFamily: "primaryFont_500",
    fontSize: 18,
    marginLeft: 10,
  },
});
export default Card;
