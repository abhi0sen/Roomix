import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import styles from "./style";
import { Dropdown } from "react-native-element-dropdown";
import { State, City } from "country-state-city";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { RoomPost, storage } from "../../Database/Firestore";
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";



const RoomDetails = ({ navigation }) => {
  const [FlatSize, setFlatSize] = useState(null);
  const [RoommateCount, setRoommateCount] = useState(0);
  const [TotalRent, setTotalRent] = useState();
  const [AddressL1, setAddressL1] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [description, setDescription] = useState("");
  const [downloadUrls, setDownloadUrls] = useState([])

  const [prevData, setPrevData] = useState();
  
  
  const data = [
    { label: "1 BHK", value: "1 BHK" },
    { label: "2 BHK", value: "2 BHK" },
    { label: "3 BHK", value: "3 BHK" },
  ];

  const states = State.getStatesOfCountry("IN");
  const cities = City.getCitiesOfState("IN", selectedState);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption.value);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };

  const stateNames = states.map((state) => ({
    value: state.isoCode,
    label: state.name,
  }));

  const cityNames = cities.map((city) => ({
    value: city.name,
    label: city.name,
  }));

  // uploading images -
  const [selectedImages, setSelectedImages] = useState([]);

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      multiple: true, // Enable multiple image selection
    });

    if (!result.canceled) {
      const selectedUris = result.assets.map((asset) => asset.uri);
      setSelectedImages([...selectedImages, ...selectedUris]);
    }
    console.log(selectedImages.length);
  };

  // Remove Image
  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  // const SendImages
  const ImgProcess = async () => {
    const downloadURLs = [];

    // Loop through selected images and upload them to Firebase Storage
    for (const uri of selectedImages) {
      console.log(uri, "URLs of images")
      const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
          resolve(xhr.response)
        };
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        }
        xhr.responseType = 'blob'
        xhr.open("GET", uri, true);
        xhr.send(null);
      })
      /** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};
      const storageRef = ref(storage, "images/" + Date.now() + ".jpg"); // You can change the path as needed
      const response = await uploadBytes(storageRef, blobImage);
      // uploadBytesResumable(storageRef, blobImage, metadata);
      const downloadURL = await getDownloadURL(storageRef);
      downloadURLs.push(downloadURL);
    } // ?

    setDownloadUrls(downloadURLs)

    // RoomPost(FlatSize, RoommateCount, TotalRent, AddressL1, selectedState, selectedCity, description, downloadURLs)
    // console.log(FlatSize, RoommateCount, TotalRent, AddressL1, selectedState, selectedCity, description, downloadURLs)
    setPrevData(FlatSize, RoommateCount, TotalRent, AddressL1, selectedState, selectedCity, description, downloadURLs)
    console.log(prevData)

    

  };

  // The App------------------------------------->

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
          maxHeight={200}
          labelField="label"
          valueField="value"
          // placeholder="Select item"
          searchPlaceholder="Search..."
          value={FlatSize}
          onChange={(item) => {
            setFlatSize(item.value);
          }}
        />

        <Text style={styles.Label}>Roommates Required</Text>
        <View style={styles.NoOfRoommate}>
          <Pressable
            style={(RoommateCount==1)?[styles.RmCount, styles.Active]: styles.RmCount}
            onPress={() => {
              setRoommateCount(1);
            }}
          >
            <Text style={styles.RmText}>1</Text>
          </Pressable>
          <Pressable
            style={(RoommateCount==2)?[styles.RmCount, styles.Active]: styles.RmCount}
            onPress={() => {
              setRoommateCount(2);
            }}
          >
            <Text style={styles.RmText}>2</Text>
          </Pressable>
          <Pressable
            style={(RoommateCount==3)?[styles.RmCount, styles.Active]: styles.RmCount}
            onPress={() => {
              setRoommateCount(3);
            }}
          >
            <Text style={styles.RmText}>3</Text>
          </Pressable>
          <Pressable
            style={(RoommateCount==4)?[styles.RmCount, styles.Active]: styles.RmCount}
            onPress={() => {
              setRoommateCount(4);
            }}
          >
            <Text style={styles.RmText}>4</Text>
          </Pressable>
        </View>

        <Text style={styles.Label}>Total Rent</Text>
        <TextInput
          style={styles.Input}
          placeholder="e.g. 20000"
          inputMode="decimal"
          onChangeText={setTotalRent}
        />

        <Text style={styles.Label}>Address</Text>
        <TextInput
          style={styles.Input}
          placeholder="House No. Street, Area, Block"
          onChangeText={setAddressL1}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.TextStyle}
          selectedTextStyle={styles.TextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateNames}
          search
          maxHeight={400}
          labelField="label"
          valueField="value"
          placeholder="Select State"
          searchPlaceholder="Search..."
          value={selectedState}
          onChange={handleStateChange}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.TextStyle}
          selectedTextStyle={styles.TextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cityNames}
          search
          maxHeight={400}
          labelField="label"
          valueField="value"
          placeholder="Select city"
          searchPlaceholder="Search..."
          value={selectedCity}
          onChange={handleCityChange}
        />

        <Text style={styles.Label}>Description</Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          style={styles.Input}
          placeholder="Specify the important instruction about the room"
          onChangeText={setDescription}
        />

        <Text style={styles.Label}>Add Images</Text>
        <View style={{ marginTop: 10 }}>
          <ScrollView horizontal>
            {selectedImages.map((image, index) => (
              <View key={index}>
                <Image source={{ uri: image }} style={styles.Img} />
                <Pressable
                  style={styles.CloseBtn}
                  onPress={() => {
                    removeImage(index);
                  }}
                >
                  {/* <Icon name="close-circle" size={25} color="#ff6347"/> */}
                  <AntDesign name="closecircle" size={20} color="#ff6347" />
                </Pressable>
              </View>
            ))}
          </ScrollView>
        </View>

        <Pressable style={styles.AddImg} onPress={pickImages}>
          <Text style={styles.Add}>+</Text>
        </Pressable>

        <View style={styles.alignEnd}>
          <Pressable
            style={styles.Save}
            // onPress={SendData}
            onPress={async () => {
              await ImgProcess();
              navigation.navigate("RoomPreference",{
                FlatSize:  FlatSize, 
                RoommateCount: RoommateCount, 
                TotalRent: TotalRent,
                AddressL1:  AddressL1,
                selectedState: selectedState,
                selectedCity: selectedCity,
                description: description, 
                downloadURLs: downloadUrls}
                );
            }}
          >
            <Text style={styles.SaveTxt}>Save</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default RoomDetails;
