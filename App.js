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

import MyListing from './Components/Profile/MyListing';
import AdminHome from './Components/Admin/AdminHome';
import Request from './Components/Admin/Request';
import Notifications from './Components/Admin/Notifications';


// Icons

import { MaterialCommunityIcons, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import ChatLayout from './Components/Chatting/ChatLayout';

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
        options={{title: "Roomix"}} item 
        />
        
        <Stack.Screen
        name='RoomPreference'
        component= {RoomPreference}
        options={{title: "Roomix"}} prevData
        />
        
        <Stack.Screen
        name='ChatLayout'
        component= {ChatLayout}
        options={{title: "Roomix"}}
        />

        <Stack.Screen
        name='MyListing'
        component= {MyListing}
        options={{title: "Roomix"}}
        />

        {/* Admin Stacks */}

        <Stack.Screen
        name='AdminHome'
        component= {AdminTabNavigator}
        options={{title: "Roomix", gestureEnabled: false, headerLeft: () => null, headerBackVisible: false }}
        />

        <Stack.Screen
        name='Request'
        component= {Request}
        options={{title: "Roomix"}}
        />        

        <Stack.Screen
        name='Notification'
        component= {Notifications}
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
      <Tab.Screen name="Home" component={Home} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),}} />
      <Tab.Screen name="Wishlist" component={Wishlist} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart-o" size={24} color="black" />
          ),}} />
      <Tab.Screen name="AddPost" component={RoomDetails} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={24} color="black" />
          ),}} />
      <Tab.Screen name="ChatList" component={ChatList} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
          ),}} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="black" />
          ),}} />
    </Tab.Navigator>
  );
}

function AdminTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AdminHome} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),}} />
      <Tab.Screen name="Request" component={Request} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-plus-outline" size={24} color="black" />
          ),}} />
      <Tab.Screen name="AddPost" component={RoomDetails} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={24} color="black" />
          ),}} />
      <Tab.Screen name="Notification" component={Notifications} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),}} />
      <Tab.Screen name="Profile" component={UserProfile} options={{headerShown: false, tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="black" />
          ),}} />
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