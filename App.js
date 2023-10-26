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
import RoomView from './Components/Home/RoomView';
import RoomPreference from './Components/RoommatePost/RoomPreference';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Wishlist from './Components/Home/Wishlist';
import ChatList from './Components/Chatting/ChatList';
import UserProfile from './Components/Profile/UserProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(){

  return (    
    <NavigationContainer style={styles.container}>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Wishlist" component={Home} />
        <Tab.Screen name="AddPost" component={IsRoommate} />
      </Tab.Navigator> */}
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgba(255, 186, 27, 0.9)",
        },
        headerTintColor:"#373737",
        headerTitleStyle: {
          fontWeight: "bold",
        }
      }}
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
        component= {TabNavigator}
        options={{title: "Roomix", gestureEnabled: false, headerLeft: () => null, headerBackVisible: false }}
        />
        
        <Stack.Screen
        name='RoomView'
        component= {RoomView}
        options={{title: "Roomix"}}
        />
        
        <Stack.Screen
        name='RoomPreference'
        component= {RoomPreference}
        options={{title: "Roomix"}}
        />

        </Stack.Navigator>

    </NavigationContainer>
  );
  
}

export default App;

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Wishlist" component={Wishlist} options={{headerShown: false}} />
      <Tab.Screen name="AddPost" component={IsRoommate} options={{headerShown: false}} />
      <Tab.Screen name="ChatList" component={ChatList} options={{headerShown: false}} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});