import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

export const LoginStackScreen = (props: any) => {

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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               
                const user = userCredential.user;
                console.log('Usuário autenticado:', user);
                handleGoToAppMain();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Erro na autenticação:', errorCode, errorMessage);
                alert('Email ou senha inválidos');
            });
    };

    const handleGoToAppMain = () => {
        props.navigation.navigate('Tabs');
    };

    const handleGoToRegister = () => {
        props.navigation.navigate('Registro');
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.imageArea}>
                <Image 
                    source={require('../../../../assets/halterLoginScreen.png')}
                    style={{width:100, height: 100}}
                />
            </View>

            <View style={styles.enterTextArea}>
                <Text style={styles.enterText}>Entre com sua conta</Text>
            </View>

            <View style={styles.formArea}>
                <Text style={styles.label}>Email:</Text>
                <TextInput 
                    placeholder="Email "
                    placeholderTextColor='#aaa'
                    style={styles.input}
                    onChangeText={(t) => setEmail(t)}
                />

                <Text style={styles.label}>Senha:</Text>
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor='#aaa'
                    style={styles.input}
                    secureTextEntry
                    onChangeText={(t) => setPassword(t)}
                />

                <TouchableOpacity style={styles.buttonEnter} onPress={handleSignIn}>
                    <Text style={styles.buttonEnterText}>Entrar</Text>
                </TouchableOpacity>

                <Text>Não tem uma conta?<TouchableOpacity onPress={handleGoToRegister}><Text style={styles.registerNow}>
                    Registre-se</Text></TouchableOpacity></Text>
            </View>
        </ScrollView>
    );
};
