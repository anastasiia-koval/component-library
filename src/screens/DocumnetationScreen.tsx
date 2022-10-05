import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Search, CardList, ScreenWrapper, NavBar } from "../components";
import axios from "axios";

const DocumentationScreen = ({ navigation, route }) => {
  const [components, setComponents] = useState();
  const [filteredComponents, setFilteredComponents] = useState();
  useEffect(() => {
    getComponents();
  }, []);
  const getComponents = () => {
    axios
      .get("https://632dbd36519d17fb53c585fb.mockapi.io/api/components")
      .then((res) => {
        setComponents(res.data);
        setFilteredComponents(res.data);
      })
      .catch((err) => console.log("err :>> ", err));
  };
  if (!components) {
    return <Text>AAA</Text>;
  } else
    return (
      <ScreenWrapper>
        <NavBar navigation={navigation} />
        <Search
          placeholder="Discover UI library easily :)"
          setFilteredComponents={setFilteredComponents}
          allComponents={components}
        />
        <View style={{ marginBottom: 250, marginTop: 17 }}>
          <CardList
            cardTypes="document"
            navigation={navigation}
            components={filteredComponents}
            route={route}
          />
        </View>
      </ScreenWrapper>
    );
};

export default DocumentationScreen;
