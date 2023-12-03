import React, {useState, useEffect} from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import styles from "./Styles"
import {updateStatus} from "../../Database/Firestore"

const RequestCard = ({item}) => {
    const [isVerified, setIsVerified] = useState("Pending")
    const Images = item.ImageUrls.split(",")


    useEffect(() => {
      updateStatus(item.id, isVerified)
      // console.log(item.id)
    }, [isVerified])
  return (
    <View style={[styles.RequestBox, styles.DFlex]}>
    <Image
    source={{uri:Images[0]}}
    style={styles.RoomImg}
  />

  <View>
    <Text style={{fontSize:20, fontWeight: 'bold'}}>{item.FlatSize} </Text>
    <Text style={{fontSize:15}}>{item.AddressL1}</Text>
    <Text style={{fontSize:15}}>Roommates Required - {item.RoommateCount}</Text>

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