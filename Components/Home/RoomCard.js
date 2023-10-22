import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Image, Pressable} from 'react-native'
import Room from '../../Images/Room.jpg'

const RoomCard = () => {
  const [fvt, setFvt] = useState(true)
  const toogleFvt = () => {
    setFvt(!fvt);
  }
  return (
    <Pressable >
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

const styles = StyleSheet.create({
  Room: {
    marginTop: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  RoomImg:{
    width: "100%",
    objectFit: 'cover'
  },
  RoomDetails:{
    padding: 10
  },
  LocPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})