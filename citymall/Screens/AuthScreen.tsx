import React, { useState, useContext, useEffect } from 'react';
import {
    View, Text,
    StyleSheet, NativeSyntheticEvent,
    TouchableOpacity, Pressable
} from 'react-native';
import axios from 'axios';
import { Colors } from '../Colors/Colors';
import AppInput from '../Components/CostumComponents/AppInput';
import OneTimeCode from '../Components/OneTimeCode';
import Grid from '../Styles/grid';
import AppChekBox from '../Components/CostumComponents/AppChekBox';
import Layout from '../Components/Layouts/Layout';
import { AppContext } from '../AppContext/AppContext';



const AuthScreen: React.FC = (props) => {

    const styles = StyleSheet.create({
        authContainer: {
            paddingHorizontal: 30,
            justifyContent: 'space-between'
        },

        authTitle: {
            textAlign: 'center',
            color: Colors.white,
            fontFamily: 'Pangram-Bold',
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

    const { setIsAuth, isDarkTheme } = useContext(AppContext);

    const [step, setStep] = useState<number>(0);
    const [phoneNumber, setPhoneNumber] = useState<string>('995');
    const [otp, setOtp] = useState<string>('');
    const [otpError, setOtpError] = useState<boolean>(false);
    const [agreedTerms, setAgreedTerms] = useState<boolean>(false);
    const [agreedTermsError, setAgreedTermsError] = useState<boolean>(false);


    const getOtpValue = (value: string) => {
        console.log('getOtpValue', value)
        setOtp(value);
    };

    const toggleAgreedTerms = () => {
        setAgreedTerms(!agreedTerms);
        setAgreedTermsError(false);
    };

    

    const signIn = async () => {
        if (step === 1 && !agreedTerms) {
            setAgreedTermsError(true);
            return;
        }
        // setIsAuth(true);
        let data = new URLSearchParams();
        data.append('grant_type', 'password');
        data.append('client_id', 'ClientApp');
        data.append('client_secret', 'secret');
        data.append('UserName', phoneNumber);
        if (otp !== '') {
            data.append('OTP', otp)
        };
        setOtpError(false);

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };


        await axios.post('https://citymallidentity.payunicard.ge:8060/connect/token', data, config)
            .then(res => {
                console.log('res.data ======>', res.data);
                setIsAuth(true);
            })
            .catch(e => {
                let error = JSON.parse(JSON.stringify(e.response)).data.error;
                console.log('catch e =====>', JSON.parse(JSON.stringify(e.response)).data.error);
                if (error === 'require_otp') {
                    setStep(1);
                } else if (error === 'inalid_otp') {
                    setOtpError(true);
                    return;
                };
            });
    }


    return (
        <Layout>
            <View style={[Grid.col_12, { paddingHorizontal: '10%' }]}>
                <View style={[Grid.col_3, { justifyContent: 'center' }]}>
                    <Text style={styles.authTitle}>პირველადი ავტორიზაცია</Text>
                </View>
                <View style={[Grid.col_6, { justifyContent: 'space-around' }]}>
                    <AppInput
                        style={{ color: isDarkTheme ? Colors.white : Colors.black }}
                        keyboardType='numeric'
                        value={phoneNumber}
                        onChangeText={(val: string) => setPhoneNumber(val)} />
                    <View style={[Grid.row_8, { marginTop: 60, justifyContent: 'space-around' }]}>
                        {step === 1 ?
                            <>
                                <OneTimeCode getValue={getOtpValue} resend={signIn} hasError={otpError} />
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <AppChekBox
                                        checked={agreedTerms}
                                        onChange={toggleAgreedTerms}
                                        hasError={agreedTermsError} />
                                    <Text style={styles.agreeTermsText}>ვეთანხმები წესებს და პირობებს</Text>
                                </View>
                            </> : null}
                    </View>
                </View>
                <View style={[Grid.col_3, { justifyContent: 'flex-end' }]}>
                    <TouchableOpacity style={styles.authBtn} onPress={signIn}>
                        <Text style={styles.btnText}>{step === 0 ? 'კოდის მიღება' : 'ავტორიზაცია'}</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </Layout>
    );
};

export default AuthScreen;