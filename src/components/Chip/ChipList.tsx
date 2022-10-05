import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import colors from "../../../constants/colors";
import Chip from "./Chip";

interface ChipListProps {
  allComponents: any;
  componentName: string;
  navigation: any;
  isComponent?: boolean;
  isDocumentation?: boolean;
}

const ChipList = ({
  allComponents,
  componentName,
  navigation,
  isComponent,
  isDocumentation,
}: ChipListProps) => {
  const navigateTo = isComponent
    ? "ComponentOverview"
    : isDocumentation && "ComponentDocumentation";
  return (
    <View style={styles.chipList}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {allComponents.map((component, index) => {
          return (
            <Chip
              title={component.name}
              key={index}
              selected={component.name === componentName}
              onPress={() =>
                navigation.navigate(navigateTo, {
                  componentName: component.name,
                  componentOverview: component.overview,
                  componentID: component.id,
                  components: allComponents,
                })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chipList: {
    backgroundColor: colors.primaryLight,
    paddingVertical: 10,
    paddingLeft: 4,
  },
});

export default ChipList;
