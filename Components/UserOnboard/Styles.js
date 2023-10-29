import React from 'react'
import {StyleSheet} from 'react-native'


const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: "#ffffff",
        height: "100%",
        // paddingTop: 20,
    },

    Textinput:{
        borderBottomWidth: 1,
        borderBottomColor: "#B7B7B7",
        width: "80%",
        padding: 5,
        marginBottom: 20
    },
    Register: {
        color: "#0084CE"
    },
    SignIn: {
        backgroundColor: '#FFBA1B',
        padding: 10,
        borderRadius: 50,
        margin: "auto",
        fontSize: 20,
        width: 100,
        paddingHorizontal: 15
    },
    SignInText:{
        textAlign: "center",
        fontSize: 15,
    },
    Label: {
        alignSelf: 'center',
        marginEnd: 24
    },
    DFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10
    }
})



export default Styles;
