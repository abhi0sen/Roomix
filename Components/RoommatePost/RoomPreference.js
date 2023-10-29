import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { RangeSlider } from "@react-native-assets/slider";
import styles from "./style";
import { RoomPreferred } from '../../Database/Firestore'

const RoomPreference = ({ navigation }) => {
  const [value, setValue] = React.useState(0);
  const [range, setRange] = React.useState([0, 0]);
  const [max, setMax] = React.useState(1);
  const [Gender, setGender] = useState("")
  const [Meal, setMeal] = useState("")
  const [OtherCriteria, setOtherCriteria] = useState("")


  React.useEffect(() => {
    setInterval(() => setMax((max) => max + 1), 2000);
  }, []);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Room Preference</Text>

      <Text style={styles.Label}>Gender</Text>

      <View style={styles.Gender}>
        <Pressable style={(Gender=="Male")?[styles.GenderBtn, styles.Active]: styles.GenderBtn} onPress={()=>{setGender("Male")}}>
          <Text style={styles.GenText}>Male</Text>
        </Pressable>
        <Pressable style={(Gender=="Female")?[styles.GenderBtn, styles.Active]: styles.GenderBtn} onPress={() => {setGender("Female")}}>
          <Text style={styles.GenText}>Female</Text>
        </Pressable>
        <Pressable style={(Gender=="Others")?[styles.GenderBtn, styles.Active]: styles.GenderBtn} onPress={() => {setGender("Others")}}>
          <Text style={styles.GenText}>Others</Text>
        </Pressable>
      </View>

      <Text style={styles.Label}>Preferred Diet</Text>
      <View style={styles.Gender}>
        <Pressable  style={(Meal=="Vegetarian")?[styles.GenderBtn, styles.Active]: styles.GenderBtn} onPress={() => {setMeal("Vegetarian")}}>
          <Text style={styles.GenText}>Vegetarian</Text>
        </Pressable>
        <Pressable  style={(Meal=="Non-Vegetarian")?[styles.GenderBtn, styles.Active]: styles.GenderBtn} onPress={() => {setMeal("Non-Vegetarian")}}>
          <Text style={styles.GenText}>Non-Vegetarian</Text>
        </Pressable>
      </View>

      <Text style={styles.Label}>Age Group</Text>
      <RangeSlider
        range={[19, 55]}
        minimumValue={10}
        maximumValue={65}
        step={1}
        minimumRange={2}
        crossingAllowed={false}
        outboundColor="#B6B6B6"
        inboundColor="#FFC848"
        thumbTintColor="#FFC848"
        thumbStyle={undefined}
        trackStyle={undefined}
        minTrackStyle={undefined}
        midTrackStyle={undefined}
        maxTrackStyle={undefined}
        vertical={false}
  inverted={false} 
        enabled={true}
        trackHeight={3}
        thumbSize={13}
        thumbImage={undefined}
        slideOnTap={true} 
        onValueChange={setValue}
        onSlidingStart={undefined} 
        onSlidingComplete={undefined} 
      />

      <View style={styles.AgeGrp}>
        <Text>{value[0]}</Text>
        <Text>{value[1]}</Text>
      </View>

      <Text style={styles.Label}>
        Any Other Criteria <Text style={styles.Optional}>(optional)</Text>
      </Text>
      <TextInput
        style={styles.Input}
        placeholder="e.g. Non-Drinker / Non-Smoker"
        onChangeText={setOtherCriteria}
      />

      <View style={styles.alignEnd}>
        <Pressable
          style={styles.Save}
          onPress={() => {
            alert("Your Request is Sent for Verification!!");
            navigation.navigate("Home");
            // RoomPreferred(Gender, Meal, value, OtherCriteria)
          }}
        >
          <Text style={styles.SaveTxt}>Send Request</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RoomPreference;
