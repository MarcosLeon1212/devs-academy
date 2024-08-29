import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export const InfosTabScreen = () => {

    return(
        <ScrollView style={styles.container}>
           <View style={styles.pageTitleArea}>
                <Text style={styles.pageTitleText}>Quer saber o que estamos fazendo do app? Quer dar novas ideias? Aqui você tem tudo</Text>
           </View>

           <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Dê a sua ideia</Text>
                </TouchableOpacity>
           </View>

           <View style={styles.infosArea}>
                <Text style={styles.infoText}> Nossa primeira versão do aplicativo mais completo de academia. Para você Usuário Comum 
                    que quer apenas organizar seus treinos, para você Educador Físico que quer ter o controle sob seus alunos, para você
                    aluno que quer ter todas suas informações de treino, avaliações físicas vindo do seu personal, esse é o (nome do app).
                    Sejam bem vindo a essa jornada!
                </Text>
           </View>
        </ScrollView>
    )
}