import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../Colors/Colors';
import Grid from '../Styles/grid';

const RegistrationScreen = () => {
    const styles = StyleSheet.create({
        authBtn: {
            alignSelf: 'center',
            width: 325,
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
    const [step, setStep] = useState<number>(0);
    return (
        <View style={{flex:1, backgroundColor: Colors.black}}>
             <View style={[Grid.col_3, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={{ color: Colors.white, fontFamily: 'Pangram-Medium', paddingLeft: 31, paddingTop: 40 }}>ENG</Text>
                <Image style={{ width: 135, height: 17, marginTop: 40 }} source={require('../assets/images/city-mall-title.png')} />
                <Image style={{ width: 89, height: 89 }} source={require('../assets/images/arrow-down.png')} />
            </View>
            <View style={Grid.col_6}>

            </View>
            <View style={[Grid.col_3, { justifyContent: 'space-between' }]}>
                <TouchableOpacity style={styles.authBtn} onPress={()=>{}}>
                    <Text style={styles.btnText}>{step === 0 ? 'კოდის მიღება' : 'ავტორიზაცია'}</Text>
                </TouchableOpacity>
                <Image style={{ width: 89, height: 89 }} source={require('../assets/images/arrow-up.png')} />
            </View>
        </View>
    );
};

export default RegistrationScreen;