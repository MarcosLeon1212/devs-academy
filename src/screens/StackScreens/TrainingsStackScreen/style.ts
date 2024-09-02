import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2d3846',
        height: '100%'
    },

    buttonsArea:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        gap: 30,
        marginTop: 10
    },

    buttons:{
        gap: 10,
        marginRight: 15,
        backgroundColor: '#a079f0',
        height: 20,
        borderColor: '#a079f0',
        borderWidth: 1,
        borderRadius: 10,
        width:80,
        alignItems: 'center'
    },

    buttonSeeTraining: {
        margin: 10,
        backgroundColor: '#a079f0',
        width: 100,
        alignItems: 'center',
        borderColor: '#a079f0',
        borderWidth: 1,
        borderRadius: 20
    },

    textSeeTraining: {
        color: '#eaeaea',
        
    }
})