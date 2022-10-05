import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";
import colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

interface SearchInterface {
  placeholder: string;
  setFilteredComponents: any;
  allComponents: any;
}
const Search = (props: SearchInterface) => {
  const [search, setSearch] = useState<string>("");

  const updateSearch = (search) => {
    setSearch(search);

    const filtered = props.allComponents.filter((component) =>
      component.name.toLowerCase().includes(search.toLowerCase())
    );
    props.setFilteredComponents(filtered);
  };
  return (
    <SearchBar
      round
      platform="default"
      placeholder={props.placeholder}
      value={search}
      onChangeText={(searchquery) => {
        updateSearch(searchquery);
      }}
      inputContainerStyle={styles.input}
      containerStyle={styles.viewContainer}
      searchIcon={
        <Ionicons name="search" size={20} color={colors.primaryMain} />
      }
    />
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginTop: 22,
    padding: 0,
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 10,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
});

export default Search;
