import React from "react";
import { View, StyleSheet, TextInput, ScrollView, Pressable } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import RoomCard from "./RoomCard";
import styles from "./RoomStyle";

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.TopBar}>
          <View style={styles.SearchBar}>
            <EvilIcons style={styles.SearchIcon} name="search" size={27} color="#c3c2c2" />
            <TextInput placeholder="Search" />
          </View>

          <View style={styles.Filter}>
            <AntDesign name="filter" size={24} color="black" />
          </View>
        </View>

        <RoomCard navigation={navigation} />
        <RoomCard navigation={navigation} />
        <RoomCard navigation={navigation} />
        <RoomCard navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Home;
