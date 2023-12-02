import React, {useState, useEffect} from 'react'
import {FlatList, SafeAreaView, ScrollView} from 'react-native'
import RoomCard from '../Home/RoomCard'
import { ViewRooms, db } from "../../Database/Firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';


const MyListing = ({navigation}) => {
    const [data, setData] = useState([]);
    
    const getUserId = async () => {
        try {
            const userId = await AsyncStorage.getItem("userId");
            return userId
        } catch (error) {
            console.error("Error retrieving user ID:", error);
            return 0;
        }
    };
    
    // Example usage:
    // getUserId().then(result => console.log(result));
    

    useEffect(() => {
        async function fetchData() {
            const roomsData = await ViewRooms();
            setData(roomsData);
            const id = await getUserId()
            
              const filteredData = roomsData.filter(
                        (item) =>
                        item.UserID == id
                      );
                      setData(filteredData);
            }
            // console.log(getUserId)
    
        fetchData();
      }, []);

  return (
    <SafeAreaView style={{height: '100%', marginHorizontal: 10}}>
    <ScrollView>
      <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <RoomCard item={item} navigation={navigation} db={db} />;
          }}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
        />

    </ScrollView>
    </SafeAreaView>
  )
}

export default MyListing
