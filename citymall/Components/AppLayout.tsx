import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppNavigator from '../Navigation/AppNavigator';
import { navigationRef } from '../Services/NavigationServices';
import Grid from '../Styles/grid';
import AppHeader from './AppHeader';


const AppLayout = (props: any) => (
    <NavigationContainer ref={navigationRef}>
        <AppNavigator >
            <>
                <AppHeader />
                <ScrollView style={Grid.col_11} >
                    <View style={{flex: 1}}>
                        {props.children}
                    </View>
                </ScrollView>
            </>
        </AppNavigator>
    </NavigationContainer>
)

export default AppLayout;