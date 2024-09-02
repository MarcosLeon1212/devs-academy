import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "../screens/StackScreens/HomeStackScreen";
import { LoginStackScreen } from "../screens/StackScreens/LoginStackScreen";
import { RegisterScreen } from "../screens/StackScreens/RegisterScreen";
import { SupportStackScreen } from "../screens/StackScreens/SupportStackScreen";
import { MainTab } from "./MainTab";
import { TeacherTab } from "./TeacherTab";
import { TrainingsStackScreen } from "../screens/StackScreens/TrainingsStackScreen";
import { MountTrainingStackScreen } from "../screens/StackScreens/MountTrainingStackScreen";
import { DaysTrainingScreen } from "../screens/StackScreens/DaysTrainingStackScreen";



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

                <Stack.Screen 
                    name="Professor Tab"
                    component={TeacherTab}
                />

                <Stack.Screen 
                    name="Suporte"
                    component={SupportStackScreen}
                />

                <Stack.Screen 
                    name="Monte seu treino"
                    component={TrainingsStackScreen}
                    options={{
                        headerStyle:{
                            backgroundColor: '#2d3846'
                        },

                        headerTitleStyle:{
                            color: '#eaeaea'
                        }
                    }}
                />

                <Stack.Screen 
                    name="Montando seu Treino"
                    component={MountTrainingStackScreen}
                    options={{
                        headerTransparent: true,
                        headerShown: false,
                        headerStyle:{
                            backgroundColor: '#2d3846',
                        },
                        headerTitleStyle:{
                            color: '#eaeaea'
                        }
                    }}                    
                />

                <Stack.Screen 
                    name="Montando seu treino"
                    component={DaysTrainingScreen}
                    options={{
                        headerStyle:{
                            backgroundColor: '#2d3846'
                        },

                        headerTitleStyle:{
                            color: '#eaeaea'
                        }
                    }}
                />
                   
            </Stack.Navigator>
        )
}

