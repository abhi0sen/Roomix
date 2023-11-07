import React, {useState, useEffect} from 'react';
import storage from '../Storage';
import { Text, Image, View, Button, Pressable } from 'react-native';
import Styles from "./Styles"
import AsyncStorage from '@react-native-async-storage/async-storage';

const setNewInstall = async(status) => {
  await AsyncStorage.setItem("NewInstall", status)
}

const getNewInstall = async() => {
  const NewInstall = await AsyncStorage.getItem("NewInstall")
  // return NewInstall
}

async function checkIfFreshlyInstalled() {
  try {
    const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
    return isFirstLaunch === null || isFirstLaunch === 'true';
  } catch (error) {
    console.error(error);
    return true; // Assume first launch in case of an error
  }
}

export default function NewToCity({navigation}) {
  const [isFreshlyInstalled, setIsFreshlyInstalled] = useState(false);

  useEffect(() => {
    checkIfFreshlyInstalled().then((result) => {
      setIsFreshlyInstalled(result);
      if (result) {
        // Set the flag to indicate that this is not the first launch
        AsyncStorage.setItem('isFirstLaunch', 'false');
      }
    });
  }, []);

  const [screen, setScreen] = useState(1);
  console.log(getNewInstall())
  if (screen == 1 && !isFreshlyInstalled){
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
else if (screen == 3){
  return (
    <View style={Styles.Container}>
    <Image source={require("../../Images/Explore.jpg")}></Image>

    <Text style={Styles.WelcomeText}>Let’s Explore</Text>

    <Image style={Styles.ProgressBar} source={require("../../Images/ProgressBar3.jpg")} />

    <Pressable style = {Styles.NextButton} onPress={()=>{
      setNewInstall('true')
      console.log(getNewInstall()._j)
      navigation.navigate('Login')
    }}>
    <Text style={Styles.NextText}>Get Started</Text>
    </Pressable>

  </View>
    );
}
else{
  console.log(getNewInstall()._j)
  navigation.navigate('Login')
}
}

