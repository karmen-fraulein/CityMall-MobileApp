import React from 'react';
import { View } from 'react-native';
import AppNavigator from '../Navigation/AppNavitagor';
import Grid from '../Styles/grid';
import AppHeader from './AppHeader';


const AppLayout: React.FC = (props) => (
    <AppNavigator >
        <>
            <AppHeader />
            <View style={Grid.col_11}>
                {props.children}
            </View>
        </>
    </AppNavigator>)

export default AppLayout;