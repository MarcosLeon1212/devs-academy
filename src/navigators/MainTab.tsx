import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppTabScreen } from "../screens/TabScreens/AppTabScreen";
import { style } from "../screens/StackScreens/RegisterScreen/styles";
import { TrainingTabScreen } from "../screens/TabScreens/TrainingTabScreen";
import { InfosTabScreen} from "../screens/TabScreens/InfosTabScreen";
import { SpreadsheetsTabScreen } from "../screens/TabScreens/SpreadsheetsTabScreen";
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

                        case 'Informações':
                            imgSource = (require('../../assets/infosTab.png'))
                        break;

                        case 'Planilhas Básicas':
                            imgSource = (require('../../assets/agenda.png'))
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
                options={{
                    headerStyle:{
                        backgroundColor: '#2d3846'
                    },

                    headerTitleStyle:{
                        color: '#eaeaea'
                    }
                }}
                
            />

            <Tab.Screen 
                name="Planilhas Básicas"
                component={SpreadsheetsTabScreen}
                options={{
                    headerStyle:{
                        backgroundColor: '#2d3846'
                    },

                    headerTitleStyle:{
                        color: '#eaeaea'
                    }
                }}
            />


            <Tab.Screen 
                name="Home"
                component={AppTabScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'#2d3846'
                    },

                    headerTitleStyle:{
                        color:'#eaeaea'
                    },

                    title: 'Perfil'
                }}
              
            />

            <Tab.Screen 
                name="Informações"
                component={InfosTabScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#2d3846'
                    },
                    
                    headerTitleStyle:{
                        color: 'white'
                    }
                }}
            />

            <Tab.Screen 
                name="Configurações"
                component={ConfigTabScreen}
                options={{
                    headerStyle:{
                        backgroundColor: '#2d3846'
                    },
                    
                    headerTitleStyle:{
                        color: '#eaeaea'
                    },

                    
                }}
            />

            
        </Tab.Navigator>
    )
}