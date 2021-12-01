import React, { useEffect, useState } from 'react';
import { View, Animated, Text } from 'react-native';
import { Colors } from '../Colors/Colors';
import ApiServices, {IDisctrictsRespone} from '../Services/ApiServices';
import DistrictPiker from '../Components/CostumComponents/DistrictPiker';
import AppPicker from '../Components/CostumComponents/AppPicker';
import DialCodePicker from '../Components/CostumComponents/DialCodePicker';



const WorkingScreen = () => {
    const [districts, setDistricts] = useState<any>([])

    useEffect(() => {
        ApiServices.GetDistricts().then(res => {
           setDistricts(res.data)
        })
    }, []);

    console.log('districts --->',districts )
    const tt = (data: string) => {
        console.log(data)
    }
    return (
        <View style ={{flex: 1, backgroundColor: Colors.black, justifyContent: 'center' }}>
          <AppPicker data = {districts}/>
          <DialCodePicker/>

        </View>
    );
};




export default WorkingScreen;