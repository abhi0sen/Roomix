import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    Container:{
          backgroundColor: "#ffffff",
          height: "100%",
          paddingTop: 20,
          paddingHorizontal: 30
    },
      dropdown: {
        height: 50,
        marginTop: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      TextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      Title: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      Label: {
        fontSize: 18,
        marginTop: 30,
      },
      NoOfRoommate: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 10
      },
      RmCount: {
        borderWidth: 1,
          borderRadius: 20,
          padding: 5,
          paddingHorizontal: 33
      },
      RmText: {
          textAlign: 'center'
      },
      Input: {
        borderBottomWidth: 1,
          borderBottomColor: "#B7B7B7",
          marginTop: 10
      },
      AddImg:{
        borderWidth: 1,
        padding: 12,
        width: 60,
        height: 60,
        borderRadius: 5,
        marginTop: 15
      },
      Add:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 22
      },
      Save: {
        backgroundColor: '#F9A825',
        borderRadius: 20,
        width: 130,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 8
      },
      SaveTxt: {
        fontSize: 16
      },
      alignEnd: {
        alignItems: 'flex-end',
        marginVertical: 20
      },
      Gender: {
        flexDirection:'row',
      justifyContent: 'space-between',
      marginTop: 10
    },
    GenderBtn: {
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 33
    },
    AgeGrp: {
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    Optional:{
      color:"#9B9B9B"
    },
    Img: {
      width: 65, 
      height: 65,
      marginRight: 10,
      resizeMode: "cover",
      borderRadius: 10
    },
    CloseBtn:{
      position: 'absolute',
      top: 2,
      right: 10
    },
    Active: {
      borderColor: "#f9a825",
      borderWidth: 2,
    }
    });
  
export default styles