import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useState } from "react";


export const DaysTrainingScreen = (props) => {

    const [days, setDays] = useState({
        Domingo: false,
        Segunda: false,
        Terça: false,
        Quarta: false,
        Quinta: false,
        Sexta: false,
        Sábado: false
    })

    const toggleDay = (day) => {
        setDays((prevState) => ({
          ...prevState,
          [day]: !prevState[day],
        }));
      };

    return(
        <ScrollView style={styles.container}>
                 <ScrollView horizontal={true} style={{margin: 20}}>
                 {Object.keys(days).map((day) => (
        <TouchableOpacity
          key={day}
          style={[styles.button, days[day] ? styles.active : styles.inactive]}
          onPress={() => toggleDay(day)}
        >
          <Text style={{color: '#eaeaea'}}>{day}</Text>
        </TouchableOpacity>
      ))}
                 </ScrollView> 
        </ScrollView>
    )
}