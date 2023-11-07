import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import RoomCard from "./RoomCard";
import styles from "./RoomStyle";
import { ViewRooms, db } from "../../Database/Firestore";
import { RangeSlider } from "@react-native-assets/slider";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [range, setRange] = useState([1000, 15000])
  // console.log(range)
  // console.log(data.map((item)=>{
  //   if(item.Description = "Hai Shri krishna"){
  //     return item;
  //   }
  // }))

  useEffect(() => {
    async function fetchData() {
      const roomsData = await ViewRooms();
      setData(roomsData);

      if (searchText == "") {
        setData(roomsData);
      } else {
        const filteredData = roomsData.filter(
          (item) =>
            item.Description.includes(searchText) ||
            item.FlatSize.includes(searchText) ||
            item.AddressL1.includes(searchText) ||
            item.SelectedState.includes(searchText) ||
            item.SelectedCity.includes(searchText)
        );
        setData(filteredData);
      }
    }

    fetchData();
  }, [searchText]);

  // Filterbox
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const showFilterModal = () => {
    setFilterModalVisible(true);
  };

  const hideFilterModal = () => {
    setFilterModalVisible(false);
  };

  const handleRange = (temp) => {
    setRange(temp)
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.TopBar}>
            <View style={styles.SearchBar}>
              <EvilIcons
                style={styles.SearchIcon}
                name="search"
                size={27}
                color="#c3c2c2"
              />

              <TextInput placeholder="Search" onChangeText={setSearchText} />
            </View>

            <View style={styles.Filter}>
              <Pressable onPress={showFilterModal}>
                <AntDesign name="filter" size={24} color="black" />
              </Pressable>
            </View>
          </View>

          {/* <RoomCard navigation={navigation} /> */}

          <View>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                return <RoomCard item={item} navigation={navigation} db={db} />;
              }}
            />
          </View>

          {/* <RoomCard navigation={navigation} />
        <RoomCard navigation={navigation} />
        <RoomCard navigation={navigation} /> */}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterModalVisible}
        onRequestClose={hideFilterModal}
        style={{
          elevation:2,
                shadowColor:'black',
                marginHorizontal: 5,
                borderRadius: 8,
                borderColor: 'black',
                borderWidth: 0.7,
        }}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View style={styles.FilterBox}>
            <View style={styles.FilterCriteria}>
              <View style={styles.Mt3}>
              {/* <Pressable> */}
                <Text style={styles.ValueHead}>Gender</Text>
              {/* </Pressable> */}
              <View style={styles.DFlex}>
                <Pressable style={styles.RoundBtn}>
                  <Text style={styles.ValueTxt}>Male</Text>
                </Pressable>
                <Pressable style={styles.RoundBtn}>
                  <Text style={styles.ValueTxt}>female</Text>
                </Pressable>
                </View>
              </View>

              <View style={styles.Mt5}>
              {/* <Pressable> */}
                <Text style={styles.ValueHead}>Budget</Text>
              {/* </Pressable> */}
              <View>
                <RangeSlider
                  range={range}
                  minimumValue={1000}
                  maximumValue={15000}
                  step={50}
                  minimumRange={500}
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
                  // onChangeText=
                  onValueChange={(temp)=>handleRange(temp)}
                  onSlidingStart={undefined}
                  onSlidingComplete={undefined}
                  CustomThumb={undefined}
                  CustomMark={undefined}
                  style={{marginHorizontal: 17}}
                />
              </View>
              </View>

              <View style={styles.Mt5}>
              {/* <Pressable> */}
                <Text style={styles.ValueHead}>Roommates Required</Text>
              {/* </Pressable> */}
              <View style={styles.LocPrice}>
                <Pressable  style={styles.RoundBtn}>
                  <Text style={styles.ValueTxt}>1</Text>
                </Pressable>
                <Pressable style={styles.RoundBtn}>
                  <Text style={styles.ValueTxt}>2</Text>
                </Pressable>
                <Pressable  style={styles.RoundBtn}>
                  <Text style={styles.ValueTxt}>3</Text>
                </Pressable>
                <Pressable style={styles.RoundBtn}>
                  <Text style={styles.ValueTxt}>4</Text>
                </Pressable>
              </View>
              </View>


              <View style={styles.Mt5}>
              {/* <Pressable> */}
                <Text style={styles.ValueHead}>Flat Size</Text>
              {/* </Pressable> */}
              <View style={styles.LocPrice}>
              <Pressable style={styles.RoundBtn}>
                <Text style={styles.ValueTxt}>1-BHK</Text>
              </Pressable>
              <Pressable style={styles.RoundBtn}>
                <Text style={styles.ValueTxt}>2-BHK</Text>
              </Pressable>
              <Pressable style={styles.RoundBtn}>
                <Text style={styles.ValueTxt}>3-BHK</Text>
              </Pressable>
              </View>
              </View>

              <View style={styles.Mt5}>
                <Text style={styles.ValueHead}>Preferred Meal</Text>
              </View>
              <View style={styles.DFlex}>
                <Pressable  style={styles.RoundBtn}>
                  <Text style={styles.ValueTxt}>Veg</Text>
                </Pressable>
                <Pressable style={styles.RoundBtn}>
                  <Text style={styles.ValueTxt}>Non-Veg</Text>
                </Pressable>
              </View>

            </View>
            {/* <View style={styles.FilterValues}>
              
            </View> */}
          </View>

          <View>
            <Pressable
              onPress={hideFilterModal}
              style={{
                backgroundColor: "#FFBA1B",
                padding: 16,
                alignItems: "center",                
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
