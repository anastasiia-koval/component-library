import React from "react";
import { Avatar as RNEAvatar } from "@rneui/themed";
import colors from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

interface AvatarProps {
  url: string;
}
const Avatar = (props: AvatarProps) => {
  return (
    // <LinearGradient
    //   start={[1, 0.5]}
    //   end={[0, 0.5]}
    //   colors={["#6E69DB", "#E8688D"]}
    //   style={{ borderRadius: 10, height: 36 }}
    // >
    <RNEAvatar
      size={36}
      containerStyle={{
        borderRadius: 10,
        marginVertical: 5,
      }}
      source={{
        uri: props.url,
      }}
    />
    // </LinearGradient>
  );
};

export default Avatar;
