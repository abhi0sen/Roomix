import React from 'react'
import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import styles from './ChatStyles'
import Room from '../../Images/Room.jpg'
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ChatList = ({navigation}) => {
  return (
    <ScrollView style={styles.Container}>
      <Pressable style={[styles.dFlex, styles.ParentView]} onPress={() => {
        navigation.navigate("ChatLayout")
      }}>
        <View >
          <Image
          source={Room}
          style = {styles.ProfImg} />
          </View>

          <View  style={[styles.dFlex, styles.Ms4]}>
            <View>
              <Text style= {styles.Title}>2 BHK</Text>
              <Text style= {styles.Mh3}>This is the Recent Message</Text>
              <View style={styles.dFlex}>
              <EvilIcons style={styles.AlignSelfCenter} name="location" size={18} color="black" />
      <Text>Pimpri, Pune</Text>
      </View>
      </View>


          </View>
      <View style={[styles.AlignSelfCenter, styles.FloatEnd]}>
      <Feather name="more-vertical" size={24} color="black" />
      </View>
      </Pressable>
    </ScrollView>
  )
}

export default ChatList
