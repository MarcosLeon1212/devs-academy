import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2d3846'
    },

    imageArea:{
        margin:60,
        alignContent: 'center',
        alignItems: 'center'
    },

    enterTextArea:{
        alignContent:'center',
        alignItems:'center'
    },

    enterText:{
        fontSize: 20,
        color: '#eaeaea'
    },

    formArea:{
        marginTop: 40,
        alignContent: 'center',
        alignItems: 'center',
        borderColor: '#eaeaea',
        borderWidth: 2,
        gap: 20
    },

    label:{
        color: '#eaeaea',
        fontSize: 18,
    },

    input:{
        fontSize: 16,
        borderColor: '#eaeaea',
        borderWidth: 2,
        borderRadius: 10,
        width: 200,
        color: '#aaa'
    },

    buttonEnter:{
        marginTop: 10,
        backgroundColor: '#a079f0',
        width: 100,
        borderColor: '#a079ff',
        borderWidth: 1,
        borderRadius: 20
    },

    buttonEnterText:{
        alignContent: 'center',
        alignSelf: 'center',
        color: '#F9F1FF',
        fontSize: 18
    },

    textNoAccount:{
        color: '#eaeaea',
    },

    registerNow:{
        color: '#a079f0'
    }
})