import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {View, Text, StyleSheet} from 'react-native';
import NewToCity from './Components/Welcome/NewToCity';

const Stack = createNativeStackNavigator();

function App() {
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        if (temp){
          return (
            <View  style={styles.container}>
              <NewToCity />
            </View>
          );
          }
          else{
            return(
              <View>
                <Text>hello</Text>
              </View>
        
            );
          }
      }
    } catch (error) {
      // Error retrieving data
    }
  };

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