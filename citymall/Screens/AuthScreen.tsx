import React, { useState, useContext } from 'react';
import {
    Dimensions, Image, View, StatusBar, Text,
    ScrollView, StyleSheet, NativeSyntheticEvent,
    TouchableOpacity, Pressable
} from 'react-native';
import axios from 'axios';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import AppInput from '../Components/CostumComponents/AppInput';
import OneTimeCode from '../Components/OneTimeCode';
import Grid from '../Styles/grid';
import AppChekBox from '../Components/CostumComponents/AppChekBox';
import { SafeAreaView } from 'react-native-safe-area-context';

const authObj = {
    grant_type: 'password',
    client_id: 'ClientApp',
    UserName: '995558120936',
    client_secret: 'secret'
}

const AuthScreen: React.FC = (props) => {

    const styles = StyleSheet.create({
        authContainer: {
            paddingHorizontal: 30,
            justifyContent: 'space-between'
        },

        authTitle: {
            textAlign: 'center',
            color: Colors.white,
            fontFamily: 'Pangram-Medium',
            fontSize: 18,
            fontWeight: '700',
            lineHeight: 22,
            alignItems: 'center'
        },
        agreeTermsText: {
            color: Colors.white,
            marginLeft: 10,
            fontSize: 14,
            fontWeight: '500',
            fontFamily: 'Pangram-Regular'
        },

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

    });

    const { setIsAuth } = useContext(AppContext);

    const [step, setStep] = useState<number>(0);
    const [phoneNumber, setPhoneNumber] = useState<string>('995');
    const [otp, setOtp] = useState<string>('');
    const [agreedTerms, setAgreedTerms] = useState<boolean>(false);

    const getOtpValue = (value: string) => {
        console.log('getOtpValue', value)
        setOtp(value);
    };

    const signIn = async () => {
        // setIsAuth(true);
        let data = new URLSearchParams();
        data.append('grant_type', 'password');
        data.append('client_id','ClientApp');
        data.append('client_secret','secret');
        data.append('UserName', phoneNumber);
        if(otp !== '') {
            data.append('OTP', otp)
        }

        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }


        await axios.post('https://citymallidentity.payunicard.ge:8060/connect/token', data, config)
            .then(res => {
                console.log('res.data ======>', res.data);
                setIsAuth(true);
            })
            .catch(e => {
                console.log('catch e =====>', );
                if(JSON.parse(JSON.stringify(e.response)).data.error === 'require_otp') {
                    setStep(1);
                }
                
            });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black }}>
            <View style={[Grid.col_3, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <Text style={{ color: Colors.white, fontFamily: 'Pangram-Medium', paddingLeft: 31, paddingTop: 40 }}>ENG</Text>
                <Image style={{ width: 135, height: 17, marginTop: 40 }} source={require('../assets/images/city-mall-title.png')} />
                <Image style={{ width: 89, height: 89 }} source={require('../assets/images/arrow-down.png')} />
            </View>
            <View style={[Grid.col_5, styles.authContainer]}>
                <View style={[Grid.row_1]}>
                    <Text style={styles.authTitle}>პირველადი ავტორიზაცია</Text>
                </View>
                <View style={[Grid.row_2]}>
                    <AppInput
                        style={{ width: 250, height: '100%', color: Colors.white }}
                        keyboardType = 'numeric'
                        value={phoneNumber}
                        onChangeText={(val: string) => setPhoneNumber(val)} />
                </View>
                <View style={[Grid.row_2, {}]}>
                    {step === 1 ? <OneTimeCode getValue={getOtpValue} /> : null}
                </View>
                <View style={[Grid.row_1,]}>
                    {step === 1 ? <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }}
                        onPress={() => setAgreedTerms(!agreedTerms)}>
                        <AppChekBox checked={agreedTerms} onChange={() => setAgreedTerms(!agreedTerms)} />
                        <Text style={styles.agreeTermsText}>ვეთანხმები წესებს და პირობებს</Text>
                    </TouchableOpacity> : null}
                </View>
            </View>
            <View style={[Grid.col_1,]}>

            </View>
            <View style={[Grid.col_3, { justifyContent: 'space-between' }]}>
                <TouchableOpacity style={styles.authBtn} onPress={signIn}>
                    <Text style={styles.btnText}>{step === 0 ? 'კოდის მიღება' : 'ავტორიზაცია'}</Text>
                </TouchableOpacity>
                <Image style={{ width: 89, height: 89 }} source={require('../assets/images/arrow-up.png')} />
            </View>
        </SafeAreaView>
    );
};

export default AuthScreen;