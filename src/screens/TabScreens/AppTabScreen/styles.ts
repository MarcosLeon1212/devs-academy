import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        backgroundColor: '#2d3846'
    },

    imageProfileArea:{
        borderColor: '#eaeaea',
        marginTop: 10,
        marginLeft: 20,
        borderWidth: 2,
        width: 80,
        height: 80
    },

    textTestProfileArea:{
        color: '#eaeaea'
    },

    infosArea:{
        marginTop: 80,
        display: 'flex',
        flex: 1,
        position: 'relative',
        left: 150
    },

    infosText:{
        color: '#eaeaea',
        fontSize: 16,
        marginBottom: 16
    }
})