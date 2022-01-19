import React, {useContext, useEffect} from 'react';
import { AppContext } from '../AppContext/AppContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../Services/NavigationServices';
import HomeScreen from '../Screens/HomeScreen';
import AuthScreen from '../Screens/AuthScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import UserCardWithBarcode from '../Screens/UserCardWithBarcode';
import WorkingScreen from '../Screens/WorkingScreen';
import ShopDetailsScreen from '../Screens/ShopDetailsScreen';
import OrderGiftCardScreen from '../Screens/OrderGiftCardScreen';
import CheckGiftCardBalanceScreen from '../Screens/CheckGiftCardBalanceScreen';
import StatusInfoScreen from '../Screens/ProfileScreen/StatusInfoScreen';
import { useState } from 'react';
import RegistrationScreen2 from '../Screens/RegistrationScreen2';
import { ScreenTwo } from '../Screens/Registration';
import AuthService from '../Services/AuthService';
import { Text } from 'react-native';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';



const Stack = createStackNavigator();

const AppStack = () => {
    const { state, setGlobalState } = useContext(AppContext);
    const { isAuthenticated } = state
    
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            if(data) {
                setGlobalState({isAuthenticated: true});
            }else {
                setGlobalState({isAuthenticated: false});
            }
        }).finally(() => {
            setIsInitialized(true)
        })
            
    }, [])

    if(!isInitialized) return <Text>Loading ...</Text>

    return (
        <NavigationContainer  ref = {navigationRef}>
            <Stack.Navigator initialRouteName='AuthScreen'>
                {isAuthenticated === false? 
                (
                    <Stack.Screen
                    name='AuthScreen'
                    component={AuthScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                ):(
                    <>
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
                    name='RegistrationScreen2'
                    component={RegistrationScreen2}
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
                <Stack.Screen
                    name='OrderGiftCardScreen'
                    component={OrderGiftCardScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='ProfileScreen'
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='StatusInfoScreen'
                    component={StatusInfoScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                </>)}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;