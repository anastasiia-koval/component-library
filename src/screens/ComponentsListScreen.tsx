import React, { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { Search, CardList, ScreenWrapper, NavBar } from "../components";
import axios from "axios";
import { AuthContext } from "../../store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ComponentListScreen = ({ navigation, route }) => {
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

  if (!components && !filteredComponents) {
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
            cardTypes="component"
            navigation={navigation}
            components={filteredComponents}
            route={route}
          />
        </View>
      </ScreenWrapper>
    );
};

export default ComponentListScreen;
