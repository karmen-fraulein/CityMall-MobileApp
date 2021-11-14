import React, {useContext, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../Services/NavigationServices';
import HomeScreen from '../Screens/HomeScreen';
import AuthScreen from '../Screens/AuthScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import UserCardWithBarcode from '../Screens/UserCardWithBarcode';
import { AppContext } from '../AppContext/AppContext';
import WorkingScreen from '../Screens/WorkingScreen';
import ShopDetailsScreen from '../Screens/ShopDetailsScreen';

const Stack = createStackNavigator();

const AppStack = () => {
   
    const {isAuthenticated} = useContext(AppContext);
    useEffect(() => {

    }, [isAuthenticated])

    
    return (
        !isAuthenticated?
        
       //<RegistrationScreen/>
        <AuthScreen/>
        //<ShopDetailsScreen/>
        :
        <NavigationContainer  ref = {navigationRef}>
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
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='UserCardWithBarcode'
                    component={UserCardWithBarcode}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='ShopDetailsScreen'
                    component={ShopDetailsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;