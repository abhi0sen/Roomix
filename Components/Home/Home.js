import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
  Text,
  SafeAreaView,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import RoomCard from "./RoomCard";
import styles from "./RoomStyle";
import { ViewRooms, db } from "../../Database/Firestore";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(data.map((item)=>{
  //   if(item.Description = "Hai Shri krishna"){
  //     return item;
  //   }
  // }))

  useEffect(() => {
    async function fetchData() {
      const roomsData = await ViewRooms();
      setData(roomsData);
      
      if(searchText == ""){
        setData(roomsData)
      }
      else{
        setData(roomsData.map((item)=>{
            if(searchText in item.Description){
              return item;
            }
        }))
      }
    }

    fetchData();
  }, [searchText]);

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.TopBar}>
          <View style={styles.SearchBar}>
            <EvilIcons
              style={styles.SearchIcon}
              name="search"
              size={27}
              color="#c3c2c2"
            />

            <TextInput placeholder="Search" onChangeText={setSearchText} />
          </View>

          <View style={styles.Filter}>
            <AntDesign name="filter" size={24} color="black" />
          </View>
        </View>

        {/* <RoomCard navigation={navigation} /> */}

        <View>
          <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item})=>{return <RoomCard item = {item} navigation={navigation} db = {db} />}}
          />
        </View>

        {/* <RoomCard navigation={navigation} />
        <RoomCard navigation={navigation} />
        <RoomCard navigation={navigation} /> */}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
