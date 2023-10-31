import React from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from './ChatStyles'

const ChatLayout = () => {
  return (
    <View>
      <View style={styles.Sender}>
        <Text style={styles.SenderTxt}>Hello, I am intrested to visited the flat. So can you show it to me?</Text>
      </View>

      <View style={styles.Reciever}>
        <Text  style={styles.RecieverTxt}>Message by Reciever</Text>
      </View>

    <View style={{flexDirection: "row"}}>
        <Text>😊</Text>
        <TextInput
        multiline
        placeholder="Write Your Message" />
        <Text>Send</Text>
    </View>

    </View>
  )
}

export default ChatLayout
