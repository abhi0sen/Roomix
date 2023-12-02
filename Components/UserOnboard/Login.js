import React, { useState } from 'react'
import { View, Text, Image, TextInput, StyleSheet, Pressable, SafeAreaView, ScrollView } from "react-native"
import {Loggedin} from "../../Database/Firestore"

const Login = ({navigation}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: "#fff"}}>
    <ScrollView>
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
                Loggedin(username, password, navigation)
                // navigation.navigate("Home")
            }}>
                <Text style={styles.SignInText}>Sign In</Text>
            </Pressable>
      </View>
      </View>

      </View>
      </ScrollView>
      </SafeAreaView>
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
