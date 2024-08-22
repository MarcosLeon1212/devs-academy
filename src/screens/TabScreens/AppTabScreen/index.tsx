import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image} from "react-native";
import { PersonalInfos } from "../../../components/PersonalInfos";
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

    return(
        <ScrollView style={style.container}>

           <View style={style.imageProfileArea}>
              <Text style={style.textTestProfileArea}>Local de colocar a imagem</Text>
           </View>

           <View style={style.infosArea}>
              <Text style={style.infosText}>Local de informações pessoais:</Text>
              <PersonalInfos />
           </View>
        </ScrollView>
    )
}