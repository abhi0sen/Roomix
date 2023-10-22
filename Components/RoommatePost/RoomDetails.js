import React, { useState }  from 'react'
import { View, Text, TextInput, Image, Pressable, ScrollView} from 'react-native'
import styles from './style'
import {Dropdown} from 'react-native-element-dropdown'

const RoomDetails = ({navigation}) => {
    const data = [
        { label: '1 BHK', value: '1 BHK' },
        { label: '2 BHK', value: '2 BHK' },
        { label: '3 BHK', value: '3 BHK' },
      ];

      const [value, setValue] = useState(null);
  return (
    <ScrollView>
    <View style={styles.Container}>

      <Text style={styles.Title}>Room Details</Text>
      <Text style={styles.Label}>Flat Size</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.TextStyle}
        selectedTextStyle={styles.TextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={100}
        labelField="label"
        valueField="value"
        // placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}

        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />

    <Text style={styles.Label}>Roommates Required</Text>
    <View style={styles.NoOfRoommate}>
      <Pressable style={styles.RmCount}><Text style={styles.RmText}>1</Text></Pressable>
      <Pressable style={styles.RmCount}><Text style={styles.RmText}>2</Text></Pressable>
      <Pressable style={styles.RmCount}><Text style={styles.RmText}>3</Text></Pressable>
      <Pressable style={styles.RmCount}><Text style={styles.RmText}>4</Text></Pressable>
    </View>

    <Text style={styles.Label}>Total Rent</Text>
    <TextInput style = {styles.Input} placeholder='e.g. 20000' inputMode='decimal' /> 

    <Text style={styles.Label}>Address</Text>
    <TextInput style = {styles.Input} placeholder='House No. Street, Area, Block' /> 
    <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.TextStyle}
        selectedTextStyle={styles.TextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={100}
        labelField="label"
        valueField="value"
        // placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      /> 

<Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.TextStyle}
        selectedTextStyle={styles.TextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={100}
        labelField="label"
        valueField="value"
        // placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />

      <Text style={styles.Label}>Description</Text>
      <TextInput
      editable
      multiline
      numberOfLines={4}
      style = {styles.Input}
      placeholder='Specify the important instruction about the room'
      />

      <Text style={styles.Label}>Add Images</Text>

      <Pressable style={styles.AddImg}>
        <Text style={styles.Add}>+</Text>
      </Pressable>

      <View style={styles.alignEnd}>
      <Pressable style={styles.Save} onPress={()=>{
        navigation.navigate('RoomPreference')
      }}>
        <Text style={styles.SaveTxt}>Save</Text>
      </Pressable>
    </View>
      

    </View>
    </ScrollView>
  )
}

export default RoomDetails
