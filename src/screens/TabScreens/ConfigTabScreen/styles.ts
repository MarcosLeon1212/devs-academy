import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container:{
        backgroundColor: '#2d3846',
    },

    buttonsAreas:{
        marginTop: 50,
        borderColor: '#777',
        borderWidth: 2,
        backgroundColor: '#a079f0'
    },

    buttons:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },

    buttonsText:{
        textAlign: 'center',
        alignSelf: 'center',
        left: 20,
        color: '#eaeaea'
    }
})