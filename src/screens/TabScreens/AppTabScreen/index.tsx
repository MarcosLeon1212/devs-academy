import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image} from "react-native";
import { initializeApp } from "firebase/app";
import { useNavigation } from "@react-navigation/native";
import firestore, { getFirestore, collection, getDocs, addDoc, DocumentSnapshot } from 'firebase/firestore';
import { FlatList } from "react-native-gesture-handler";
import { style } from "./styles";


  export const AppTabScreen = (props: any) => {
 
     const firebaseConfig = {
        apiKey: "AIzaSyD0nqBtThNyT-p2mXbbtHweJLaQi4eALA0",
        authDomain: "firstfirebaseproject-530da.firebaseapp.com",
        databaseURL: "https://firstfirebaseproject-530da-default-rtdb.firebaseio.com",
        projectId: "firstfirebaseproject-530da",
        storageBucket: "firstfirebaseproject-530da.appspot.com",
        messagingSenderId: "136560842203",
        appId: "1:136560842203:web:9646f1c6cb5547caee83fe"
  };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      const handleGotoSupport = () => {
            props.navigation.navigate('Suporte')
      }

      const handleGoToSpreadsheets = () => {
            props.navigation.navigate('Planilhas Básicas')
      }

      const handleGoToInfos = () => {
            props.navigation.navigate('Informações')
      }

      const handleGoToTrains = () => {
            props.navigation.navigate('Treinos')
      }

    return(
        <ScrollView style={style.container}>

          <View style={style.generalProfileArea}>
                  <View style={style.nameAppArea}>
                        <Text style={style.nameAppText}>Nome do app</Text>
                  </View>

                  <View style={style.imageProfileArea}>
                        <Text style={style.textTestProfileArea}>Local de colocar a imagem</Text>
                  </View>

                  <View style={style.namePupilArea}>
                        <Text style={style.namePupilText}>Nome do usuário</Text>
                   </View>
         </View>

         <View style={style.buttonsProfileArea}>
              <View style={style.firstAreaTwoButtons}>

                <View style={style.spreadsheets}>
                  <TouchableOpacity style={style.buttonProfile} onPress={handleGoToSpreadsheets}>
                      <Image  source={require('../../../../assets/agenda.png')} style={{width:50, height:50}}/>
                      <Text style={{color: '#eaeaea', alignSelf: 'center'}}>Planilhas</Text>
                  </TouchableOpacity>
                </View>


               <View style={style.infos}>
                  <TouchableOpacity style={style.buttonProfile} onPress={handleGoToInfos}>
                        <Image source={require('../../../../assets/infosTab.png')} style={{width:50, height:50}}/>
                        <Text style={{color: '#eaeaea', alignSelf: 'center'}}>Informações</Text>
                  </TouchableOpacity>
               </View>

              </View>

             <View style={style.secondAreaTwoButtons}>


              <View style={style.training}>
                  <TouchableOpacity style={style.buttonProfile} onPress={handleGoToTrains}>
                        <Image source={require('../../../../assets/halteres.png')} style={{width:50, height:50}}/>
                        <Text style={{color: '#eaeaea', alignSelf: 'center'}}>Treinos</Text>
                  </TouchableOpacity>
              </View>

             
              <View style={style.support}>
                  <TouchableOpacity style={style.buttonProfile} onPress={handleGotoSupport}>
                        <Image source={require('../../../../assets/Suporte.png')} style={{width:50, height:50}}/>
                        <Text style={{color: '#eaeaea', alignSelf: 'center'}}>Suporte</Text>
                  </TouchableOpacity>
              </View>


             </View>

         </View>
           
        </ScrollView>
    )
}