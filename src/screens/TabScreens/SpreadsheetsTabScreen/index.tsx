import React from "react";
import { ScrollView, View, Text} from "react-native";
import { style } from "./styles";


export const SpreadsheetsTabScreen = () => {

    return(
        <ScrollView style={style.container}>
            <View style={style.divisionArea}>
                <Text style={style.bigText}>Divisão 1</Text>
                <Text style={style.littleText}>Seg: Peito e Bunda</Text>
                <Text style={style.littleText}>Ter: Descanso porque o cara não é de ferro</Text>
                <Text style={style.littleText}>Quar: Descanso porque o cara não é de ferro</Text>
                <Text style={style.littleText}>Qui: Peito e bunda dnv</Text>
                <Text style={style.littleText}>Sex: Sextou BB, sem treino</Text>
            </View>

            <View style={style.divisionArea}>
                <Text style={style.bigText}>Divisão 2</Text>
                <Text style={style.littleText}>Seg: Peito e Biceps</Text>
                <Text style={style.littleText}>Ter: Quadríceps</Text>
                <Text style={style.littleText}>Quar: Ombreta</Text>
                <Text style={style.littleText}>Qui: Costa e Triceps</Text>
                <Text style={style.littleText}>Sex: Posterior de coxa</Text>
            </View>

            <View style={style.divisionArea}>
                <Text style={style.bigText}>Divisão 3</Text>
                <Text style={style.littleText}>Seg: Dia de RP</Text>
                <Text style={style.littleText}>Ter: Freefas apelão</Text>
                <Text style={style.littleText}>Quar: Costa e Freefas</Text>
                <Text style={style.littleText}>Qui: Biceps, Triceps, costa, peito e GTA RP</Text>
                <Text style={style.littleText}>Sex: Dia de RP</Text>
            </View>

            
            <View style={style.divisionArea}>
                <Text style={style.bigText}>Divisão 4</Text>
                <Text style={style.littleText}>Seg: Não treino perna</Text>
                <Text style={style.littleText}>Ter: Toguro pae</Text>
                <Text style={style.littleText}>Quar: Filipe Divino na mansão maromba</Text>
                <Text style={style.littleText}>Qui: Nerdola programador</Text>
                <Text style={style.littleText}>Sex: Dia de RP, assistir jogo e bater maneta</Text>
            </View>


        </ScrollView>
    )
}