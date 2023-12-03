import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import RequestCard from './RequestCard'
import styles from "./Styles"
import {updateStatus, ViewRooms} from "../../Database/Firestore"

const Request = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("Pending")

  useEffect(() => {
    async function fetchData() {
        const roomsData = await ViewRooms();       
          const filteredData = roomsData.filter(
            (item) =>
              item.status == "Pending"
          );
          setData(filteredData);
          // setData(roomsData);
      }
    fetchData();
  }, [data]);


  return (
    <View style={styles.Container}>
      {(data.length != 0)?
      <FlatList 
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return <RequestCard item = {item} />;
      }}
      />
    :
    <View> 
    <Text style={{marginTop: "70%", fontSize: 18, alignSelf: "center"}}>All Done For Today!!</Text>
     <Text style={{marginTop: 5, fontSize: 18, alignSelf: "center"}}>No More Request</Text>
     </View>
     }
    </View>
  )
}

export default Request
