import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "./styles";

export const HomeStackScreen = (props: any) => {


  const handleGoToLogin = () => {
      props.navigation.navigate('Login');
  }

  return (
    <ScrollView style={styles.container}>

     
        <ImageBackground 
          source={require('../../../../assets/fitFirstScreen.jpg')}
          style={{width:'100%', height:400, opacity:0.8}}
        />

        <View style={styles.welcomeArea}>
            <Text style={styles.welcomeText}>Sejam bem vindos ao (NOME DO APLICATIVO)</Text>
        </View>

        <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleGoToLogin}>
                <Text style={styles.buttonText}>Vamos lá</Text>
            </TouchableOpacity>
        </View>
       
    </ScrollView>
  );
}
