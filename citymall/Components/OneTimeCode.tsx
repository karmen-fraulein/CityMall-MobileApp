import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';

interface IOtpProps {
    getValue: (val: string) => void,
    resend: () => void,
    hasError?: boolean
}
const OneTimeCode: React.FC<IOtpProps> = (props) => {
    const {getValue, resend, hasError} = props;
    const { isDarkTheme } = useContext(AppContext);

    const styles = StyleSheet.create({
        otpContainer: {
            position: 'relative',
            width: '100%',
            borderColor: Colors.white,
            borderBottomWidth: 1,
        },
        otpTitle: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'Pangram-Medium',
            fontSize: 13,
            fontWeight: '500',
            lineHeight: 17,
            marginBottom: 10
        },
        otpInput: {
            paddingVertical: 12,
            color: isDarkTheme ? Colors.white : Colors.black
        },
        otpIputPlaceholder : {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'Pangram-Bold',
            fontSize: 13,
        },
        otpResend: {
            position: 'absolute',
            top: 44,
            right: 5
        },
        otpResendText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'Pangram-Medium',
            fontSize: 13,
            fontWeight: '500',
            lineHeight: 17,
        },
        errorText: {
            position: 'absolute',
            bottom: -20,
            color: Colors.red,
            fontSize: 11,
            fontFamily: 'Pangram-Regular'
        }
    });

    const [oneTimeCode, setOneTimeCode] = useState<string>('');

    useEffect(() => {
        getValue(oneTimeCode);
    }, [oneTimeCode]);

    const handleOneTimePasscode = (value: any) => {
        if(isNaN(value)) {
            return;
        } else {
            setOneTimeCode(value);
        }
    };

    return (
        <View style={styles.otpContainer}>
            <Text style={styles.otpTitle}>გთხოვთ შეიყვანოთ ერთჯერადი კოდი</Text>
            <TextInput
                style = {styles.otpInput}
                value={oneTimeCode}
                placeholder='sms კოდი'
                placeholderTextColor={isDarkTheme ? Colors.white : Colors.black}
                onChangeText={(val: string) => handleOneTimePasscode(val)}
                maxLength={4}
                keyboardType='numeric'
                autoFocus = {true}
                textContentType = 'oneTimeCode'
            />
            <TouchableOpacity style={styles.otpResend} onPress={resend}>
                <Text style={styles.otpResendText}>თავიდან</Text>
            </TouchableOpacity>
            {hasError? <Text style={styles.errorText}>ერთჯერადი კოდი არასწორია</Text> : null }
        </View>
    );
};

export default OneTimeCode;