import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, Button, Pressable } from 'react-native';
import Styles from "./Styles"

export default function NewToCity() {
  const [screen, setScreen] = useState(1);
  if (screen == 1){
  return (
    <View style={Styles.Container}>
      <Image source={require("../../Images/NewToCity.jpg")}></Image>

      <Text style={Styles.WelcomeText}>New to The City?</Text>

      <Image style={Styles.ProgressBar} source={require("../../Images/ProgressBar1.jpg")} />

      <Pressable style = {Styles.NextButton} onPress={()=>{setScreen(2)}}>
      <Text style={Styles.NextText}>Next</Text>
      </Pressable>

    </View>
  );
}
else if (screen == 2){
  return (
    <View style={Styles.Container}>
    <Image source={require("../../Images/Roommate.jpg")}></Image>

    <Text style={Styles.WelcomeText}>Looking For a Roommate?</Text>

    <Image style={Styles.ProgressBar} source={require("../../Images/ProgressBar2.jpg")} />

    <Pressable style = {Styles.NextButton} onPress={()=> {setScreen(3)}}>
    <Text style={Styles.NextText}>Next</Text>
    </Pressable>

  </View>
  );
}
else{
  return (
    <View style={Styles.Container}>
    <Image source={require("../../Images/Explore.jpg")}></Image>

    <Text style={Styles.WelcomeText}>Let’s Explore</Text>

    <Image style={Styles.ProgressBar} source={require("../../Images/ProgressBar3.jpg")} />

    <Pressable style = {Styles.NextButton} onPress={()=>{
      _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            '@MySuperStore:key',
            'I like to save it.',
          );
        } catch (error) {
          // Error saving data
        }
      };
    }}>
    <Text style={Styles.NextText}>Get Started</Text>
    </Pressable>

  </View>
    );
}
}
