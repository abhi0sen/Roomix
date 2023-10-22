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

const RoomPreference = ({ navigation }) => {
  const [value, setValue] = React.useState(0);
  const [range, setRange] = React.useState([0, 0]);
  const [max, setMax] = React.useState(1);
  React.useEffect(() => {
    setInterval(() => setMax((max) => max + 1), 2000);
  }, []);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Room Preference</Text>

      <Text style={styles.Label}>Gender</Text>

      <View style={styles.Gender}>
        <Pressable style={styles.GenderBtn}>
          <Text style={styles.GenText}>Male</Text>
        </Pressable>
        <Pressable style={styles.GenderBtn}>
          <Text style={styles.GenText}>Female</Text>
        </Pressable>
        <Pressable style={styles.GenderBtn}>
          <Text style={styles.GenText}>Others</Text>
        </Pressable>
      </View>

      <Text style={styles.Label}>Preferred Diet</Text>
      <View style={styles.Gender}>
        <Pressable style={styles.GenderBtn}>
          <Text style={styles.GenText}>Vegetarian</Text>
        </Pressable>
        <Pressable style={styles.GenderBtn}>
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
        trackHeight={4}
        thumbSize={15}
        thumbImage={undefined}
        slideOnTap={true} 
        onValueChange={setValue}
        onSlidingStart={undefined} 
        onSlidingComplete={undefined} 
        // value={value}
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
      />

      <View style={styles.alignEnd}>
        <Pressable
          style={styles.Save}
          onPress={() => {
            alert("Your Request is Sent for Verification!!");
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.SaveTxt}>Send Request</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RoomPreference;
