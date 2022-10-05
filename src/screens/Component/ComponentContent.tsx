import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { Divider } from "@rneui/themed";

interface ComponentContentProps {
  overview: string;
  component: React.ReactElement;
  properties?: any;
  isComponent?: boolean;
}

export const SubHeader = ({ text }) => {
  return <Text style={styles.subHeader}>{text}</Text>;
};
const ComponentContent = (props: ComponentContentProps) => {
  return (
    <View
      style={
        props.isComponent && {
          height: "100%",
          justifyContent: "space-between",
        }
      }
    >
      {!props.isComponent && (
        <>
          <SubHeader text="Overview" />
          <Text>{props.overview}</Text>
        </>
      )}

      <View style={styles.componentContainer}>{props.component}</View>
      <View>
        {props.isComponent && <Divider />}
        <SubHeader text="Properties" />
        <Divider />
        {props.properties.map((property, key) => {
          return (
            <Fragment key={key}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 15,
                  marginTop: 15,
                }}
              >
                <View>
                  <Text style={styles.propertyName}>{property.name}</Text>
                  <Text style={styles.propertyDescription}>
                    {property.description}
                  </Text>
                </View>
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{property.type}</Text>
                </View>
              </View>
              {key !== props.properties.length - 1 && <Divider />}
            </Fragment>
          );
        })}
      </View>
    </View>
  );
};

export default ComponentContent;
const styles = StyleSheet.create({
  subHeader: {
    fontSize: 16,
    fontFamily: "primaryFont_600",
    color: colors.black,
    marginBottom: 5,
    marginTop: 5,
  },
  componentContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  propertyName: {
    fontSize: 15,
    fontFamily: "primaryFont_500",
    color: colors.black,
    marginBottom: 5,
  },
  propertyDescription: {
    fontSize: 14,
    color: colors.unactive,
  },
  badgeContainer: {
    backgroundColor: colors.grey,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  badgeText: {
    color: colors.greyDark,
    fontFamily: "primaryFont_400",
  },
});
