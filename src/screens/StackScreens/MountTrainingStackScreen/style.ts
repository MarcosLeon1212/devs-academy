import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        backgroundColor: '#2d3846',
        height: '100%'
    },

    titleArea:{
        marginTop: 100,
        alignItems: 'center'
    },

    titleText:{
        marginTop: 30,
        color: '#eaeaea',
        fontSize: 16
    },

    exerciseArea:{
        borderColor: '#eaeaea',
        borderWidth: 3,
        height: 280,
        marginTop: 60,
        margin: 10,
        padding: 10,
        gap: 10,
        width: 250,
        alignSelf: 'center'
    },

    seriesText:{
        color: '#eaeaea'
    },

    weightRepsArea:{
        gap: 10,
    },

    weight:{
        color: '#eaeaea',
    },

    reps:{
        color: '#eaeaea'
    },

    input:{
        borderColor: '#eaeaea',
        borderWidth: 1,
        height: 30
    },

    inputSeries:{
        borderColor: '#eaeaea',
        borderWidth: 1,
    },

    buttonArea:{
        alignContent: 'flex-end'
    },

    button:{
        alignContent: 'flex-end',
        backgroundColor: '#a079f0',
        width: 90,
        height: 40,
        left:100,
        borderColor: '#a079f0',
        borderWidth: 1,
        borderRadius: 5
    },

    buttonText:{
       alignSelf: 'center',
       color: '#eaeaea'
    }
})