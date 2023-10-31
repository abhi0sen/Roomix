import React from 'react'
import { View, Text } from 'react-native'
import RoomCard from './RoomCard'

const Wishlist = ({navigation}) => {
  return (
    <View>
      <RoomCard navigation={navigation} />
    </View>
  )
}

export default Wishlist
