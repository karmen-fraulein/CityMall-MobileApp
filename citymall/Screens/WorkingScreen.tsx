import React, { useEffect, useState } from 'react';
import { View, Animated, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../Colors/Colors';
import countryCodes from '../Components/DialCodePIcker/CountryCodes';
import AppModal from '../Components/CostumComponents/AppModal';
import SelectDialCode from '../Components/DialCodePIcker/SelectDialCode';
import DateSelect from '../Components/DatePicker/DateSelect';
import DatePicker from '../Components/DatePicker/DatePicker';
import ApiServices, {IDisctrictsRespone} from '../Services/ApiServices';
import DistrictPiker from '../Components/CostumComponents/DistrictPiker';



const WorkingScreen = () => {
    const [districts, setDistricts] = useState<any>([])

    useEffect(() => {
        ApiServices.GetDistricts().then(res => {
           setDistricts(res.data)
        })
    }, [])
    const tt = (data: string) => {
        console.log(data)
    }
    return (
        <View style ={{flex: 1, backgroundColor: Colors.black, justifyContent: 'center' }}>
            <Text>asdasdasdasd</Text>
         <DistrictPiker districts = {districts} placeholder = 'აირჩიეთ უბანი'/>

        </View>
    );
};




export default WorkingScreen;