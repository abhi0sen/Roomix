import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Pressable} from 'react-native'
import Room from '../../Images/Room.jpg'
import styles from './RoomStyle' 

// const RoomCard = ({navigation, SelectedCity, SelectedState, FlatSize, TotalRent, RoommateCount, ImageUrl}) => {
const RoomCard = ({navigation, item}) => {
  
  const [fvt, setFvt] = useState(true)
  const toogleFvt = () => {
    setFvt(!fvt);
  }
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
        Description: "decription"
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
        <Pressable onPress={toogleFvt}>
        <Text>{(fvt)? '🤍': '❤️'}</Text>
        </Pressable>
        </View>

        </View>
      </View>
    </Pressable>
  )
}

export default RoomCard
