import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';


const AppInput = (props: any) => {
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
            lineHeight: 16,
            paddingStart: 12,
            paddingBottom: 12,
            paddingTop: 33
        },

        errorText: {
            color: Colors.red,
            fontSize: 11,
            fontFamily: 'HMpangram-Medium'
        }
    })
    return (
        <>
        <View style={styles.inputWrap}>
            <TextInput
                style={styles.input}
                {...props}
                selectionColor={isDarkTheme ? Colors.white : Colors.black}
                placeholderTextColor={isDarkTheme ? Colors.white : Colors.black} />
        </View>
        {props.errorMessage ?
                <Text style={styles.errorText}>{props.errorMessage}</Text>
                : null}
        </>
    );
};

export default AppInput;