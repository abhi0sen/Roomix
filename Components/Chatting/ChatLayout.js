import React, { useState } from 'react'
import {View, Text, TextInput, Pressable} from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons';
import styles from './ChatStyles'

const ChatLayout = () => {
  const [msg, setMsg] = useState("")
  return (
    <View style={[styles.Container, styles.Pt3]}>
      <View style={styles.Sender}>
        <Text style={styles.SenderTxt}>Hello, I am intrested to visited the flat. So can you show it to me?</Text>
      </View>

      <View style={styles.Reciever}>
        <Text  style={styles.RecieverTxt}>Message by Reciever</Text>
      </View>

    <View style={[styles.dFlex, styles.Message]}>
      <View style={[styles.MessageGrp1]}>
    <Entypo name="emoji-happy" size={24} color="black" style={styles.AlignSelfCenter} />
        <TextInput
        multiline
        placeholder="Write Your Message" 
        style={styles.MsgBox}
        onChangeText={setMsg}
        value={msg}
        />
        </View>
        <Pressable onPress={() => {
          setMsg("")
        }}>
        <Feather name="send" size={20} color="#FFFFFF" style={[styles.SendBtn, styles.AlignSelfCenter]} />
        </Pressable>
    </View>

    </View>
  )
}

export default ChatLayout
