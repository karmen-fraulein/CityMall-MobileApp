import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../Colors/Colors';

interface IAppChekBox {
    checked: boolean,
    onChange?: () => void
}

const AppChekBox: React.FC<IAppChekBox> = (props: any) => {
    console.log(props.checked)
    const [isChecked, setIsChecked] = useState<boolean>(props.checked);
    useEffect(() => {
        setIsChecked(props.checked);
    }, [props.checked]);


    const styles = StyleSheet.create({
        roundCheck: {
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

        

    })




    return (
        <TouchableOpacity style={[styles.roundCheck, isChecked ? styles.activeColor : styles.inactiveColor]} onPress={props.onChange}>
            <View style={styles.checkmark}/>
            
        </TouchableOpacity>
    );
};

export default AppChekBox;