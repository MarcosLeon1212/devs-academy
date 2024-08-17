import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

export const RegisterScreen = (props: any) => {

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


    const handleGoToAppMain = () => {
        props.navigation.navigate('Tabs');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSingUp = () => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log('Usuário criado com sucesso: ', user);
            handleGoToAppMain();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('Erro ao criar usuário', errorCode, ' ',  errorMessage);
        })
        
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
                <Text style={style.enterText}>Registre sua conta</Text>
            </View>

            <View style={style.formArea}>
                <Text style={style.label}>Email:</Text>
                <TextInput 
                    placeholder="Email "
                    placeholderTextColor='#aaa'
                    style={style.input}
                    onChangeText={(t) => setEmail(t)}
                />

                <Text style={style.label}>Senha:</Text>
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor='#aaa'
                    style={style.input}
                    secureTextEntry
                    onChangeText={(t) => setPassword(t)}
                />

                <TouchableOpacity style={style.buttonEnter} onPress={handleSingUp}>
                    <Text style={style.buttonEnterText}>Criar Conta</Text>
                </TouchableOpacity>

                <View style={style.otherRegisterForm}>

                    <View>
                        <Text style={style.otherRegisterFormText}>Outras formas de entrar: </Text>
                    </View>


                    <View style={style.iconsArea}>
                        <TouchableOpacity>
                            <Image 
                                source={require('../../../../assets/google.png')}
                                style={{width:30, height: 30}}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image 
                                source={require('../../../../assets/facebook.png')}
                                style={{width:30, height:30}}
                            />
                        </TouchableOpacity>

                    </View>

                </View>

                

            </View>
        </ScrollView>
    );
};
