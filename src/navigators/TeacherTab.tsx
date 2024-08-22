import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppTabScreen } from "../screens/TabScreens/AppTabScreen";
import { AppTabScreenProf } from "../screens/TabScreens/AppTabScreenProf";


const Tab = createBottomTabNavigator();


export const TeacherTab= () => {

    return(
        <Tab.Navigator>

            <Tab.Screen 
                name="Perfil Educador"
                component={AppTabScreenProf}
            />
            
        </Tab.Navigator>
    )
}