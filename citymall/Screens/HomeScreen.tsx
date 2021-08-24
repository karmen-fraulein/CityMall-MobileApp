import React from "react";
import { Image, View, StatusBar, Text, ScrollView } from 'react-native';
import AppHeader from "../Components/AppHeader";

const HomeScreen = () => {
    return (

        <View style={{flex: 1}}>
                <AppHeader/>
            <View style={{flex: 11}} >
                <Text>This is a HomeScreen</Text>
            </View>
            
            
        </View>
    )

}

export default HomeScreen;