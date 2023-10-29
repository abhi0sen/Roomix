import React, { useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native'
import styles from './Styles'
import { Registration } from '../../Database/Firestore'


const Register = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
  return (
    // <ScrollView>
        <View style={styles.Container}>
      <Image source={require("../../Images/UserOnboard/login.jpg")} />
      <TextInput
      placeholder='Username'
      style={styles.Textinput}
      onChangeText={setUsername}
      />
      <TextInput
      placeholder='Password'
      style={styles.Textinput}
        onChangeText={setPassword}
      />
      <TextInput
      placeholder='Mobile Number'
      style={styles.Textinput}
      onChangeText={setMobile}
      />
        <View style={styles.DFlex}>
            <View style={styles.Label}>
      <Text  style={styles.Label}>
        Already a Roomix? <Text style={styles.Register}  onPress={() => {
                navigation.navigate("Login")
            }}>Sign In</Text>
      </Text>
      </View>

      <View>
            <Pressable style={styles.SignIn} onPress={() => {
                // Registration(username, password, mobile)
                navigation.navigate("isRoommate")
                console.log(username, password, mobile)
            }} >
                <Text style={styles.SignInText}>Register</Text>
            </Pressable>
      </View>
      </View>
      {/* </ScrollView> */}
      </View>
  )
}

export default Register
