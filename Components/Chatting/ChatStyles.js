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
        marginRight: 10,
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
        marginLeft: 10,
        fontSize: 15,
      }
})

export default ChatStyles;
