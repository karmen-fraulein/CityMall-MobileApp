import React, { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity, StatusBar, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import PaginationDots from '../Components/PaginationDots';
import PromotionBox from '../Components/PromotionBox';
import { useDimension } from '../Hooks/UseDimension';
import { GoBack } from '../Services/NavigationServices';

const dummyData = [
    {
        title: 'ფასდაკლება THE NORTH FACE-ში',
        subTitle: 'საცურაო აუზი -30% ფასდაკლება',
        imgUrl: '../assets/images/promotion_img.png'
    },
    {
        title: 'ფასდაკლება THE NORTH FACE-ში',
        subTitle: 'საცურაო აუზი -30% ფასდაკლება',
        imgUrl: '../assets/images/promotion_img.png'
    },
    {
        title: 'ფასდაკლება THE NORTH FACE-ში',
        subTitle: 'საცურაო აუზი -30% ფასდაკლება',
        imgUrl: '../assets/images/promotion_img.png'
    },
    {
        title: 'ფასდაკლება THE NORTH FACE-ში',
        subTitle: 'საცურაო აუზი -30% ფასდაკლება',
        imgUrl: '../assets/images/promotion_img.png'
    },
    {
        title: 'ფასდაკლება THE NORTH FACE-ში',
        subTitle: 'საცურაო აუზი -30% ფასდაკლება',
        imgUrl: '../assets/images/promotion_img.png'
    },
    {
        title: 'ფასდაკლება THE NORTH FACE-ში',
        subTitle: 'საცურაო აუზი -30% ფასდაკლება',
        imgUrl: '../assets/images/promotion_img.png'
    },
    {
        title: 'ფასდაკლება THE NORTH FACE-ში',
        subTitle: 'საცურაო აუზი -30% ფასდაკლება',
        imgUrl: '../assets/images/promotion_img.png'
    },
    {
        title: 'ფასდაკლება THE NORTH FACE-ში',
        subTitle: 'საცურაო აუზი -30% ფასდაკლება',
        imgUrl: '../assets/images/promotion_img.png'
    },
   
]


const ShopDetailsScreen = () => {
    const { width, height } = useDimension();
    const { isDarkTheme } = useContext(AppContext)

    const styles = StyleSheet.create({
        baner: {
            width: '100%',
            height: height / 2,
        },
        pageTitle: {
            fontFamily: 'HMpangram-Bold',
            fontSize: 16,
            lineHeight: 17,
            textAlign: 'center',
            position: 'absolute',
            top: 47,
            width: '80%',
            left: 30,
            color: isDarkTheme ? Colors.white : Colors.black,
        },
        shopDetailsWrap: {
            height: (height * 5) / 12,
            paddingTop: 30,
            paddingHorizontal: '8%'
        },
        shopDetails: {
            height: 100,
            width: '60%',
            justifyContent: 'space-between',
        },
        shopName: {
            fontFamily: 'HMpangram-Bold',
            fontSize: 16,
            lineHeight: 19,
            color: isDarkTheme ? Colors.white : Colors.black,
        },
        shopDesc: {
            fontFamily: 'HMpangram-Medium',
            fontSize: 12,
            lineHeight: 14,
            color: isDarkTheme ? Colors.white : Colors.black,
        },
        shopContactInfo: {
            marginTop: 19
        },
        infoTitle: {
            fontFamily: 'HMpangram-Bold',
            fontSize: 12,
            lineHeight: 20,
            color: isDarkTheme ? Colors.white : Colors.black,
        },
        offersWrap: {
            marginTop: '15%',
            paddingHorizontal: '2%'
        },
        floorPlan: {
            height: '100%',
            maxHeight: 322,
            marginTop: '8%'
        }

    });

    const [offersStep, setOffersStep] = useState<number>(0);

    const handleOffersScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let overView = event.nativeEvent.contentOffset.x / (width - 25);
        setOffersStep(Math.round(overView));
    };

    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView style={{backgroundColor: isDarkTheme ? Colors.black : Colors.white,}} contentContainerStyle={{ flexGrow: 1, backgroundColor: isDarkTheme? Colors.black : Colors.white }}>
                <View style={styles.baner}>
                    <Image source={require('../assets/images/shop-details-bg.png')} style={{ width: width, height: (height / 2) }} />
                    <Text style={styles.pageTitle}>საბურთალოს ფილიალი</Text>
                    <TouchableOpacity onPress ={() => GoBack()} style={{ position: 'absolute', top: 42, left: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/back-arrow.png')} style={{ width: 12, height: 12 }} />
                    </TouchableOpacity>
                </View>
                <Image source={require('../assets/images/gradient-line.png')} />
                <View style={styles.shopDetailsWrap}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Image source={require('../assets/images/hm-logo.png')} style={{ width: 74, height: 99 }} />
                        <View style={styles.shopDetails}>
                            <View style={{}}>
                                <Text style={styles.shopName}>{'H&M'}</Text>
                                <Text style={styles.shopDesc}>ტანსაცმელი, ფეხსაცმელი, აქსესუარები თეთრეული,ბიჟუტერია</Text>
                            </View>
                            <View>
                                <Text style={styles.shopDesc}>სართული: 2</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 30 }}>
                        <Text style={[styles.shopDesc]}>
                            ჩვენი კარი ყოველთვის ღიაa და ჩვენი მოდა ხელმისაწვდომი იყოს 24/7, სადაც არ უნდა იმყოფებოდეთ.
                        </Text>
                    </View>
                    <View style={{ height: 1, width: '75%', backgroundColor: isDarkTheme ? Colors.white : Colors.black, marginTop: 25 }} />
                    <View style={styles.shopContactInfo}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.infoTitle, { fontFamily: 'HMpangram-Bold' }]}>ტელეფონი: </Text>
                            <Text style={[styles.infoTitle, { fontFamily: 'HMpangram-Medium' }]}>+995 595 491 033</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.infoTitle, { fontFamily: 'HMpangram-Bold' }]}>სამუშაო საათები: </Text>
                            <Text style={[styles.infoTitle, { fontFamily: 'HMpangram-Medium' }]}>10:00 - 22:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.infoTitle, { fontFamily: 'HMpangram-Bold' }]}>მისამართი: </Text>
                            <Text style={[styles.infoTitle, { fontFamily: 'HMpangram-Medium' }]}>ვაჟა-ფშაველას N70</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.offersWrap}>
                    <View style={{flexDirection: 'row', paddingHorizontal: '6%', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.shopName}>შეთავაზებები</Text>
                        <PaginationDots length={dummyData.length/2} step={offersStep}/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <ScrollView contentContainerStyle={{ flexDirection: 'row' }} horizontal={true} onScroll={handleOffersScroll}>
                            {dummyData.map((item, index) => (
                                <PromotionBox key={index} data = {item} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.floorPlan}>
                    <Text style={[styles.shopName, {marginBottom: 20, marginLeft: '8%'}]}>სართულის გეგმა</Text>    
                    <Image source = {require('../assets/images/floor-plan-map.png')} 
                    style={{width: '100%', maxWidth: 411, height: '100%', maxHeight: 221}}/>         
                </View>


            </ScrollView>
        </View>

    );
};

export default ShopDetailsScreen;