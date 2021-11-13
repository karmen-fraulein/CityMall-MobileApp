import React from 'react';
import { View, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../Colors/Colors';
import AppSelect from '../Components/CostumComponents/AppSelect';
import countryCodes from '../Components/DialCodePIcker/CountryCodes';
import AppModal from '../Components/CostumComponents/AppModal';
import SelectDialCode from '../Components/DialCodePIcker/SelectDialCode';


const WorkingScreen = () => {
    return (
        <View style ={{flex: 1, backgroundColor: Colors.black, justifyContent: 'center' }}>
           <SelectDialCode/>
        </View>
    );
};




export default WorkingScreen;