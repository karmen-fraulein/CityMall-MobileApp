import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';

interface IAppChekBox {
    checked: boolean,
    onChange?: () => void,
    hasError?: boolean
}

const AppChekBox: React.FC<IAppChekBox> = (props: any) => {
    const {isDarkTheme} = useContext(AppContext)
    const { checked, onChange, hasError } = props;

    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);


    const styles = StyleSheet.create({
        roundCheck: {
            position: 'relative',
            marginVertical: 5,
            width: 16,
            height: 16,
            borderRadius: 8,
            borderWidth: 1,
            alignItems:'center',
            justifyContent: 'center',
            borderColor: isDarkTheme? Colors.white : Colors.black,
            transform: [
                { rotate: "45deg" },
            ]
        },
        activeColor: {
            backgroundColor: isDarkTheme? Colors.white : Colors.black
        },
        inactiveColor: {
            backgroundColor: isDarkTheme? Colors.black : Colors.white
        },

        checkmark: {
            borderBottomColor: isDarkTheme? Colors.black : Colors.white,
            borderBottomWidth:2,
            borderRightColor: isDarkTheme? Colors.black : Colors.white,
            borderRightWidth: 2,
            width: 7,
            height: 10,
            position: 'relative',
            top: -1,
            left: -1
        },

        errorText: {
            position: 'absolute',
            top: 26,
            color: Colors.red,
            fontSize: 11,
            fontFamily: 'HMpangram-Medium'
        }
    });

    return (
        <>
        <TouchableOpacity style={[styles.roundCheck, isChecked ? styles.activeColor : styles.inactiveColor]} onPress={onChange}>
            <View style={styles.checkmark}/>
        </TouchableOpacity>
           {hasError? <Text style={styles.errorText}>გთხოვთ დაეთანხმოთ წესებს და პირობებს</Text> : null}
        </>
    );
};

export default AppChekBox;