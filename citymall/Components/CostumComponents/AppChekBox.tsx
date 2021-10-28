import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../Colors/Colors';

interface IAppChekBox  {
    checked: boolean,
    onChange: ()=> void
}

const AppChekBox: React.FC<IAppChekBox> = (props: any) => {
    console.log(props.checked)
    const [isChecked, setIsChecked] = useState<boolean>(props.checked);
    useEffect(() => {
        setIsChecked(props.checked);
    }, [props.checked]);


    const styles = StyleSheet.create({
        roundCheck: {
            position: 'relative',
            width: 24,
            height: 24,
            borderRadius:12,
            borderWidth: 1,
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

        checkmarkCircle: {
            position: 'absolute',
            left:1,
            top:-2,
            
        },

        checkmarkStem: {
            position: 'absolute',
            width:2,
            height:10,
            backgroundColor:Colors.black,
            left:11,
            top:6,
        },
        checkmarkkick: {
            position: 'absolute',
            width:7,
            height:2,
            backgroundColor:Colors.black,
            left:6,
            top:15,
        }  

    })




    return (
        <TouchableOpacity style={[styles.roundCheck, isChecked ? styles.activeColor : styles.inactiveColor]} onPress={props.onChange}>
            <View style={styles.checkmarkCircle}>
            <View style={styles.checkmarkStem} />
            <View style={styles.checkmarkkick}/>
            </View>
        </TouchableOpacity>
    );
};

export default AppChekBox;