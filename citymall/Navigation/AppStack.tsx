import React, {useContext, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import AuthScreen from '../Screens/AuthScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import { AppContext } from '../AppContext/AppContext';

const Stack = createStackNavigator();

const AppStack = () => {
   
    const {isAuthenticated} = useContext(AppContext);
    useEffect(() => {

    }, [isAuthenticated])
    return (
        !isAuthenticated?
        <AuthScreen/>
        :
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='HomeScreen2'
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='RegistrationScreen'
                    component={RegistrationScreen}
                    options={{
                        // headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;