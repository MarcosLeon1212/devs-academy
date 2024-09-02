import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { style } from "./style";


export const MountTrainingStackScreen = () => {

    return(
        <ScrollView style={style.container}>
            <View style={style.titleArea}>
                <Text style={style.titleText}>Nome do exercício</Text>
            </View>

            <View style={style.exerciseArea}>
                <Text style={style.seriesText}>Séries</Text>
                <TextInput placeholder="Número de Séries"  style={style.inputSeries} placeholderTextColor='#999'/>

                <View style={style.weightRepsArea}>
                    <Text style={style.weight}>Carga(kg):</Text>  
                    <TextInput placeholder="Carga do Exercício" style={style.input} placeholderTextColor='#999'/>
                    <Text style={style.reps}>Repetições:</Text> 
                    <TextInput placeholder="Repetições do Exercício" style={style.input} placeholderTextColor='#999'/>
                </View>

                <View style={style.buttonArea}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}>Adicionar Exercício</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}