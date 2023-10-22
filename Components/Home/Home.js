import React from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import RoomCard from "./RoomCard";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.TopBar}>
          <View style={styles.SearchBar}>
            <EvilIcons name="search" size={24} color="#c3c2c2" />
            <TextInput placeholder="Search" />
          </View>

          <View style={styles.Filter}>
            <AntDesign name="filter" size={24} color="black" />
          </View>
        </View>

        <RoomCard />
        <RoomCard />
        <RoomCard />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#ffffff",
    height: "100%",
    paddingHorizontal: 20,
  },
  SearchBar: {
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 20,
    padding: 5,
    width: "90%",
    borderColor: "#A5A3A3",
  },
  TopBar: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    // padding: 5
  },
  Filter: {
    alignSelf: "center",
    marginLeft: 5,
  },
});
