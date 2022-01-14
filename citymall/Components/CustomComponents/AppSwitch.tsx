import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {  } from 'react-native-gesture-handler';
import { Colors } from '../../Colors/Colors';

export interface IAppSwitch {

}

const AppSwitch: React.FC<IAppSwitch> =() => {
    const animatedBall = useRef(new Animated.Value(0));
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        if(isActive) {
            console.log('aqane')
            Animated.timing(animatedBall.current, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false
            }).start();
            
        } else {
            console.log('iqine')
            Animated.timing(animatedBall.current, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false
            }).start();
        }
    }, [isActive])

    const activeBallStyle = {
        left: animatedBall.current.interpolate({
            inputRange: [0, 1],
            outputRange: [26, 3],
        })
    }
    const inactiveBallStyle = {
        left: animatedBall.current.interpolate({
            inputRange: [0, 1],
            outputRange: [3, 26],
        })
    }



    const toggleSwitchBall = () => {
        setIsActive(!isActive)
    }

    console.log(isActive)



    return (
        <TouchableOpacity style={styles.switchView} onPress={toggleSwitchBall}>
            <Animated.View style={[styles.switchBall, isActive? inactiveBallStyle : activeBallStyle  ]}/>
        </TouchableOpacity>
    )
}
export default  AppSwitch;

const styles = StyleSheet.create({
    switchView: {
        width: 49, 
        height: 24 , 
        borderWidth: 1, 
        borderColor: Colors.white, 
        borderRadius: 15,
        paddingVertical: 3,
        backgroundColor: '#28AD25'
    },
    switchBall : {
        position: 'relative',
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: Colors.white
    }
})
