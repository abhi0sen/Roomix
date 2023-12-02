import React, {useState} from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import styles from "./Styles"

const RequestCard = () => {
    const [isVerified, setIsVerified] = useState("Pending")
  return (
    <View style={[styles.RequestBox, styles.DFlex]}>
    <Image
    source={require('../../Images/logo.jpg')}
    style={styles.RoomImg}
  />

  <View>
    <Text style={{fontSize:20, fontWeight: 'bold'}}>2 BHK </Text>
    <Text style={{fontSize:15}}>Pimpri, Pune</Text>
    <Text style={{fontSize:15}}>Roommates Required - 4</Text>

        {(isVerified == "Pending") ?
    <View style={[styles.DFlex, styles.ButtonGrp, styles.Mt5]}>

    <Pressable
    onPress={() => {
        setIsVerified("Verified")
    }}
     style={styles.VerifyBtn}>
        <Text>Verify</Text>
    </Pressable>
    <Pressable
    onPress={() => {
        setIsVerified("Rejected")
    }}
    style = {styles.RejectBtn}>
        <Text>Reject</Text>
    </Pressable>
    </View>
: <Text>Room Data: {isVerified} </Text>}
  </View>
    </View>
  )
}

export default RequestCard;