import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { style } from "../../screens/StackScreens/RegisterScreen/styles";


export const PersonalInfos = () => {

    return(
        <ScrollView style={styles.container}>
            <View style={styles.infoArea}>
                <Text style={styles.infoText}>Nome: ***</Text>
                <Text style={styles.infoText}>Idade: **</Text>
                <Text style={styles.infoText}>Altura: *,**</Text>
                <Text style={styles.infoText}>Peso: ****</Text>
                <Text style={styles.infoText}>Gordura corporal: ***</Text>
            </View>

        </ScrollView>
    )
}