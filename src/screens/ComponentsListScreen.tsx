import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  Search,
  CardList,
  ScreenWrapper,
  NavBar,
  Loading,
} from "../components";
import axios from "axios";

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
    return <Loading />;
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
            allComponents={components}
            components={filteredComponents}
            route={route}
          />
        </View>
      </ScreenWrapper>
    );
};

export default ComponentListScreen;
