import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScreenWrapper, ChipList, NavBar } from "../../components";
import colors from "../../../constants/colors";

const ComponentDocsScreen = ({ navigation, route }) => {
  const componentName = route.params.componentName;
  const allComponents = route.params.components;
  return (
    <>
      <NavBar isPadding isBackButton navigation={navigation} />
      <ChipList
        allComponents={allComponents}
        componentName={componentName}
        navigation={navigation}
        isDocumentation
      />
      <ScreenWrapper>
        <Text style={styles.componentName}>{componentName}</Text>
        <View style={styles.componentContainer}>
          <View style={styles.componentOverviewContainer}>
            <Text>Here will be the documentation of {componentName}</Text>
          </View>
        </View>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    borderRadius: 10,
    shadowOffset: {
      width: 10,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 260,
    flex: 1,
  },
  componentName: {
    fontFamily: "primaryFont_700",
    fontSize: 18,
  },
  componentOverviewContainer: {
    height: 420,
    backgroundColor: colors.primaryMain,
  },
});

export default ComponentDocsScreen;
