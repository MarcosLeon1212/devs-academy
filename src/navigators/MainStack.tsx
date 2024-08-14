import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackScreen } from "../screens/StackScreens/HomeStackScreen";
import { LoginStackScreen } from "../screens/StackScreens/LoginStackScreen";



const Stack = createStackNavigator();


export const MainStack = () => {

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
            </Stack.Navigator>
        )
}