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
import OneTimeCode from '../Components/OneTimeCode';
import AppCheckBox from '../Components/CustomComponents/AppCheckBox';
import Layout from '../Components/Layouts/Layout';
import { AppContext } from '../AppContext/AppContext';
import AuthService from '../Services/AuthService';
import { setItem, getItem } from '../Services/StorageService';
import AppInput from '../Components/CustomComponents/AppInput';
import DialCodePicker from '../Components/CustomComponents/DialCodePicker';

const AuthScreen = () => {
    const { setGlobalState } = useContext(AppContext);


    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string[] | []>([]);
    const [step, setStep] = useState<number>(0);
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);
    const [selectedDialCode, setSelectedDialCode] = useState<string>('')
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('')
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

    const validateInputs = (actionType: string, inputName: string) => {
        if (actionType === 'add') {
            let errorArray = [...errorMessages];
            let index = errorArray.findIndex((e: string) => e === inputName);
            if (index >= 0) {
                return;
            } else {
                errorArray.push(inputName);
                setErrorMessages(errorArray);
            };
        } else {
            let errorArray = errorMessages.filter(e => e !== inputName);
            setErrorMessages(errorArray);
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
        if (passwordError) {
            setPasswordError('');
        };
        let data;
        if (type === 'new' || type === 'resend') {
            setOtp('');
            data = {
                username: selectedDialCode.slice(1) + userPhoneNumber,
                otp: '',
                password: '',
            };
        } else {

            if (step === 2 && (!agreedTerms && !alreadyAgreedTerms)) {
                setAgreedTermsError(true);
                return;
            };
            data = {
                username: selectedDialCode.slice(1) + userPhoneNumber,
                otp: otp,
                password: password
            };
        };
        setButtonLoading(true);
        AuthService.SignIn(data).then(res => {
            AuthService.setToken(res.data.access_token, res.data.refresh_token);
            setButtonLoading(false);
            setGlobalState({
                userPhoneNumber,
                isAuthenticated: true,
            });
            // setPhoneNumber(userPhoneNumber);
            // setIsAuth(true);
        }).catch(e => {
            setButtonLoading(false);
            let error = JSON.parse(JSON.stringify(e.response)).data.error;
            console.log(error)
            switch (error) {
                case 'require_otp':
                    setStep(2);
                    setButtonLoading(false);
                    break;
                case 'require_password':
                    setStep(1);
                    setButtonLoading(false);
                    break;
                case 'invalid_password':
                    setButtonLoading(false);
                    setPasswordError('პაროლი არასწორია')
                    break;
                case 'invalid_otp':
                    setOtpError(true);
                    setButtonLoading(false);
                    break;

                default:
                    break;
            }
        });
    };

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
                                addValidation={validateInputs}
                                errors={errorMessages}
                                isRequired={true}
                                validationRule='phoneNumber'
                                keyboardType='numeric'
                                value={userPhoneNumber}
                                maxLength={selectedDialCode == '+995' ? 9 : undefined}
                                onChangeText={(val: string) => setUserPhoneNumber(val)} />
                        </View>
                    </View>
                    {step == 1 &&
                        <View >
                            <AppInput
                                name='password'
                                hasError={hasError}
                                addValidation={validateInputs}
                                errors={errorMessages}
                                errorMessage={passwordError}
                                isRequired={true}
                                validationRule='required'
                                value={password}
                                autoFocus={true}
                                onChangeText={(val: string) => setPassword(val)} />
                        </View>}
                    {step === 2 &&
                        <View style={{ marginTop: 30 }}>
                            <OneTimeCode getValue={getOtpValue} resend={() => signIn('resend')} hasError={otpError} />
                            {
                                alreadyAgreedTerms ?
                                    null
                                    :
                                    <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>
                                        <AppCheckBox
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


