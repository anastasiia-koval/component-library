import React from "react";
import { Avatar as RNEAvatar } from "@rneui/themed";
import colors from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const Avatar = () => {
  return (
    <LinearGradient
      start={[1, 0.5]}
      end={[0, 0.5]}
      colors={["#6E69DB", "#E8688D"]}
      style={{ borderRadius: 10, height: 36 }}
    >
      <RNEAvatar
        size={36}
        containerStyle={{
          borderRadius: 10,
          marginVertical: 5,
          //   borderColor: colors.primaryMain,
          //   borderWidth: 2,
        }}
        // imageProps={{ containerStyle: { resizeMode: "contain" } }}
        source={{
          uri: "https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024",
        }}
      />
    </LinearGradient>
  );
};

export default Avatar;
