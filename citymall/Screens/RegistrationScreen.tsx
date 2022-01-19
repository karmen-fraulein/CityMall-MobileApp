import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, Keyboard, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import AppCheckBox from '../Components/CustomComponents/AppCheckBox';
import Layout from '../Components/Layouts/Layout';
import Grid from '../Styles/grid';
import ApiServices from '../Services/ApiServices';
import { ScrollView } from 'react-native-gesture-handler';
import { GoBack, navigate } from '../Services/NavigationServices';
import { useDimension } from '../Hooks/UseDimension';
import AppInput from '../Components/CustomComponents/AppInput';

export interface IRegistrationProps {
    firstName?: string,
    lastName?: string,
    personCode?: string,
    gender?: boolean,
    birthDate?: string,
    disctrict?: string,
    email?: string,
    phone?: string,
    address?: string,
    sex?: Object,
    mailOtp?: string
}

export interface IGenderTypes {
    male: boolean,
    female: boolean,
    error: boolean
}


const RegistrationScreen: React.FC = (props: any) => {

    const { isDarkTheme, userPhoneNumber, setDetails } = useContext(AppContext);

    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string[] | []>([]);
    const [name, setName] = useState<string>('');
    const [lastName, setLastname] = useState<string>('');
    const [idNumber, setIdNumber] = useState<string>('');
    const [isForeignResident, setIsForeignResident] = useState<boolean>(false);
    const [gender, setGender] = useState<IGenderTypes>({
        male: false,
        female: false,
        error: false,
    });

    useEffect(() => {
        if (errorMessages.length === 0) {
            setHasError(false);
        };
    }, [errorMessages]);


    const validateInputs = (actionType: string, inputName: string) => {
        if (actionType === 'add') {
            let errorArray = [...errorMessages];
            errorArray.push(inputName);
            let uniqueNames = [...new Set(errorArray)];
            setErrorMessages(prevState => {
                return [...prevState, ...uniqueNames]
            });
        } else {
            let errorArray = errorMessages.filter(e => e !== inputName);
            setErrorMessages(errorArray);
        };
    };

    const handleGenderChange = (type: string) => {
        Keyboard.dismiss();
        if (type === 'male') {
            setGender({
                male: true,
                female: false,
                error: false,
            });
        } else {
            setGender({
                male: false,
                female: true,
                error: false,
            });
        };
    };

    const handleStep = () => {
        if (errorMessages.length > 0) {
            setHasError(true);
            return
        };
        const data: IRegistrationProps = {
            firstName: name,
            lastName: lastName,
            personCode: idNumber,
            sex: gender
        }

        navigate('RegistrationScreen2', {
            data
        });


    };

    console.log('errors', errorMessages)



    return (
        <Layout
            hasBackArrow={true}
            onPressBack={() => GoBack()}
        >
            <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ paddingHorizontal: '10%', position: 'relative', flexGrow: 1 }}>
                <View style={[Grid.row_12_5, {}]}>
                    <Text style={[styles.regTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                        რეგისტრაცია
                    </Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <AppInput
                        placeholder='სახელი'
                        name='name'
                        value={name}
                        hasError={hasError}
                        addValidation={validateInputs}
                        errors={errorMessages}
                        isRequired={true}
                        validationRule='required'
                        onChangeText={(val: string) => setName(val)}
                    />
                    <AppInput
                        placeholder='გვარი'
                        name='lastName'
                        value={lastName}
                        hasError={hasError}
                        addValidation={validateInputs}
                        errors={errorMessages}
                        isRequired={true}
                        validationRule='required'
                        onChangeText={(val: string) => setLastname(val)}
                    />
                    <View>
                        <AppInput
                            placeholder='პირადი ნომერი'
                            name='idNumber'
                            value={idNumber}
                            hasError={hasError}
                            addValidation={validateInputs}
                            errors={errorMessages}
                            isRequired={true}
                            validationRule='idNumber'
                            maxLength={isForeignResident ? undefined : 11}
                            keyboardType={isForeignResident ? 'default' : 'number-pad'}
                            onChangeText={(val: string) => setIdNumber(val)}
                        />
                        <TouchableOpacity
                            style={styles.inputWithLabel}
                            onPress={() => setIsForeignResident(!isForeignResident)}
                        >
                            <AppCheckBox
                                name = 'isForeign'
                                checked={isForeignResident}
                                onChange={() => setIsForeignResident(!isForeignResident)}
                                isRequired={false}
                            />
                            <Text style={[styles.labelText, { color: isDarkTheme ? Colors.white : Colors.black, }]}>
                                უცხო ქვეყნის მოქალაქე
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.genderCheck, { borderBottomColor: isDarkTheme ? Colors.white : Colors.black, }]}>
                        <Text style={{ color: Colors.white, fontFamily: 'HMpangram-Medium', fontWeight: '500', paddingLeft: 12 }}>
                            სქესი
                        </Text>
                        <TouchableOpacity
                            style={styles.inputWithLabel}
                            onPress={() => handleGenderChange('female')}
                        >
                            <AppCheckBox
                                name='gender'
                                checked={gender.female}
                                onChange={() => handleGenderChange('female')}
                                hasError={hasError}
                                addValidation={validateInputs}
                                isRequired={true}
                            />
                            <Text style={[styles.labelText, { color: isDarkTheme ? Colors.white : Colors.black, }]}>
                                მდედრობითი
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.inputWithLabel}
                            onPress={() => handleGenderChange('male')}
                        >
                            <AppCheckBox
                                name='gender'
                                checked={gender.male}
                                onChange={() => handleGenderChange('male')}
                                hasError={hasError}
                                addValidation={validateInputs}
                                isRequired={true}
                            />
                            <Text style={[styles.labelText, { color: isDarkTheme ? Colors.white : Colors.black, }]}>
                                მამრობითი
                            </Text>
                        </TouchableOpacity>
                        {gender.error ?
                            <Text style={styles.errorText}>გთხოვთ აირჩიოთ სქესი </Text>
                            : null}
                    </View>
                </ScrollView>
                <View style={[Grid.row_12_5, { marginBottom: 20 }]}>
                    <TouchableOpacity
                        style={styles.authBtn}
                        onPress={handleStep}
                    >
                        <Text style={[styles.btnText, { color: isDarkTheme ? Colors.white : Colors.black, }]}>
                            შემდეგი
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Layout>
    );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    regTitle: {
        textAlign: 'center',

        fontFamily: 'HMpangram-Bold',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 22,
        alignItems: 'center',
        textTransform: 'uppercase'
    },

    authBtn: {
        marginBottom: 100,
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
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '800',
        fontFamily: 'HMpangram-Bold',
        textTransform: 'uppercase'
    },

    labelText: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 15,
        marginLeft: 7
    },

    inputWithLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    genderCheck: {
        marginTop: '6%',
        borderBottomWidth: 1,
        paddingBottom: 12
    },

    errorText: {
        color: Colors.red,
        fontSize: 11,
        fontFamily: 'HMpangram-Medium'
    }
});
