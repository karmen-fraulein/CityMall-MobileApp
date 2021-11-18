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
        pagetitle: {
            fontSize: 18,
            lineHeight: 21,
            color: Colors.white,
            textAlign: 'center',
            fontVariant: ['proportional-nums'],
            fontFamily: 'HMPangram-Regular'
        }

    })

    const toggleChecked = () => {
        setToggleCheckBox(!toggleCheckBox)
    }



    return (
        <View style={[Grid.col_12, { backgroundColor: Colors.black, paddingHorizontal:  '10%'}]}>
            <View style={Grid.col_2}/>
            <View style={Grid.col_4}>
                <View style={[Grid.col_3, { alignItems: 'center' }]}>
                    <Text style={styles.pagetitle}>
                        ავტორიზაცია
                    </Text>
                </View>
                <View style={Grid.col_9}>
                    <AppInput
                        type='text'
                        placeholder='მომხმარებელი'
                        placeholderTextColor='#FFFFFF'
                        style={{ color: Colors.white, height: 60, borderBottomWidth: 1, borderBottomColor: Colors.white }} />
                    <AppInput
                        type='password'
                        placeholder='პაროლი'
                        keyboardTpe='visible-password'
                        placeholderTextColor='#FFFFFF'
                        style={{ color: Colors.white, height: 60, borderBottomWidth: 1, borderBottomColor: Colors.white }}
                    />
                    <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', marginTop: 30 }}
                        onPress={toggleChecked}>
                        <AppChekBox checked={toggleCheckBox} onChange={toggleChecked} />
                        <Text style={{ color: 'white', marginLeft: 10 }}>
                            დამახსოვრება
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Grid.col_2}/>

            <View style={[Grid.col_2, {justifyContent: 'center', alignItems: 'center'}]}>
                <Pressable style={{ width: 325, height: 66, backgroundColor: Colors.darkGrey, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.white }}>
                        ავტორიზაცია
                    </Text>
                </Pressable>
                <TouchableOpacity>
                    <Text style={{ color: Colors.white, textAlign: 'center', marginTop: 25 }}>პაროლის აღდგენა</Text>
                </TouchableOpacity>
            </View>
            <View style={Grid.col_2}/>

        </View>
    );
};

export default SignInScreen;