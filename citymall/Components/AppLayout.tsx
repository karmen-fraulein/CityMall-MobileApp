import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import AppNavigator from '../Navigation/AppNavigator';
import { navigationRef } from '../Services/NavigationServices';
import Grid from '../Styles/grid';
import AppHeader from './AppHeader';


const AppLayout = (props: any) => (
    <NavigationContainer  ref = {navigationRef}>
        <AppNavigator >
            <>
                <AppHeader />
                <View style={Grid.col_11}>
                    {props.children}
                </View>
            </>
        </AppNavigator>
    </NavigationContainer>
)

export default AppLayout;