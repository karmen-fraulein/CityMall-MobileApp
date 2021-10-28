import React, { useState, useContext, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Grid from '../Styles/grid';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppHeader from '../Components/AppHeader';
import HomeScreen from '../Screens/HomeScreen';
import AuthScreen from '../Screens/AuthScreen';
import SignInScreen from '../Screens/SignInScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignInScreen'>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{
                        header: () => <AppHeader />,
                        headerStyle: {
                            height: Grid.col_1.height,
                            backgroundColor: Colors.black,


                        }
                    }}
                />
                <Stack.Screen
                    name='AuthScreen'
                    component={AuthScreen}
                    options={{
                        headerTitleContainerStyle: {
                            left: 0,
                          },
                        headerTitle: () => (
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', width: 160, margin: 0}}>
                                <Text style={{ color: Colors.white }}>ENG</Text>
                                <Text style={{ color: Colors.white, fontSize: 22 }}>სითი მოლი</Text>
                            </TouchableOpacity>
                        ),
                        headerTintColor: Colors.white,
                        headerStyle: {
                            height: 25,
                            backgroundColor: Colors.black,
                        }
                    }}
                />
                <Stack.Screen
                    name='SignInScreen'
                    component={SignInScreen}
                    options={{
                        headerTitleContainerStyle: {
                            left: 0,
                          },
                        headerTitle: () => (
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', width: 160, margin: 0}}>
                                <Text style={{ color: Colors.white }}>ENG</Text>
                                <Text style={{ color: Colors.white, fontSize: 22 }}>სითი მოლი</Text>
                            </TouchableOpacity>
                        ),
                        headerTintColor: Colors.white,
                        headerStyle: {
                            height: 25,
                            backgroundColor: Colors.black,
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;