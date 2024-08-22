import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc, getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { RegisterScreen } from "../RegisterScreen";

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
    const db = getFirestore();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   



    const handleSignIn = async (userCredential: any) => {
        const auth = getAuth(app);
        
        const userCredentials = signInWithEmailAndPassword(auth, email, password)
             .then ( (userCredential) => {
                
                const userLoginForm = async () => {
                    const user = userCredential.user;
                    const docUser = await getDoc(doc(db, 'users', user.uid ));
            
                    console.log('Usuário autenticado:', user);
                
                    if(docUser.exists()){
                        const userData = docUser.data()
                        const entranceMode = userData.entranceMode;
            
                        if(entranceMode == 'Educador Físico'){
                            props.navigation.navigate('Professor Tab');

                        } else if(entranceMode == 'Aluno'){
                            props.navigation.navigate('Tabs');
                        }
                    }
                }

                userLoginForm();

               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Erro na autenticação:', errorCode, errorMessage);
                alert('Email ou senha inválidos');
            });



            
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
