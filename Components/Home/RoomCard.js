import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Pressable} from 'react-native'
import Room from '../../Images/Room.jpg'
import styles from './RoomStyle' 
import { doc, updateDoc } from "firebase/firestore";
import {toggleFvt} from '../../Database/Firestore'
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


// const RoomCard = ({navigation, SelectedCity, SelectedState, FlatSize, TotalRent, RoommateCount, ImageUrl}) => {
  const RoomCard = ({navigation, item}) => {
  const [edit, setEdit] = useState(false);
  const [fvt, setFvt] = useState(item.isFvt)
  // const toogleFvt = async () => {
  //   const newFvt= !fvt
  //   setFvt(newFvt);
  //     }

  const isAdmin = async () => {
    try {
        const userType = await AsyncStorage.getItem("userType");
        if (userType == "admin"){
          setEdit(true)
        }
    } catch (error) {
        console.error("Error retrieving user ID:", error);
    }
  };

  
  useEffect(() => {
    isAdmin()
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
        Gender: item.Gender,
        RoommateCount: item.RoommateCount,
        otherCriteria: item.OtherCriteria,
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
        <Text>Roommates Needed - {item.RoommateCount}</Text>

        {edit? 
        <Pressable>
        <Feather name="edit-2" size={18} color="black" />
        </Pressable>
        :
        <Pressable onPress={()=>{
          setFvt(!fvt)
          }}>
        <Text>{(fvt) ? '🤍' : '❤️'}</Text>
        </Pressable>
        }
        </View>

        </View>
      </View>
    </Pressable>
  )
}

export default RoomCard
