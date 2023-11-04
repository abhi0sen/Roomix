import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Pressable} from 'react-native'
import Room from '../../Images/Room.jpg'
import styles from './RoomStyle' 
import { doc, updateDoc } from "firebase/firestore";
import {toggleFvt} from '../../Database/Firestore'

// const RoomCard = ({navigation, SelectedCity, SelectedState, FlatSize, TotalRent, RoommateCount, ImageUrl}) => {
  const RoomCard = ({navigation, item}) => {
  // const temp = (item.isFvt==null)? item.isFvt:true
  const [fvt, setFvt] = useState(item.isFvt)
  // const toogleFvt = async () => {
  //   const newFvt= !fvt
  //   setFvt(newFvt);
  //     }

  useEffect(() => {
    toggleFvt(item.id, fvt)
  }, [fvt]);

  const Images = item.ImageUrls.split(",")
  // console.log(Images[0])
  return (
    <Pressable onPress={() => {
      navigation.navigate('RoomView', {
        FlatSize: item.FlatSize,
        imageUrls: Images,
        TotalRent: item.TotalRent,
        State: item.SelectedState,
        City: item.SelectedCity,
        Address: item.AddressL1,

        // Requirements
        Gender: "Male",
        RoommateCount: item.RoommateCount,
        otherCriteria: "The Room partner should be non-smoker and avoid partying after 10:00 PM",
        Description: item.Description,
        isFvt: item.isFvt,

      });
    }}>
      <View style={styles.Room}>
        <Image
        source={{uri:Images[0]}}
        // source={Room}
        style = {styles.RoomImg}
        onError={(error) => console.error('Image error:', error)}
        /> 
        <View style={styles.RoomDetails}>
        <View style={styles.LocPrice}>
        <Text style={styles.Title}>{item.FlatSize}</Text>
        <Text style={styles.Title}>{item.TotalRent} Rs/Month</Text>
        </View>
        
        <Text>{item.SelectedCity}, {item.SelectedState}</Text>
        
        <View style={styles.LocPrice}>
        <Text>Roommates Needed - 1/{item.RoommateCount}</Text>

        <Pressable onPress={async ()=>{
          
          setFvt(!fvt)
          
          }}>

        <Text>{(fvt) ? '❤️': '🤍'}</Text>
        </Pressable>
        </View>

        </View>
      </View>
    </Pressable>
  )
}

export default RoomCard
