import React, {
    useState,
    useContext,
    useEffect
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { Colors } from '../Colors/Colors';
import AppInput from '../Components/CostumComponents/AppInput';
import OneTimeCode from '../Components/OneTimeCode';
import AppChekBox from '../Components/CostumComponents/AppChekBox';
import Layout from '../Components/Layouts/Layout';
import { AppContext } from '../AppContext/AppContext';
import AuthService from '../Services/AuthService';
import { setItem, getItem } from '../Services/StorageService';
import DialCodePicker from '../Components/CostumComponents/DialCodePicker';


const AuthScreen = () => {
    const { setIsAuth, setPhoneNumber } = useContext(AppContext);

    const [step, setStep] = useState<number>(0);
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);
    const [selectedDialCode, setSelectedDialCode] = useState<string>('')
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMessages, setErrorMesages] = useState<string[] | []>([]);
    const [otp, setOtp] = useState<string>('');
    const [otpError, setOtpError] = useState<boolean>(false);
    const [agreedTerms, setAgreedTerms] = useState<boolean>(false);
    const [agreedTermsError, setAgreedTermsError] = useState<boolean>(false);
    const [alreadyAgreedTerms, setAlreadyAgreedTerms] = useState<boolean>(false);

    useEffect(() => {
        getItem('hasAgreedTerms').then(value => {
            if (!value) {
                setAlreadyAgreedTerms(false);
            } else {
                setAlreadyAgreedTerms(true);
            };
        });
    }, []);

    useEffect(() => {
        if (errorMessages.length === 0) {
            setHasError(false);
        };
    }, [errorMessages]);

    const validataInputs = (actionType: string, inputName: string) => {
        if (actionType === 'add') {
            let errorArray = [...errorMessages];
            let index = errorArray.findIndex((e: string) => e === inputName);
            if (index >= 0) {
                return;
            } else {
                errorArray.push(inputName);
                setErrorMesages(errorArray);
            };
        } else {
            let errorArray = errorMessages.filter(e => e !== inputName);
            setErrorMesages(errorArray);
        }
    }

    const handleSelectedValue = (data: string) => {
        setSelectedDialCode(data);
    };

    const getOtpValue = (value: string) => {
        setOtp(value);
    };

    const toggleAgreedTerms = () => {
        if (!alreadyAgreedTerms) {
            setItem('hasAgreedTerms', '1');
        }
        if (!otpError && otp !== '') {
            Keyboard.dismiss();
        };
        setAgreedTerms(!agreedTerms);
        setAgreedTermsError(false);
    };

    const signIn = async (type: string) => {
        if (errorMessages.length > 0) {
            setHasError(true);
            return;
        };

        let data;
        if (type === 'new' || type === 'resend') {
            setOtp('');
            data = {
                username: selectedDialCode.slice(1) + userPhoneNumber,
                otp: ''
            };
        } else {
            if (step === 1 && (!agreedTerms && !alreadyAgreedTerms)) {
                setAgreedTermsError(true);
                return;
            };
            data = {
                username: selectedDialCode.slice(1) + userPhoneNumber,
                otp: otp
            };
        };
        setButtonLoading(true);
        AuthService.SignIn(data).then(res => {
            AuthService.setToken(res.data.access_token, res.data.refresh_token);
            setButtonLoading(false);
            setPhoneNumber(userPhoneNumber);
            setIsAuth(true);
        }).catch(e => {
            let error = JSON.parse(JSON.stringify(e.response)).data.error;
            setButtonLoading(false);
            if (error === 'require_otp') {
                setStep(1);
                setButtonLoading(false);
            } else if (error === 'inalid_otp') {
                setOtpError(true);
                setButtonLoading(false);
                return;
            };
        });
    };

    console.log('errorMessages ====> ', errorMessages)

    return (
        <Layout>
            <View style={{ flex: 1, paddingHorizontal: '10%' }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <Text style={styles.authTitle}>პირველადი ავტორიზაცია</Text>
                </View>
                <View style={{ flex: 6 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <DialCodePicker onSelect={handleSelectedValue} />
                        </View>
                        <View style={{ width: '80%', justifyContent: 'flex-end' }}>
                            <AppInput
                                name='phoneNumber'
                                hasError={hasError}
                                addValidation={validataInputs}
                                errors={errorMessages}
                                isRequired={true}
                                validationRule='phoneNumber'
                                keyboardType='numeric'
                                value={userPhoneNumber}
                                maxLength={selectedDialCode == '+995' ? 9 : undefined}
                                onChangeText={(val: string) => setUserPhoneNumber(val)} />
                        </View>
                    </View>
                    {step === 1 &&
                        <View style={{ marginTop: 30 }}>
                            <OneTimeCode getValue={getOtpValue} resend={() => signIn('resend')} hasError={otpError} />
                            {
                                alreadyAgreedTerms ?
                                    null
                                    :
                                    <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
                                        <AppChekBox
                                            checked={agreedTerms}
                                            onChange={toggleAgreedTerms}
                                            hasError={agreedTermsError} />
                                        <Text style={styles.agreeTermsText}>ვეთანხმები წესებს და პირობებს</Text>
                                    </View>
                            }
                        </View>}
                </View>
                <TouchableOpacity style={styles.authBtn} onPress={() => signIn(step === 0 ? 'new' : 'signIn')} disabled={buttonLoading}>
                    {buttonLoading ?
                        <ActivityIndicator animating={buttonLoading} color='#dadde1' />
                        :
                        <Text style={styles.btnText}>{step === 0 ? 'კოდის მიღება' : 'ავტორიზაცია'}</Text>
                    }
                </TouchableOpacity>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    authContainer: {
        paddingHorizontal: 30,
        justifyContent: 'space-between'
    },

    authTitle: {
        textAlign: 'center',
        color: Colors.white,
        fontFamily: 'HMpangram-Bold',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 22,
        alignItems: 'center',
        textTransform: 'uppercase'
    },

    agreeTermsText: {
        color: Colors.white,
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'HMpangram-Bold',
        textTransform: 'uppercase'
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
        marginBottom: 30
    },

    btnText: {
        color: Colors.white,
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '800',
        textTransform: 'uppercase',
        fontFamily: 'HMpangram-bold'
    },
    errorText: {
        position: 'absolute',
        bottom: -20,
        color: Colors.red,
        fontSize: 11,
        fontFamily: 'HMpangram-Medium'
    }
});

export default AuthScreen;


