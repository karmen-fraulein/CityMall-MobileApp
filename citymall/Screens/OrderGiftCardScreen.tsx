import React, { useContext, useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import AppChekBox from '../Components/CostumComponents/AppChekBox';
import AppInput from '../Components/CostumComponents/AppInput';
import Layout from '../Components/Layouts/Layout';
import { useDimension } from '../Hooks/UseDimension';
import Grid from '../Styles/grid';

interface IDeliveryOption {
    fromCityMall: boolean,
    curierDelivery: boolean
};

interface IMallLocations {
    Gldani: boolean,
    Saburtalo: boolean
}


const OrderGiftCardScreen = () => {
    const { isDarkTheme } = useContext(AppContext)
    const { width, height } = useDimension();
    const [step, setStep] = useState<number>(0);
    const [customer, setCustomer] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [orderDetails, setOrderDetails] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [deliveryOption, setDeliveryOption] = useState<IDeliveryOption>({ fromCityMall: false, curierDelivery: false });
    const [pickupLocation, setPickupLocation] = useState<IMallLocations>({ Gldani: false, Saburtalo: false });

    // console.log('width -->', width, 'height -->', height)


    const styles = StyleSheet.create({
        infoText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Medium',
            fontSize: 16,
            lineHeight: 24
        },
        orderCardTitle: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Bold',
            fontSize: 14,
            lineHeight: 17,
            fontWeight: '700',
            textTransform: 'uppercase',
            marginBottom: 20
        },
        detailsText: {
            width: '100%',
            borderWidth: 1,
            borderColor: isDarkTheme ? Colors.white : Colors.black,
            borderRadius: 5,
            textAlignVertical: 'top',
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Medium',
            fontSize: 10,
            lineHeight: 14,
            padding: 10,
            marginBottom: '5%'
        },

        checkBoxWithLabel: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
        },
        labelText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Medium',
            fontSize: 16,
            lineHeight: 18,
            textTransform: 'uppercase',
            marginLeft: 5
        }
    });

    const conditionalpadding = () => {
        if (width > 412) {
            return '8.5%';
        } else if (width < 400 && width > 369) {
            return '6%';
        } else {
            return '4%';
        }
    };

    const toggleDeliveryOption = (option: string) => {
        if (option === 'fromMall') {
            setDeliveryOption({ fromCityMall: true, curierDelivery: false });
        } else {
            setDeliveryOption({ fromCityMall: false, curierDelivery: true });
        }
    };

    const togglePickupLocation = (option: string) => {
        if (option === 'saburtalo') {
            setPickupLocation({ Gldani: false, Saburtalo: true });
        } else {
            setPickupLocation({ Gldani: true, Saburtalo: false });
        }
    };

    const GiftCards = () => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image source={require('../assets/images/gift-card-v1.png')} style={{ width: 159, height: 101 }} />
            <Image source={require('../assets/images/gift-card-v2.png')} style={{ width: 159, height: 101 }} />
        </View>
    );


    let GiftCardOrderStep;

    if (step === 0) {
        GiftCardOrderStep = (
            <View style={{ flex: 1, paddingHorizontal: conditionalpadding(), justifyContent: 'flex-end' }}>
                <View style={{ height: Grid.col_10.height, justifyContent: 'space-between' }}>
                    <View>
                        <GiftCards />
                        <View style={{ marginTop: 44 }}>
                            <Text style={styles.infoText}>
                                შეუკვეთე სითი მოლის სასაჩუქრე ბარათი შენთვის ან შენი საყვარელი ადამიანებისთვის - ეს ყველაზე სასურველი საჩუქარია, რითაც შეგიძლიათ ადამიანს არჩევანის თავისუფლება მისცეთ
                            </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Pressable onPress={() => setStep(1)} style={{ width: 325, height: 66, backgroundColor: Colors.darkGrey, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.white }}>
                                შემდეგი
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        );
    } else if (step === 1) {
        GiftCardOrderStep = (
            <View
                style={{flex: 1, backgroundColor: isDarkTheme ? Colors.black : Colors.white,  paddingHorizontal: conditionalpadding()}}>
                <Text style={styles.orderCardTitle}>
                    შეუკვეთე ბარათ(ებ)ი
                </Text>
                <GiftCards />
                <AppInput
                    placeholder='სახელი გვარი'
                    value={customer}
                    onChangeText={(newValue: string) => setCustomer(newValue)} />
                <AppInput
                    placeholder='მობილურის ნომერი'
                    value={phoneNumber}
                    onChangeText={(newValue: string) => setPhoneNumber(newValue)} />
                <Text style={[styles.orderCardTitle, { marginTop: 30 }]}>
                    შეკვეთის დეტალები
                </Text>
                <TextInput
                    style={styles.detailsText}
                    placeholder = 'მიუთითეთ ბარათ(ებ)ი დიზაინი, რაოდენობა და თანხა'
                    placeholderTextColor =  {Colors.darkGrey}
                    value = {orderDetails}
                    onChangeText = {(newValue: string) => setOrderDetails(newValue)}
                    multiline={true}
                    numberOfLines={4} />
                <TouchableOpacity
                    style={styles.checkBoxWithLabel}
                    onPress={() => toggleDeliveryOption('fromMall')}>
                    <AppChekBox
                        checked={deliveryOption.fromCityMall}
                        onChange={() => toggleDeliveryOption('fromMall')} />
                    <Text style={styles.labelText}>სითი მოლიდან გატანა</Text>
                </TouchableOpacity>
                {deliveryOption.fromCityMall &&
                    <View style={{ paddingLeft: 20 }}>
                        <TouchableOpacity
                            style={styles.checkBoxWithLabel}
                            onPress={() => togglePickupLocation('gldani')}>
                            <AppChekBox
                                checked={pickupLocation.Gldani}
                                onChange={() => togglePickupLocation('gldani')} />
                            <Text style={styles.labelText}>სითი მოლი გლდანი</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.checkBoxWithLabel}
                            onPress={() => togglePickupLocation('saburtalo')}>
                            <AppChekBox
                                checked={pickupLocation.Saburtalo}
                                onChange={() => togglePickupLocation('saburtalo')} />
                            <Text style={styles.labelText}>სითი მოლი საბურთალო</Text>
                        </TouchableOpacity>
                    </View>}
                <TouchableOpacity
                    style={styles.checkBoxWithLabel}
                    onPress={() => toggleDeliveryOption('curier')}>
                    <AppChekBox
                        checked={deliveryOption.curierDelivery}
                        onChange={() => toggleDeliveryOption('curier')} />
                    <Text style={styles.labelText}>საკურიერო მომსახურება</Text>
                </TouchableOpacity>
                {deliveryOption.curierDelivery &&
                    <View >
                        <TextInput
                            style={styles.detailsText}
                            placeholder = 'გთხოვთ მიუთიოთ მისამართი'
                            placeholderTextColor =  {Colors.darkGrey}
                            value = {address}
                            onChangeText = {(newValue: string) => setAddress(newValue)}
                            multiline={true}
                            numberOfLines={4} />
                    </View>}

                    <Pressable onPress={() => setStep(1)} style={{ width: 325, height: 66, backgroundColor: Colors.darkGrey, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.white }}>
                                შეუკვეთე
                            </Text>
                        </Pressable>
            </View>
        );
    };




    return (
        <Layout>
            {GiftCardOrderStep}
        </Layout>

    );
};

export default OrderGiftCardScreen;