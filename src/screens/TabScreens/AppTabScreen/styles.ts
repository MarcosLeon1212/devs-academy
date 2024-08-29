import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        backgroundColor: '#2d3846'
    },

    generalProfileArea:{
        backgroundColor: '#a000f0',
        borderColor:'#a079f0',
        borderWidth: 3,
        height:260
    },

    nameAppArea:{
        alignSelf: 'center',
        marginTop:30
    },

    nameAppText:{
        fontSize:18,
        color: '#eaeaea'
    },

    imageProfileArea:{
        borderColor: '#eaeaea',
        marginTop: 40,
        borderWidth: 2,
        alignContent: 'center',
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    textTestProfileArea:{
        color: '#eaeaea'
    },

    namePupilArea:{
        alignSelf: 'center',
        marginTop:10
    },

    namePupilText:{
        color: 'white',
        fontSize: 18
    },

    buttonsProfileArea:{
        marginTop:40
    },

    buttonProfile :{
        marginTop:40,
        backgroundColor: '#a079f0',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderRadius:8
    },

    firstAreaTwoButtons:{
        display:'flex',
        flex: 1,
        flexDirection: 'row',
    },

    secondAreaTwoButtons:{
        display:'flex',
        flex: 1,
        flexDirection: 'row'
    },

    spreadsheets:{
        marginLeft: 30,
        width:150,
    },

    infos:{
        marginLeft: 20,
        width: 150
    },

    training:{
        marginLeft: 30,
        width: 150
    },

    support:{
        marginLeft: 20,
        width: 150
    },

    buttonProfilePhoto:{
        alignSelf: 'center',
        top: 20
    }

})