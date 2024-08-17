import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView, } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/navigators/MainStack';



const App = () => {

  return(
   
        <NavigationContainer>
         
        <MainStack /> 
         
        </NavigationContainer>
   
  )
}


export default App;