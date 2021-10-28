import React from 'react';
import {
    Dimensions, Image, View, StatusBar, Text,
    ScrollView, StyleSheet, NativeSyntheticEvent,
    NativeScrollEvent, TouchableOpacity, Pressable, TextInput
} from 'react-native';
import { Colors } from '../../Colors/Colors';


const AppInput = (props: any) => {
    return (
        <View style={{ position: 'relative',   borderColor: Colors.white }}>
            <TextInput placeholder='მომხმარებელი' style={{ height: 60, borderBottomWidth: 1, borderBottomColor: Colors.white }} />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 23,
                    right: 5
                }}>
                <Image source={ props.type === 'password'?
                    require('../../assets/images/password-eye.png')
                    :
                    require('../../assets/images/password-eye-shown.png')
                } 

                 style={{
                    width: 22,
                    height: 13,
                    
                }}/>
            </TouchableOpacity>

        </View>
    );
};

export default AppInput;