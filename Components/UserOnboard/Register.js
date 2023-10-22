import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native'

const Register = ({navigation}) => {
  return (
        <View style={styles.Container}>
      <Image source={require("../../Images/UserOnboard/login.jpg")} />
      <TextInput
      placeholder='Username'
      style={styles.Textinput}
      />
      <TextInput
      placeholder='Password'
      style={styles.Textinput}
      />
      <TextInput
      placeholder='Mobile Number'
      style={styles.Textinput}
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
                navigation.navigate("isRoommate")
            }} >
                <Text style={styles.SignInText}>Register</Text>
            </Pressable>
      </View>
      </View>
      </View>
  )
}

export default Register


const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: "#ffffff",
        height: "100%",
        // paddingTop: 20,
    },

    Textinput:{
        borderBottomWidth: 1,
        borderBottomColor: "#B7B7B7",
        width: "80%",
        padding: 5,
        marginBottom: 20
    },
    Register: {
        color: "#0084CE"
    },
    SignIn: {
        backgroundColor: '#FFBA1B',
        padding: 10,
        borderRadius: 50,
        margin: "auto",
        fontSize: 20,
        width: 100,
        paddingHorizontal: 15
    },
    SignInText:{
        textAlign: "center",
        fontSize: 15,
    },
    Label: {
        alignSelf: 'center',
        marginEnd: 24
    },
    DFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10
    }
})

