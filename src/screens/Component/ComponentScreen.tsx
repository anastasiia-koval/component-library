import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScreenWrapper, ChipList, NavBar, Loading } from "../../components";
import colors from "../../../constants/colors";
import { getTheComponentToDisplay } from "../../../util/componentPreview";
import ComponentContent from "./ComponentContent";
import axios from "axios";

interface ComponentScreenProps {
  navigation?: any;
  route?: any;
}
const ComponentScreen = ({ navigation, route }: ComponentScreenProps) => {
  const componentName = route.params.componentName;
  const allComponents = route.params.components;
  const componentOverview = route.params.componentOverview;
  const componentID = route.params.componentID;
  const [properties, setProperties] = useState();

  useEffect(() => {
    getComponentProperties();
  }, [componentID]);

  const getComponentProperties = () => {
    axios
      .get(
        `https://632dbd36519d17fb53c585fb.mockapi.io/api/components/${componentID}/properties`
      )
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  };

  if (!properties) {
    return <Loading />;
  } else
    return (
      <>
        <NavBar isPadding isBackButton navigation={navigation} />
        <ChipList
          allComponents={allComponents}
          componentName={componentName}
          navigation={navigation}
          isComponent
        />
        <ScreenWrapper>
          <Text style={styles.componentName}>{componentName}</Text>
          <View style={styles.componentContainer}>
            <ComponentContent
              overview={componentOverview}
              component={getTheComponentToDisplay(componentName)}
              properties={properties}
              isComponent
            />
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

export default ComponentScreen;
