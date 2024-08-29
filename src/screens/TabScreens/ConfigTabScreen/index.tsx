import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./styles";
import { styles } from "../../StackScreens/HomeStackScreen/styles";


export const ConfigTabScreen = () => {

    const [darkOrLightMode, setDarkOrLightMode] = useState(false);

    const handleDarkOrLightMode = () => {
        if(darkOrLightMode == false){
            setDarkOrLightMode(true)
        } else {
            setDarkOrLightMode(false)
        }
    }

    return(
        <ScrollView style={style.container}>
            <View style={style.buttonsAreas}>
                <TouchableOpacity style={style.buttons}>
                    <Image source={require('../../../../assets/Suporte.png')} style={{width:70, height:70}}/>
                    <Text style={style.buttonsText}>Suporte</Text>
                </TouchableOpacity>
            </View>

       
        {darkOrLightMode == false && 
            <View style={style.buttonsAreas}>
                <TouchableOpacity onPress={handleDarkOrLightMode} style={style.buttons}>
                    <Image source={require('../../../../assets/lua.png')} style={{width: 70, height: 70}}/>
                    <Text style={style.buttonsText}>Modo escuro ativo</Text>
                </TouchableOpacity>
            </View>
        } 

        { darkOrLightMode == true && 
            <View style={style.buttonsAreas}>
                <TouchableOpacity onPress={handleDarkOrLightMode} style={style.buttons}>
                    <Image source={require('../../../../assets/sun.png')} style={{width: 70, height: 70}}/>
                    <Text style={style.buttonsText}>Modo claro ativo</Text>
                </TouchableOpacity>
            </View>
        }

            <View style={style.buttonsAreas}>
                <TouchableOpacity style={style.buttons}>
                    <Image source={require('../../../../assets/dollar.png')} style={{width: 70, height: 70}}/>
                    <Text style={style.buttonsText}>Versões Premium</Text>
                </TouchableOpacity>
            </View>

            <View style={style.buttonsAreas}>
                <TouchableOpacity style={style.buttons}>
                    <Image source={require('../../../../assets/configuracoes.png')} style={{width: 70, height: 70}}/>
                    <Text style={style.buttonsText}>Configurações Avançadas</Text>
                </TouchableOpacity>
            </View>

    
        </ScrollView>
    )
}