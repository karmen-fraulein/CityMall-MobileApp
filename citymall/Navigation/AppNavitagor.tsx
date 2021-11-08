import React from 'react';
import {View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BurgerMenu from '../Components/BurgerMenu';



const Drawer = createDrawerNavigator();


const AppNavigator: React.FC = (props) => {
    return (
        <Drawer.Navigator
            drawerContent={props => (
                <BurgerMenu
                    {...props}
                />
            )}
        >
            <Drawer.Screen name="HomeScreen2" children={() => (
                <View>{props.children}</View>
            )} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};

export default AppNavigator;