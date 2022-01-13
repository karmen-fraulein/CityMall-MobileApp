import React, { useContext, useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, KeyboardType } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';


interface IAppInput {
    name: string,
    placeholder?: string,
    isRequired: boolean,
    validationRule: string,
    addValidation?: (actionTpe: string, inputName: string) => void;
    hasError?: boolean,
    errors?: string[] | [],
    value: string,
    onChangeText: (value: string) => void,
    onBlur?: () => void,
    keyboardType?: KeyboardType,
    maxLength?: number
    selectionColor?: string
    placeholderTextColor?: string,
    style?: any,
    multiline?: boolean,
    numberOfLines?: number

}

const validations: any = {
    required: 'გთხოვთ შეავსოთ ველი',
    phoneNumber: 'არასწორი მობილური ნომერი',
    email: 'არასწორი მეილი',
    idNumber: 'არასწორი პირადი ნომერი'
}

const AppInput: React.FC<IAppInput> = (props) => {
    const { isRequired, validationRule, addValidation, hasError, errors, name, value, maxLength, style } = props;
    const { isDarkTheme } = useContext(AppContext);
    const { width } = useDimension();


    const styles = StyleSheet.create({
        inputWrap: {
            width: '100%',
            position: 'relative',
            borderColor: isDarkTheme ? Colors.white : Colors.black,
            borderBottomWidth: 1,

        },

        input: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Medium',
            fontWeight: '500',
            fontSize: 14,
            // lineHeight: 16,
           paddingVertical: 12,
            // paddingTop: 33,
        },

        errorText: {
            color: Colors.red,
            fontSize: 11,
            fontFamily: 'HMpangram-Medium'
        }
    });

    const [errorMessage, setErrorMesage] = useState<string>('');


    useEffect(() => {
        if (isRequired) {
            if (value === '') {
                addValidation!('add', name);
            } else {
                if (validationRule !== 'phoneNumber')
                    addValidation!('remove', name);
                setErrorMesage('');
            };
        }

    }, [value, isRequired]);

    useEffect(() => {
        let index = errors?.findIndex((e: string) => e === name);
        console.log(hasError, index, errors)
        if (hasError && index! >= 0) {
            
            setErrorMesage('გთხოვთ შეავსოთ ველი');
        }
    }, [hasError, errors]);

    useEffect(() => {
        if (validationRule === 'email' && value !== '') {
            let regex = /\S+@\S+\.\S+/;
            if (regex.test(value)) {
                setErrorMesage('');
            } else {
                addValidation!('add', name);
                setErrorMesage(validations[validationRule]);
            };
        }
    }, [value, validationRule]);

    useEffect(() => {
        if (validationRule === 'phoneNumber') {
            if (value === '') {
                setErrorMesage('');
            } else if (value.length === 9) {
                addValidation!('remove', name);
                setErrorMesage('');
            } else if (maxLength && (value.length !== 9 || value !== '')) {
                addValidation!('add', name);
                setErrorMesage(validations[validationRule])
            }
        }
    }, [value, validationRule, maxLength])

    console.log('maxLength', maxLength)

    return (
        <>
            <View style={styles.inputWrap}> 
                <TextInput
                    style={style || styles.input}
                    {...props}
                    selectionColor={isDarkTheme ? Colors.white : Colors.black}
                    placeholderTextColor={isDarkTheme ? Colors.white : Colors.black} />
            </View>
            {errorMessage !== '' ?
                <Text style={styles.errorText}>{errorMessage}</Text>
                : null}
        </>
    );
};

export default AppInput;