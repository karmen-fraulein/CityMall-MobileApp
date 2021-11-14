import React from 'react';
import { View } from 'react-native';
import DateSelect from './DayPicker';

const DatePicker = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View>
            <DateSelect/>
            </View>
         
           
        </View>
    );
};

export default DatePicker;