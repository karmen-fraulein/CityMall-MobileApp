import React, { useState } from 'react';
import {
    Dimensions, Image, View, StatusBar, Text,
    ScrollView, StyleSheet, NativeSyntheticEvent,
    NativeScrollEvent, TouchableOpacity, Pressable
} from 'react-native';
import { Colors } from '../Colors/Colors';
import AppChekBox from '../Components/CostumComponents/AppChekBox';
import AppInput from '../Components/CostumComponents/AppInput';
import Grid from '../Styles/grid';



const SignInScreen = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const styles = StyleSheet.create({

    })

    const tt = () => {
        setToggleCheckBox(!toggleCheckBox)
    }



    return (
        <View style={[Grid.col_12, { backgroundColor: Colors.black }]}>
            <View style={Grid.col_4}>
                <Text>
                    ავტორიზაცია
                </Text>

                <View style={{ paddingHorizontal: '10%' }}>
                    <AppInput />
                    <AppInput />
                    <AppChekBox checked = {toggleCheckBox} onChange = {tt}/>
                </View>
                
            </View>
        </View>
    );
};

export default SignInScreen;