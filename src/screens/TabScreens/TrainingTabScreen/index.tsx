import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, FlatList, TouchableOpacity, Image} from "react-native";
import { styles } from "./styles";


export const TrainingTabScreen = (props: any) => {

    const handleGoToMakeTraining = () => {
        props.navigation.navigate('Monte seu treino');
    }

    
    return(
        <ScrollView style={styles.container}>
            <View style={styles.buttonArea}>
                <Text style={styles.textMakeTraining}>Monte seu treino</Text>
                <TouchableOpacity onPress={handleGoToMakeTraining}>
                    <Image 
                        source={require('../../../../assets/add.png')}
                        style={{width:30, height:30}}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{color: '#eaeaea'}}>Lista de treinos:</Text>
                <View>

                </View>
            </View>
        </ScrollView>
    )
}
