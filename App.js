import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {View, Text, StyleSheet} from 'react-native';
import NewToCity from './Components/Welcome/NewToCity';
import storage from './Components/Storage';
import Login from './Components/UserOnboard/Login';
import Register from './Components/UserOnboard/Register';
import IsRoommate from './Components/RoommatePost/IsRoommate';
import Home from './Components/Home/Home';
import RoomDetails from './Components/RoommatePost/RoomDetails';

const Stack = createNativeStackNavigator();

function App(){

  return (
    // <View style = {styles.container}> 
    //   <NewToCity />
    // </View>

    
    <NavigationContainer style={styles.container}>
    {/* <View  style={styles.container}> */}
    <Stack.Navigator
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: "#000000",
      //   },
      //   headerTintColor:"#ffffff",
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //   }
      // }}
      >

  <Stack.Screen
        name="Welcome"
        component={NewToCity}
        />

        <Stack.Screen
        name='Login'
        component= {Login}
        />

        <Stack.Screen
        name='Register'
        component= {Register}
        />

        <Stack.Screen
        name='isRoommate'
        component= {IsRoommate}
        options={{title:"Roommate Post"}}
        />
        
        <Stack.Screen
        name='RoomDetails'
        component= {RoomDetails}
        options={{title:"Roommate Post"}}
        />
        
        <Stack.Screen
        name='Home'
        component= {Home}
        options={{title: "Roomix"}}
        />

        </Stack.Navigator>
    {/* </View> */}
    </NavigationContainer>
  );

  // storage.load({
  //   key: "loginState",
  //   autoSync:true,
  //   syncInBackground: true,
  // })
  // .then(ret => {
  //   console.log(ret.userId);
  // })
  // .catch(err => {
    
  // })  
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});