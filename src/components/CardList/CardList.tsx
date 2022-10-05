import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Card from "../Card/Card";

interface CardListProps {
  navigation: any;
  route: any;
  components: Array<any>;
  allComponents: Array<any>;
  cardTypes: "document" | "component";
}
const CardList = ({
  navigation,
  components,
  cardTypes,
  allComponents,
}: CardListProps) => {
  const navigateTo =
    cardTypes === "document"
      ? "ComponentDocumentation"
      : cardTypes === "component" && "ComponentOverview";

  return (
    <ScrollView
      style={styles.cardListContainer}
      showsVerticalScrollIndicator={false}
    >
      {components?.length ? (
        components.map((component, index) => {
          return (
            <Card
              key={index}
              name={component.name}
              type={cardTypes}
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
        })
      ) : (
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text style={{ fontFamily: "primaryFont_500" }}>No founds :(</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardListContainer: {
    marginVertical: 20,
  },
});

export default CardList;
