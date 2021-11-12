import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../Colors/Colors';
import AppSelect from '../Components/AppSelect/AppSelect';
import countryCodes from '../Components/AppSelect/CountryCodes';


const WorkingScreen = () => {
    return (
        <View style ={{flex: 1, backgroundColor: Colors.black, justifyContent: 'center' }}>
            <AppSelect data = {countryCodes}/>
            
        </View>
    );
};

export default WorkingScreen;