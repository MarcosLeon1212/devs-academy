import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity 

} from "react-native";
import { style } from "./styles";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Picker } from '@react-native-picker/picker';



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
    const db = getFirestore(app);

    const handleGoToAppMain = () => {
        if( entranceMode == 'Educador Físico'){
            props.navigation.navigate('Professor Tab');
        } else if(entranceMode == 'Aluno' ) {
            props.navigation.navigate('Tabs');
        }
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [entranceMode, setEntranceMode] = useState('Educador Físico');

    


    const handleSingUp = () => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log('Usuário criado com sucesso: ', user.uid);
            

            setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                entranceMode,
                name,
                dateOfRegister: new Date()
            })

            sendEmailVerification
            handleGoToAppMain();
            return true;
           
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

                <Text style={style.label}>Nome de usuário:</Text>
                <TextInput 
                    placeholder="Nome do usuário"
                    placeholderTextColor='#aaa'
                    style={style.input}
                    onChangeText={(t) => setName(t)}
                />

                <Text style={style.label}>Senha:</Text>
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor='#aaa'
                    style={style.input}
                    secureTextEntry
                    onChangeText={(t) => setPassword(t)}
                />

                <Text style={style.label}>Você vai entrar como:</Text>
                <Picker 
                    selectedValue={entranceMode}
                    style={style.input}
                    onValueChange={(itemValue, itemIndex) => setEntranceMode(itemValue)}
                >

                <Picker.Item  label="Educador Físico" value='Educador Físico'/>
                <Picker.Item  label="Aluno" value="Aluno"/>
                
                </Picker>



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
