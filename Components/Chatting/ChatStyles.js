import {StyleSheet} from 'react-native'

const ChatStyles = StyleSheet.create({
    Container: {
        backgroundColor: "#ffffff",
        height: "100%",
        paddingHorizontal: 20,
      },
      dFlex: {
        flexDirection: 'row'
      },
      ProfImg:{
        width:70,
        height: 70,
        borderRadius:50,
      },
      Title: {
        fontSize: 18,
        fontWeight: 'bold'
      },
      Ms4: {
        marginLeft: 15,
      },
      ParentView: {
        borderWidth: 0.6,
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#878787'
      },
      AlignSelfCenter: {
        alignSelf:'center',
      },
      Mh3: {
        marginVertical: 2
      },
      Pt3: {
        paddingTop: 10
      },
      FloatEnd: {
        position: 'absolute',
        right: 10
      },
      Sender: {
        // justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    SenderTxt: {
        backgroundColor: '#FFBA1B75',
        maxWidth: 270,
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 15
      },
      Reciever: {
        maxWidth: 270,
    },
    RecieverTxt: {
        // borderWidth: 2,
        // borderColor: '#FFBA1B75',
        backgroundColor: '#FFBA1B25',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 15,
      },
      Message:{
        position: 'absolute',
        bottom: 10,
        
      },
      MsgBox:{
        width: "80%",
        marginLeft: 10
      },
      MessageGrp1:{
        marginHorizontal: 20,
        borderWidth: 1,
        marginHorizontal: 8,
        borderColor: "#bbbbbb",
        borderRadius: 10,
        width: "88%",
        paddingHorizontal: 10,
        paddingVertical: 8,
        flexDirection: "row"
      },
      SendBtn: {
        backgroundColor: "#FFBA1B",
        borderRadius: 20,
        padding: 10,
      }
})

export default ChatStyles;
