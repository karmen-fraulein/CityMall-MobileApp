import React from 'react';
import {
    Dimensions, Image, View, StatusBar, Text,
    ScrollView, StyleSheet, NativeSyntheticEvent,
    NativeScrollEvent, TouchableOpacity, Pressable, TextInput
} from 'react-native';
import { Colors } from '../../Colors/Colors';


const AppInput = (props: any) => {
    console.log(props.type)
    return (
        <View style={{ position: 'relative', borderColor: Colors.white, borderBottomWidth: 1, width: '100%' }}>
            <TextInput 
               {...props}
                
            />
            {/* <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 23,
                    right: 5
                }}>
                <Image source={props.type === 'password' ?
                    require('../../assets/images/password-eye.png')
                    :
                    null
                }

                    style={{
                        width: 22,
                        height: 13,

                    }} />
            </TouchableOpacity> */}

        </View>
    );
};

export default AppInput;