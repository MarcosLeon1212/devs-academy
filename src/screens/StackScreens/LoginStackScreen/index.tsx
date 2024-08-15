import React from "react";
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";


export const LoginStackScreen = (props: any) => {

    const handleGoRegister = () => {
        props.navigation.navigate('Register');
    }

    const handleGoAppMain = () => {
        props.navigation.navigate('Nome do App');
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.imageArea}>
                <Image 
                    source={require('../../../../assets/halterLoginScreen.png')}
                    style={{width:100, height:100,}}
                />
            </View>

            <View style={styles.enterTextArea}>
                <Text style={styles.enterText}>Coloque sua conta e entre</Text>
            </View>

            <View style={styles.formArea}>

                <Text style={styles.label}>Nome de Usuário:</Text>
                <TextInput 
                    placeholder="Nome de Usuário "
                    placeholderTextColor='#aaa'
                    style={styles.input}
                />

                <Text style={styles.label}>Senha:</Text>
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor='#aaa'
                    style={styles.input}
                    secureTextEntry
                />

                


                <TouchableOpacity style={styles.buttonEnter} onPress={handleGoAppMain}>
                    <Text style={styles.buttonEnterText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={styles.textNoAccount}>Não tem uma conta?
                    <TouchableOpacity activeOpacity={0.7} onPress={handleGoRegister}>
                    <Text style={styles.registerNow}>
                    Registre-se
                    </Text></TouchableOpacity></Text>

            </View>
        </ScrollView>
    )
}