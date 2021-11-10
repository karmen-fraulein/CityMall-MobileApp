import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import AppChekBox from '../Components/CostumComponents/AppChekBox';
import AppInput from '../Components/CostumComponents/AppInput';
import DatePicker from 'react-native-datepicker';
import Layout from '../Components/Layouts/Layout';
import Grid from '../Styles/grid';
import ApiServices from '../Services/ApiServices';
import { ScrollView } from 'react-native-gesture-handler';

const RegistrationScreen: React.FC = (props: any) => {
    const { isDarkTheme, userPhoneNumber } = useContext(AppContext);

    const styles = StyleSheet.create({
        regTitle: {
            textAlign: 'center',
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'Pangram-Bold',
            fontSize: 18,
            fontWeight: '700',
            lineHeight: 22,
            alignItems: 'center'
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
            color: isDarkTheme ? Colors.white : Colors.black,
            fontSize: 14,
            lineHeight: 17,
            fontWeight: '800',
        },
        labelText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'Pangram-Bold',
            fontSize: 14,
            fontWeight: '700',
            lineHeight: 17,
            marginLeft: 7
        },
        inputWithLabel: {
            flexDirection: 'row',
            alignItems: 'center'

        },
        genderCheck: {
            marginTop: '10%',
            borderBottomColor: isDarkTheme ? Colors.white : Colors.black,
            borderBottomWidth: 1
        },
        mailVerification: {
            width: '100%',
            marginVertical: 20
        },
        mailVerificationTextWrap: {
            paddingRight: '10%'
        },
        mailVerificationText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'Pangram-Regular',
            fontSize: 14,
            lineHeight: 14
        },
        mailVerificationSubtext: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'Pangram-Regular',
            fontSize: 10,
            lineHeight: 14
        },
        registerSuccess: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'Pangram-Bold',
            fontSize: 18,
            fontWeight: '700',
            lineHeight: 22,
            textAlign: 'center'
        },
        errorText: {
            color: Colors.red,
            fontSize: 11,
            fontFamily: 'Pangram-Regular'
        }
    });



    const [step, setStep] = useState<number>(0);
    const [buttonLoading, setButtonLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);
    const [lastname, setLastname] = useState<string>('');
    const [lastnameError, setLastnameError] = useState<boolean>(false);
    const [idNumber, setIdNumber] = useState<string>('');
    const [idNumberError, setIdNumberError] = useState<boolean>(false);
    const [isForeignResident, setIsForeignResident] = useState<boolean>(false);
    const [gender, setGender] = useState<any>({
        male: false,
        female: false,
        other: false,
        error: false,
    });
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [birthDateError, setBirthDateError] = useState<boolean>(false);
    const [district, setDistrict] = useState<string>('');
    const [districtError, setDistrictError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [verifyEmail, setVerifyEmail] = useState<boolean>(false);
    const [emailVerificationCode, setEmailVerificationCode] = useState<string>('');
    const [verifyEmailError, setVerifyEmailError] = useState<boolean>(false);
    const [agreedTerms, setAgreedTerms] = useState<any>({
        value: false,
        error: false,
    });


    useEffect(() => {

    }, [isForeignResident, idNumber]);

    useEffect(() => {
        if (email.length === 0) {
            setEmailError(false);
        } else {
            let regex = /\S+@\S+\.\S+/;
            if (regex.test(email)) {
                setEmailError(false);
            } else {
                setEmailError(true);
            };
        };
    }, [email]);

    useEffect(() => {
        if (!isForeignResident) {
            if (idNumber.length === 11 || idNumber.length === 0) {
                setIdNumberError(false);
            } else {
                setIdNumberError(true);
            }
        } else {
            setIdNumberError(false);
        };
    }, [idNumber, isForeignResident]);

    useEffect(() => {
        if (verifyEmail) {
            handleSendMailOtp();
        };
    }, [verifyEmail])

    const handleGenderChange = (type: string) => {
        if (type === 'male') {
            setGender({
                male: true,
                female: false,
                other: false,
                error: false,
            });
        } else if (type === 'female') {
            setGender({
                male: false,
                female: true,
                other: false,
                error: false,
            });
        } else {
            setGender({
                male: false,
                female: false,
                other: true,
                error: false,
            });
        };
    };

    const handleStep = () => {
        // if(step === 0) {
        //     if(name === '') {
        //         setNameError(true);
        //         return;
        //     } else if (lastname === '') {
        //         setLastnameError(true);
        //         return;
        //     } else if(isForeignResident && idNumber === '') {
        //         setIdNumberError(true);
        //         return
        //     } else if (!gender.male || !gender.female || ! gender.other) {
        //         setGender((prev: any) => {
        //             return {
        //                 ...prev, error: true
        //             };
        //         });
        //         return;
        //     };
        // } else if (step === 1) {
        //     if(dateOfBirth === '') {
        //         setBirthDateError(true);
        //         return;
        //     } else if (district === '') {
        //         setDistrictError(true);
        //         return;
        //     } else if (!agreedTerms) {
        //         setAgreedTerms((prev: any) => {
        //             return {
        //                 ...prev, error: true
        //             };
        //         });
        //     };
        // }
        if (step > 1) {
            handleAddVirtualCard();
            return
        }
        setStep(step + 1);

    };

    const handleSendMailOtp = () => {
        let data = {
            mail: email
        };
        ApiServices.SendMailOtp(data)
            .then(res => {
                console.log('res', res);
            })
            .catch(e => {
                console.log(JSON.parse(JSON.stringify(e.response)).data.error);
            });
    };

    const handleCheckMailOtp = () => {
        let data = {
            email: email,
            otp: emailVerificationCode
        };

        ApiServices.CheckMailOtp(data)
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(JSON.parse(JSON.stringify(e.response)).data.error);
            });
    };

    const handleAddVirtualCard = () => {
        setButtonLoading(true);
        let date = dateOfBirth.split('-');
        let data = {
            personCode: idNumber,
            birthDate: date[2] + '-' + date[1] + '-' + date[0],
            firstName: name,
            lastName: lastname,
            phone: userPhoneNumber,
            email: email,
            address: district,
            sex: gender.male ? 1 : gender.female ? 0 : 2,
            mailOtp: emailVerificationCode
        };

        ApiServices.AddVirtualCard(data)
            .then(res => {
                setButtonLoading(false);
                console.log('AddVirtualCard', res.data);
                setStep(2);
            })
            .catch(e => {
                setButtonLoading(false);
                console.log(JSON.parse(JSON.stringify(e.response)).data.error);
            });
    }
    console.log(userPhoneNumber)

    return (
        <Layout hasBackArrow>
            <ScrollView keyboardShouldPersistTaps='never' contentContainerStyle={[Grid.col_12, { paddingHorizontal: '10%' }]}>
                {step !== 2 ?
                    <View style={[Grid.row_12_5, {}]}>
                        <Text style={styles.regTitle}>რეგისტრაცია</Text>
                    </View> : null}
                {step === 0 ?
                    <View style={[Grid.col_9, {}]}> 
                        <AppInput
                            style={{ color: isDarkTheme ? Colors.white : Colors.black }}
                            placeholder='სახელი'
                            placeholderTextColor={isDarkTheme ? Colors.white : Colors.black}
                            value={name}
                            onChangeText={(val: string) => setName(val)} />
                        {nameError ?
                            <Text style={styles.errorText}>გთხოვთ შეავსოთ ველი</Text>
                            : null}
                        <AppInput
                            style={{ color: isDarkTheme ? Colors.white : Colors.black }}
                            placeholder='გვარი'
                            placeholderTextColor={isDarkTheme ? Colors.white : Colors.black}
                            value={lastname}
                            onChangeText={(val: string) => setLastname(val)} />
                        {lastnameError ?
                            <Text style={styles.errorText}>გთხოვთ შეავსოთ ველი</Text>
                            : null}
                        <View>
                            <AppInput
                                style={{ color: isDarkTheme ? Colors.white : Colors.black, }}
                                placeholder='პირადი ნომერი'
                                placeholderTextColor={isDarkTheme ? Colors.white : Colors.black}
                                keyboardType={isForeignResident ? 'default' : 'number-pad'}
                                value={idNumber}
                                onChangeText={(val: string) => setIdNumber(val)} />
                            {idNumberError ?
                                <Text style={styles.errorText}>პირადობის ნომერი არასწორია</Text>
                                : null}
                            <TouchableOpacity style={styles.inputWithLabel} onPress={() => setIsForeignResident(!isForeignResident)}>
                                <AppChekBox checked={isForeignResident} onChange={() => setIsForeignResident(!isForeignResident)} />
                                <Text style={styles.labelText}>უცხო ქვეყნის მოქალაქე</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.genderCheck}>
                            <TouchableOpacity style={styles.inputWithLabel} onPress={() => handleGenderChange('female')}>
                                <AppChekBox checked={gender.female} onChange={() => handleGenderChange('female')} />
                                <Text style={styles.labelText}>მდედრობითი</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.inputWithLabel} onPress={() => handleGenderChange('male')}>
                                <AppChekBox checked={gender.male} onChange={() => handleGenderChange('male')} />
                                <Text style={styles.labelText}>მამრობითი</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.inputWithLabel} onPress={() => handleGenderChange('other')}>
                                <AppChekBox checked={gender.other} onChange={() => handleGenderChange('other')} />
                                <Text style={styles.labelText}>სხვა</Text>
                            </TouchableOpacity>
                            {gender.error ?
                                <Text style={styles.errorText}>გთხოვთ აირჩიოთ სქესი </Text>
                                : null}
                        </View>
                    </View> : null}
                {step === 1 ?
                    <View style={[Grid.col_9, {}]}>
                        <DatePicker
                            style={{ width: '100%' }}
                            placeholder='დაბადების თარიღი'
                            date={dateOfBirth}
                            onDateChange={(date) => setDateOfBirth(date)}
                            format='DD-MM-YYYY'
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    alignItems: 'flex-start',
                                    borderWidth: 0,
                                    borderBottomWidth: 1,
                                    borderBottomColor: Colors.white
                                },
                                placeholderText: {
                                    color: isDarkTheme ? Colors.white : Colors.black,
                                    fontFamily: 'Pangram-Bold',
                                    fontSize: 14,
                                    fontWeight: '700',
                                    lineHeight: 17,
                                    paddingLeft: 5
                                },
                                dateText: {
                                    color: isDarkTheme ? Colors.white : Colors.black,
                                    fontFamily: 'Pangram-Bold',
                                    fontSize: 14,
                                    fontWeight: '700',
                                    lineHeight: 17,
                                    paddingLeft: 5

                                }
                            }}
                        />

                        <AppInput
                            style={{ color: isDarkTheme ? Colors.white : Colors.black }}
                            placeholder='საცხოვრებელი რაიონი'
                            placeholderTextColor={isDarkTheme ? Colors.white : Colors.black}
                            value={district}
                            onChangeText={(val: string) => setDistrict(val)} />
                        {districtError ?
                            <Text style={styles.errorText}>გთხოვთ შეავსოთ ველი</Text>
                            : null}
                        <View style={{ alignItems: 'flex-start' }}>
                            <AppInput
                                style={{ color: isDarkTheme ? Colors.white : Colors.black, }}
                                placeholder='ელ-ფოსტა'
                                placeholderTextColor={isDarkTheme ? Colors.white : Colors.black}
                                keyboardType='email-address'
                                value={email}
                                onChangeText={(val: string) => setEmail(val)} />
                            {emailError ?
                                <Text style={styles.errorText}>არასწორი მეილის ფორმატი</Text>
                                : null}
                            <View style={styles.mailVerification}>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#28AD25" }}
                                        thumbColor={Colors.white}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() => setVerifyEmail(!verifyEmail)}
                                        value={verifyEmail} />
                                    <View style={styles.mailVerificationTextWrap}>
                                        <Text style={styles.mailVerificationText}>ელ-ფოსტის ვერიფიკაცია</Text>
                                        <Text style={styles.mailVerificationSubtext}>ელ-ფოსტის ვერიფიკაციის გავლის შემდეგ მიიღებთ 100 ქულას საჩუქრად</Text>
                                    </View>
                                </View>
                                {verifyEmail ?
                                    <>
                                        <AppInput
                                            style={{ color: isDarkTheme ? Colors.white : Colors.black, }}
                                            placeholder='ვერიფიკაციის კოდი'
                                            placeholderTextColor={isDarkTheme ? Colors.white : Colors.black}
                                            value={emailVerificationCode}
                                            onChangeText={(val: string) => setEmailVerificationCode(val)} />
                                        <TouchableOpacity onPress={handleCheckMailOtp}>
                                            <Text style={{ color: '#FFFFFF' }}>შეამოწმე</Text>
                                        </TouchableOpacity>
                                    </>
                                    : null}
                            </View>
                        </View>
                        <View >
                            <View style={styles.inputWithLabel}>
                                <AppChekBox checked={agreedTerms.value} onChange={() => setAgreedTerms({ value: !agreedTerms.value, error: false })} />
                                <Text style={styles.labelText}>ვეთანხმები წესებს და პირობებს</Text>
                                {agreedTerms.error ?
                                    <Text style={styles.errorText}>გთხოვთ დაეთანხმოთ წესებსა და პირობებს</Text>
                                    : null}
                            </View>
                        </View>
                    </View> : null}
                {step === 2 ?
                    <View style={[Grid.col_9, { alignItems: 'center', justifyContent: 'center' }]}>
                        <Image source={require('../assets/images/success-mark.png')} style={{ width: 64, height: 64, marginBottom: 20 }} />
                        <Text style={styles.registerSuccess}>რეგისტაცია წარმატებით დასრულდა</Text>
                    </View> : null}
                <View style={[Grid.row_12_5, {}]}>
                    {step === 0 ?
                        <TouchableOpacity style={styles.authBtn} onPress={handleStep}>
                            <Text style={styles.btnText}>შემდეგი</Text>
                        </TouchableOpacity> :
                        step === 1 ?
                            <TouchableOpacity style={styles.authBtn} onPress={handleAddVirtualCard} disabled = {buttonLoading}>
                                {buttonLoading ?
                                    <ActivityIndicator animating={buttonLoading} color='#dadde1' />
                                    :
                                    <Text style={styles.btnText}>დადასტურება</Text>
                                }
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.authBtn} onPress={() => props.navigation.navigate('HomeScreen')}>
                                <Text style={styles.btnText}>დახურვა</Text>
                            </TouchableOpacity>
                    }
                </View>
            </ScrollView>
        </Layout>
    );
};

export default RegistrationScreen;