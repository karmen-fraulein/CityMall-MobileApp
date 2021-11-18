import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../Colors/Colors';

interface IAppChekBox {
    checked: boolean,
    onChange?: () => void,
    hasError?: boolean
}

const AppChekBox: React.FC<IAppChekBox> = (props: any) => {
    const { checked, onChange, hasError } = props;

    const [isChecked, setIsChecked] = useState<boolean>(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);


    const styles = StyleSheet.create({
        roundCheck: {
            position: 'relative',
            marginVertical: 5,
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            alignItems:'center',
            justifyContent: 'center',
            borderColor: Colors.white,
            transform: [
                { rotate: "45deg" },
            ]
        },
        activeColor: {
            backgroundColor: Colors.white
        },
        inactiveColor: {
            backgroundColor: Colors.black
        },

        checkmark: {
            borderBottomColor: Colors.black,
            borderBottomWidth:3,
            borderRightColor: Colors.black,
            borderRightWidth: 3,
            width: 6,
            height: 10
        },

        errorText: {
            position: 'absolute',
            top: 26,
            color: Colors.red,
            fontSize: 11,
            fontFamily: 'HMPangram-Regular'
        }

    })




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