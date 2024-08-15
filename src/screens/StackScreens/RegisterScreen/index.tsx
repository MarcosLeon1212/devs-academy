import React from "react";
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";



export const RegisterScreen = (props: any) => {

    const handleGoToAppMain = () => {
        props.navigation.navigate('Nome do App');
    }


    return(
        <ScrollView style={style.container}>
            <View style={style.imageArea}>
                <Image 
                    source={require('../../../../assets/halterLoginScreen.png')}
                    style={{width:100, height: 100}}
                />
            </View>

            <View style={style.enterTextArea}>
                <Text style={style.enterText}>Registre sua nova conta</Text>
            </View>

            <View style={style.formArea}>

                <Text style={style.label}>Nome de Usuário:</Text>
                <TextInput 
                    placeholder="Nome de Usuário "
                    placeholderTextColor='#aaa'
                    style={style.input}
                />

                <Text style={style.label}>Senha:</Text>
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor='#aaa'
                    style={style.input}
                    secureTextEntry
                />

                <Text style={style.label}>Telefone:</Text>
                <TextInput 
                    placeholder="Telefone"
                    placeholderTextColor='#aaa'
                    style={style.input}
                />

               

                <TouchableOpacity style={style.buttonEnter} onPress={handleGoToAppMain}>
                    <Text style={style.buttonEnterText}>Entrar</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    )
}