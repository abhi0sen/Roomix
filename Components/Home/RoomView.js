import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
// import Room from '../../Images/Room.jpg'
import { EvilIcons } from '@expo/vector-icons';
import styles from './RoomStyle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons';

const RoomView = () => {
  const images = [
    require('../../Images/logo.jpg'),
    require('../../Images/NewToCity.jpg'),
  ]
  const [fvt, setFvt] = useState(true)
  const toogleFvt = () => {
    setFvt(!fvt);
  }
  return (
    <ScrollView>
    <View style={[styles.Container, {paddingTop: 20}]}>
      <Text style = {styles.Title}>2 BHK Flat</Text>
      <View style = {styles.Room}>
        <SliderBox images={images} />
      {/* <Image source={Room} /> */}
      </View>
      <View style={[styles.LocPrice, styles.Mt5]}>
      <Text style = {styles.TextBold}>10,000 INR/Month</Text>
      <Text style = {styles.TextBold} onPress={toogleFvt}>{(fvt)? '🤍': '❤️'}</Text>
      </View>

      <View style={[styles.DFlex, styles.Mt3]}>
      <EvilIcons style={styles.AlignSelfCenter} name="location" size={18} color="black" />
      <Text >Pimpri, Pune</Text>
      </View>

      <View style= {[ styles.Mt5, styles.Requirements]}>
        <Text style={styles.TextBold}>Requirements</Text>
        <View style={[styles.LocPrice, styles.Mt3]}>
          <Text>Gender</Text>
          <Text>Female</Text>
        </View>
        
        <View style={[styles.LocPrice, styles.Mt3]}>
          <Text>No of Roommate Required:</Text>
          <Text>5</Text>
        </View>
        
        <View style={[styles.LocPrice, styles.Mt3]}>
          <Text>Meal Preference:</Text>
          <Text>Vegetarian</Text>
        </View>

        <Text style = {styles.Mt3}>The Room partner should be non-smoker and avoid partying after 10:00 PM </Text>
      </View>

      <View style = {[styles.Mt5, styles.LastSection]}>
      <Text style={styles.TextBold}>Description</Text>
      <Text>Cozy, furnished room for rent in a quiet, leafy neighborhood. This well-lit space features a comfortable bed, ample storage, and a study desk. Shared modern kitchen and clean bathroom. High-speed internet and utilities included. Close to public transport and local... Read More</Text>
      </View>

      <View style={styles.Message}>
        <TouchableOpacity>
      <FontAwesomeIcon icon={ faComments } size={30} />
      </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
  )
}

export default RoomView
