import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "../screens/StackScreens/HomeStackScreen";
import { LoginStackScreen } from "../screens/StackScreens/LoginStackScreen";
import { RegisterScreen } from "../screens/StackScreens/RegisterScreen";
import { AppScreen } from "../screens/StackScreens/AppStackScreen";
import { AppTabScreen } from "../screens/TabScreens/AppTabScreen";
import { MainTab } from "./MainTab";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();





export const MainStack = (props: any) => {

        return(
            <Stack.Navigator>
                <Stack.Screen 
                    name="Página inicial"
                    component={HomeStackScreen}
                    options={{
                        headerStyle:{
                            backgroundColor: '#2d3846',
                            borderColor:'#000',
                            borderWidth: 2
                        },

                        headerTitleStyle:{
                            color: '#fff'
                        }
                    }}
                />

                <Stack.Screen 
                    name="Login"
                    component={LoginStackScreen}
                    options={{
                        headerStyle:{
                            backgroundColor: '#2d3846',
                            borderColor: '#000',
                            borderWidth:2
                        },

                        headerTitleStyle:{
                            color:'#fff'
                        }
                    }}
                />

                <Stack.Screen 
                    name="Registro"
                    component={RegisterScreen}
                    options={{
                        headerStyle:{
                            backgroundColor: '#2d3846',
                            borderColor: '#000',
                            borderWidth: 2
                        },

                        headerTitleStyle:{
                            color: '#fff'
                        }
                    }}
                />

                <Stack.Screen 
                    name="Tabs"
                    component={MainTab}
                    options={{
                        headerTransparent: true,
                        title: '',
                        headerShown: false
                    }}
                />


                   
            </Stack.Navigator>
        )
}

