import {StyleSheet} from 'react-native'


const RoomStyle = StyleSheet.create({
    Container: {
        backgroundColor: "#ffffff",
        height: "100%",
        paddingHorizontal: 20,
      },
      SearchIcon: {
        alignSelf: 'center'
      },
      SearchBar: {
        borderWidth: 1,
        flexDirection: "row",
        borderRadius: 20,
        padding: 5,
        width: "90%",
        borderColor: "#A5A3A3",
        overflow: 'hidden',
      },
      TopBar: {
        marginTop: 10,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        // padding: 5
      },
      Filter: {
        alignSelf: "center",
        marginLeft: 5,
      },
      Room: {
      marginTop: 15,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#fff',
      elevation: 2,
      borderWidth: 0.8,
      borderColor: '#D9DDDC',
      // shadowColor: '#D9DDDC',
      // shadowOffset: {width: -2, height: 4},
      // shadowOpacity: 0.2,
      // shadowRadius: 3,
    },
    RoomImg:{
      // width: "100%",
      width: "100%",
      height: 200,
      objectFit: 'cover'
    },
    RoomDetails:{
      padding: 10
    },
    LocPrice: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    Title: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    TextBold: {
      fontWeight: 'bold',
      fontSize: 18
    },
    Mt5:{
      marginTop: 20
    },
    Mt3:{
      marginTop: 7
    },
    DFlex:{
      flexDirection: 'row'
    },
    AlignSelfCenter:{
      alignSelf: 'center'
    },
    Requirements:{
      // borderWidth: 1,
      // borderStyle: 'solid',
      borderRadius: 2,
      padding: 20,
      elevation: 2
    },
    Message: {
      // elevation: 1,
      borderRadius: 20,
      // width: 'auto',
      borderWidth: 1,
      padding: 10,
      borderColor: 'black',
      position: 'absolute',
      right: 20,
      bottom: 10,
      backgroundColor: '#fff',
      width: 55
    },
    LastSection: {
      marginBottom: 40
    }
  })

export default RoomStyle