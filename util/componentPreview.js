import { Button, Slider, Avatar } from "../src/component-library";
import { Text } from "react-native";

export const getTheComponentToDisplay = (componentName) => {
  switch (componentName) {
    case "Button": {
      return <Button title="Label" />;
    }
    case "Slider": {
      return <Slider />;
    }
    case "Avatar": {
      return (
        <Avatar url="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024" />
      );
    }
    default: {
      return <Text>No component to display</Text>;
    }
  }
};
