import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppTabScreen } from "../screens/TabScreens/AppTabScreen";
import { style } from "../screens/StackScreens/RegisterScreen/styles";
import { TrainingTabScreen } from "../screens/TabScreens/TrainingTabScreen";
import { ScheduleTabScreen } from "../screens/TabScreens/ScheduleTabScreen";
import { ProTabScreen } from "../screens/TabScreens/ProTabScreen";
import { ConfigTabScreen } from "../screens/TabScreens/ConfigTabScreen";


const Tab = createBottomTabNavigator();


export const MainTab = () => {

    return(
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let imgSource = null;

                    switch(route.name){
                        case 'Home':
                            imgSource = require('../../assets/home.png')
                        break;

                        case 'Treinos':
                            imgSource = (require('../../assets/halteres.png'))
                        break;

                        case 'Horários Agendados':
                            imgSource = (require('../../assets/agenda.png'))
                        break;

                        case 'Profissionais':
                            imgSource = (require('../../assets/adulto.png'))
                        break;

                        case 'Configurações':
                            imgSource = (require('../../assets/configuracoes.png'))

                        
                    }

                    return <Image source={imgSource} style={{width:35, height:35}}/>
                },
                tabBarActiveTintColor: '#a079f0',
                tabBarInactiveTintColor: '#eaeaea',
                tabBarActiveBackgroundColor: '#2d3846',
                tabBarInactiveBackgroundColor: '#2d3846'
            })}

            
            >
        
            <Tab.Screen 
                name="Treinos"
                component={TrainingTabScreen}
                
            />

            <Tab.Screen 
                name="Profissionais"
                component={ProTabScreen}
            />


            <Tab.Screen 
                name="Home"
                component={AppTabScreen}
              
            />

            <Tab.Screen 
                name="Horários Agendados"
                component={ScheduleTabScreen}
            />

            <Tab.Screen 
                name="Configurações"
                component={ConfigTabScreen}
            />

            
        </Tab.Navigator>
    )
}