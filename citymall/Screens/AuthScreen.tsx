import React from 'react';
import {
    Dimensions, Image, View, StatusBar, Text,
    ScrollView, StyleSheet, NativeSyntheticEvent,
    NativeScrollEvent, TouchableOpacity, Pressable
} from 'react-native';
import { Colors } from '../Colors/Colors';
import Grid from '../Styles/grid';



const AuthScreen = (props: any ) => {

    const styles = StyleSheet.create({
        authBtnContainer: {
            height: Grid.col_3.height,
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        authBtn: {
            width: '100%',
            maxWidth: 325,
            height: '100%',
            maxHeight: 66,
            backgroundColor: Colors.darkGrey,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: Colors.black,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
        },

        btnText: {
            color: Colors.white,
            fontSize: 14,
            lineHeight: 17,
            fontWeight: '800',
        }

    })



    return (
        <View style={[Grid.col_12, { backgroundColor: Colors.black, justifyContent: 'center' }]}>
            <View style={[Grid.col_3, styles.authBtnContainer]}>
                <TouchableOpacity style={styles.authBtn}>
                    <Text style={styles.btnText}>რეგისტრაცია</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.authBtn} onPress={() => props.navigation.navigate('SignInScreen')}>
                    <Text style={styles.btnText}>ავტორიზაცია</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default AuthScreen;