import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const IsRoommate = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Question}>What do you want?</Text>
      <View style={styles.DFlex}>

      <Pressable style={styles.Input} onPress={() => {
        navigation.navigate('RoomDetails')}} >
        <Text style={styles.InputText}>Roommate</Text>
      </Pressable>

      <Pressable style={styles.Input} onPress={()=> {
        navigation.navigate("Home")
      }}>
        <Text style={styles.InputText}>Room</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default IsRoommate

const styles = StyleSheet.create({
    Container:{
    // alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#ffffff",
      height: "100%",
      paddingHorizontal: 30
    },
    Question: {
        fontSize: 18,
    },
    Input:{
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        width: '45%'
    },
    InputText:{
        textAlign: 'center',
        fontSize: 15
    },
    DFlex:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 20
    }
})
