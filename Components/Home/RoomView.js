import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
// import Room from '../../Images/Room.jpg'
import { EvilIcons } from '@expo/vector-icons';
import styles from './RoomStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';

const RoomView = ({route}) => {
  // const route = useRoute();
  const {FlatSize, imageUrls, TotalRent, State, City, Address, Gender, RoommateCount, otherCriteria, Description} = route.params;
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
      <Text style = {styles.Title}>{FlatSize} Flat</Text>
      <View style = {styles.Room}>
        <SliderBox images={imageUrls} />
      </View>
      <View style={[styles.LocPrice, styles.Mt5]}>
      <Text style = {styles.TextBold}>{TotalRent} Rs/Month</Text>
      <Text style = {styles.TextBold} onPress={toogleFvt}>{(fvt)? '🤍': '❤️'}</Text>
      </View>

      <View style={[styles.DFlex, styles.Mt3]}>
      <EvilIcons style={styles.AlignSelfCenter} name="location" size={18} color="black" />
      <Text >{Address}, {City}</Text>
      </View>

      <View style= {[ styles.Mt5, styles.Requirements]}>
        <Text style={styles.TextBold}>Requirements</Text>
        <View style={[styles.LocPrice, styles.Mt3]}>
          <Text>Gender</Text>
          <Text>{Gender}</Text>
        </View>
        
        <View style={[styles.LocPrice, styles.Mt3]}>
          <Text>No of Roommate Required:</Text>
          <Text>{RoommateCount}</Text>
        </View>
        
        <View style={[styles.LocPrice, styles.Mt3]}>
          <Text>Meal Preference:</Text>
          <Text>Vegetarian</Text>
        </View>

        <Text style = {styles.Mt3}>{otherCriteria} </Text>
      </View>

      <View style = {[styles.Mt5, styles.LastSection]}>
      <Text style={styles.TextBold}>Description</Text>
      <Text>{Description}</Text>
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
