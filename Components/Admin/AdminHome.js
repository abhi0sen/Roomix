import React, {useState, useEffect} from 'react'
import {FlatList, SafeAreaView, ScrollView, TextInput, View, Pressable, Text, Modal} from 'react-native'
import RoomCard from '../Home/RoomCard'
import { ViewRooms, db } from "../../Database/Firestore";
import styles from "../Home/RoomStyle";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { RangeSlider } from "@react-native-assets/slider";

const AdminHome = ({navigation}) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filter, setFilter] = useState(null);
  const [range, setRange] = useState([1000, 100000]);
  const [Gender, setGender] = useState("");
  const [RmCount, setRmCount] = useState(0);
  const [FlatSize, setFlatSize] = useState("");
  const [Meal, setMeal] = useState("");

  const [filterData, setFilterData] = useState([]);

  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const RoomFilter = () => {
    let tempData = [...data]; // Copy the original data

  if (Gender !== "") {
    tempData = tempData.filter((item) => item.Gender.includes(Gender));
  }

  if (FlatSize !== "") {
    tempData = tempData.filter((item) => item.FlatSize.includes(FlatSize));
  }

  if (Meal !== "") {
    tempData = tempData.filter((item) => item.Meal.includes(Meal));
  }

  if (RmCount != 0) {
    tempData = tempData.filter((item) => item.RoommateCount == RmCount);
  }

  // Update the temporary filtered data state
  setFilterData(tempData);
  }

  const showFilterModal = () => {
    setFilterModalVisible(true);
  };

  const hideFilterModal = () => {
    setFilterModalVisible(false);
  };

  const handleRange = (temp) => {
    setRange(temp);
  };

  useEffect(() => {
    async function fetchData() {
        const roomsData = await ViewRooms();
        setData(roomsData);
        
        // console.log(getUserId)
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

  return (
    <SafeAreaView style={{height: '100%', marginHorizontal: 10}}>
    <ScrollView>

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
              <Pressable
                onPress={() => {
                  showFilterModal();
                }}
              >
                <AntDesign name="filter" size={24} color="black" />
              </Pressable>
            </View>
          </View>


      <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <RoomCard item={item} navigation={navigation} db={db} />;
          }}
        />

    </ScrollView>

    <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterModalVisible}
        onRequestClose={hideFilterModal}
        style={{
          elevation: 2,
          shadowColor: "black",
          marginHorizontal: 5,
          borderRadius: 8,
          borderColor: "black",
          borderWidth: 0.7,
          // height: '50%'
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
                  {/* <Pressable style={styles.RoundBtn} onPress={() => setGender("Male")}> */}
                  <Pressable
                    style={
                      Gender == "Male"
                        ? [styles.RoundBtn, styles.Active]
                        : styles.RoundBtn
                    }
                    onPress={() => (Gender != "Male") ? setGender("Male") : setGender("")}
                  >
                    <Text style={styles.ValueTxt}>Male</Text>
                  </Pressable>

                  <Pressable
                    style={
                      Gender == "Female"
                        ? [styles.RoundBtn, styles.Active]
                        : styles.RoundBtn
                    }
                    onPress={() => (Gender != "Female") ? setGender("Female") : setGender("")}
                  >
                    <Text style={styles.ValueTxt}>Female</Text>
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
                    maximumValue={100000}
                    step={500}
                    minimumRange={1000}
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
                    onValueChange={(rng) => handleRange(rng)}
                    onSlidingStart={undefined}
                    onSlidingComplete={undefined}
                    CustomThumb={undefined}
                    CustomMark={undefined}
                    style={{ marginHorizontal: 17 }}
                  />
                </View>
                <View style={styles.Budget}>
        <Text>{range[0]} Rs. </Text>
        <Text>{range[1]} Rs. </Text>
      </View>


              </View>

              <View style={styles.Mt5}>
                {/* <Pressable> */}
                <Text style={styles.ValueHead}>Roommates Required</Text>
                {/* </Pressable> */}
                <View style={styles.LocPrice}>
                  <Pressable style={
              RmCount == 1
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
                  onPress={() => (RmCount != 1) ? setRmCount(1) : setRmCount(0)}
                  >
                    <Text style={styles.ValueTxt}>1</Text>
                  </Pressable>

                  <Pressable style={
              RmCount == 2
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
                  onPress={() => (RmCount != 2) ? setRmCount(2) : setRmCount(0)}
                  >
                    <Text style={styles.ValueTxt}>2</Text>
                  </Pressable>

                  <Pressable style={
              RmCount == 3
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
                  onPress={() => (RmCount != 3) ? setRmCount(3) : setRmCount(0)}
                  >
                    <Text style={styles.ValueTxt}>3</Text>
                  </Pressable>
                  <Pressable style={
              RmCount == 4
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
                  onPress={() => (RmCount != 4) ? setRmCount(4) : setRmCount(0)}
                  >
                    <Text style={styles.ValueTxt}>4</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.Mt5}>
                {/* <Pressable> */}
                <Text style={styles.ValueHead}>Flat Size</Text>
                {/* </Pressable> */}
                <View style={styles.LocPrice}>
                  <Pressable style={
              FlatSize == "1 BHK"
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
            onPress={()=> (FlatSize != "1 BHK") ? setFlatSize("1 BHK") : setFlatSize("") }
            >
                    <Text style={styles.ValueTxt}>1-BHK</Text>
                  </Pressable>

                  <Pressable style={
              FlatSize == "2 BHK"
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
            onPress={()=> (FlatSize != "2 BHK") ? setFlatSize("2 BHK") : setFlatSize("") }>
                    <Text style={styles.ValueTxt}>2-BHK</Text>
                  </Pressable>

                  <Pressable style={
              FlatSize == "3 BHK"
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
            onPress={()=> (FlatSize != "3 BHK") ? setFlatSize("3 BHK") : setFlatSize("") }>
                    <Text style={styles.ValueTxt}>3-BHK</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.Mt5}>
                <Text style={styles.ValueHead}>Preferred Meal</Text>
              </View>
              <View style={styles.DFlex}>
                <Pressable style={
              Meal == "Vegetarian"
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
            onPress={()=> (Meal != "Vegetarian") ? setMeal("Vegetarian"): setMeal("")}>
                  <Text style={styles.ValueTxt}>Veg</Text>
                </Pressable>

                <Pressable style={
              Meal == "Non-Vegetarian"
                ? [styles.RoundBtn, styles.Active]
                : styles.RoundBtn
            }
            onPress={()=> (Meal != "Non-Vegetarian") ? setMeal("Non-Vegetarian"): setMeal("")}>
                  <Text style={styles.ValueTxt}>Non-Veg</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.LocPrice,
              {
                paddingHorizontal: 10,
                backgroundColor: "#ffffff",
                paddingBottom: 10,
              },
            ]}
          >
            <Pressable
              onPress={() => {
                setFilter(true)
                RoomFilter()
                hideFilterModal()
              }}
              style={{
                backgroundColor: "#FFBA1B",
                padding: 16,
                alignItems: "center",
                width: "45%",
                borderRadius: 10,
              }}
            >
              <Text>Apply</Text>
            </Pressable>

            <Pressable
              onPress={hideFilterModal}
              style={{
                backgroundColor: "#FFBA1B",
                padding: 16,
                alignItems: "center",
                width: "45%",
                borderRadius: 10,
              }}
            >
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  )
}

export default AdminHome
