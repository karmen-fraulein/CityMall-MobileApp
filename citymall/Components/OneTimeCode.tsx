import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../Colors/Colors';
interface IOtpProps {
    getValue: (val: string)=> void
}
const OneTimeCode: React.FC<IOtpProps> = (props) => {
    const [oneTimeCode, setOneTimeCode] = useState<string>('');

    useEffect(() => {
            props.getValue(oneTimeCode)
    }, [oneTimeCode])
    return (
        <View style={{ position: 'relative', borderColor: Colors.white, borderBottomWidth: 1, width: '100%' }}>
            <Text style={{color: Colors.white, fontFamily: 'Pangram-Regular', fontSize: 14}}>გთხოვთ შეიყვანოთ ერთჯერადი კოდი</Text>
            <TextInput 
               value = {oneTimeCode}
               placeholder = 'sms კოდი'
               placeholderTextColor = {Colors.white}
               onChangeText = {(val: string) => setOneTimeCode(val)}
               style={{ width: 250, height: 50, color: Colors.white}}
               maxLength = {4}
               keyboardType = 'numeric'
            
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 35,
                    right: 5
                }}>
               <Text style={{color: Colors.white}}>თავიდან</Text>
            </TouchableOpacity>

        </View>
    );
};

export default OneTimeCode;