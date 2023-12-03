import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    Container: {
        backgroundColor: "#ffffff",
        height: "100%",
    },
    RequestBox:{
          paddingHorizontal: 10,
        // marginTop: 0,
        elevation: 1,
        // borderRadius: 1,
        paddingVertical: 15,
        overflow: "hidden",
      },
      RoomImg: {
        width: 150,
        height: '100%',
        alignSelf: "center",
        marginEnd: 10
        // borderRadius: 20,
    },
    DFlex: {
        flexDirection: 'row',
    },
    ButtonGrp:{
        justifyContent:'space-between',
    },
    VerifyBtn:{
        backgroundColor: '#FFBA1B',
        paddingHorizontal: 25,
        paddingVertical: 3,
        borderRadius: 15
    },
    RejectBtn:{
        borderColor: "#FFBA1B",
        borderWidth: 2,
        paddingHorizontal: 25,
        paddingVertical: 3,
        borderRadius: 15,
        marginStart: 10
    },
    Mt5: {
        marginTop: 10
    }
})

export default Styles;
