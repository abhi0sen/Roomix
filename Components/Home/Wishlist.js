import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import RoomCard from './RoomCard'
import { ViewRooms, db } from "../../Database/Firestore";

const Wishlist = ({navigation}) => {
  const [data, setData] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      const roomsData = await ViewRooms();
      setData(roomsData);
    }

    fetchData();
  }, [dataUpdated]);

  // setInterval(()=>{
  //   setDataUpdated(!dataUpdated)
  // }, 2000)
  

  
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

export default Wishlist
