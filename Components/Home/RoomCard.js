import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Pressable} from 'react-native'
import Room from '../../Images/Room.jpg'
import styles from './RoomStyle' 

const RoomCard = ({navigation}) => {
  const [fvt, setFvt] = useState(true)
  const toogleFvt = () => {
    setFvt(!fvt);
  }
  return (
    <Pressable onPress={() => {
      navigation.navigate('RoomView');
    }}>
      <View style={styles.Room}>
        <Image
        source={Room}
        alt='Roomix'
        style = {styles.RoomImg}
        />
        <View style={styles.RoomDetails}>
        <View style={styles.LocPrice}>
        <Text style={styles.Title}>Pimpri, Pune</Text>
        <Text style={styles.Title}>5000 INR/Month</Text>
        </View>
        
        <Text>2BHK</Text>
        
        <View style={styles.LocPrice}>
        <Text>Roommates Needed - 3/4</Text>
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
