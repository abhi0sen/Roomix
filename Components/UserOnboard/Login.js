import React from 'react'
import { View, Text, Image, TextInput, StyleSheet, Pressable } from "react-native"


const Login = ({navigation}) => {
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
        <View style={styles.DFlex}>
            <View style={styles.Label}>
      <Text  style={styles.Label}>
        Not a Roomix Member? <Text style={styles.Register}  onPress={() => {
                navigation.navigate("Register")
            }}>Register</Text>
      </Text>
      </View>

      <View>
            <Pressable style={styles.SignIn} onPress={()=> {
                navigation.navigate("Home")
            }}>
                <Text style={styles.SignInText}>Sign In</Text>
            </Pressable>
      </View>
      </View>

      </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: "#ffffff",
        height: "100%",
        paddingTop: 20
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
        width: 80
    },
    SignInText:{
        textAlign: "center",
        fontSize: 15,
    },
    Label: {
        alignSelf: 'center',
        marginEnd: 11
    },
    DFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10
    }
})

export default Login
