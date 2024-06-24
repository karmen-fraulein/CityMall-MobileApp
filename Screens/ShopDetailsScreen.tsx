import React, { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity, StatusBar, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import PaginationDots from '../Components/PaginationDots';
import PromotionBox from '../Components/PromotionBox';
import { useDimension } from '../Hooks/UseDimension';
import { GoBack } from '../Services/NavigationServices';
import {IOffer} from '../Services/Api/OffersApi';


const ShopDetailsScreen = () => {
    const { width, height } = useDimension();
    const { state } = useContext(AppContext)
    const { isDarkTheme, singleMerchant, offersArray } = state;
    const {imageUrl, logo, desctiption, categoryNames, name, floor, workingHours, address, phone } = singleMerchant;

    const textColorStyle = {
        color: isDarkTheme ? Colors.white : Colors.black,
    };

    const [offersStep, setOffersStep] = useState<number>(0);

    const handleOffersScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let overView = event.nativeEvent.contentOffset.x / (width - 25);
        setOffersStep(Math.round(overView));
    };

    return (
        <View style={{ flexGrow: 1, position: 'relative' }}>
            <ScrollView style={{backgroundColor: isDarkTheme ? Colors.black : Colors.white,}} contentContainerStyle={{ flexGrow: 1, backgroundColor: isDarkTheme? Colors.black : Colors.white }}>
                <View style={[styles.banner, {height: height / 2}]}>
                    <Image source={{uri: imageUrl}} style={{ width: width, height: (height / 2) }} />
                    <Text style={[styles.pageTitle, textColorStyle]}>საბურთალოს ფილიალი</Text>
                    <TouchableOpacity onPress ={() => GoBack()} style={{ position: 'absolute', top: 42, left: 15, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/back-arrow.png')} style={{ width: 12, height: 12 }} />
                    </TouchableOpacity>
                </View>
                <Image source={require('../assets/images/gradient-line.png')} />
                <View style={[styles.shopDetailsWrap, {height: (height * 5) / 12}]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Image source={{uri: logo}} style={{ width: 74, height: 99 }} />
                        <View style={styles.shopDetails}>
                            <View style={{}}>
                                <Text style={styles.shopName}>{name}</Text>
                                <Text style={[styles.shopDesc, textColorStyle]}>{categoryNames}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.shopDesc, textColorStyle]}>სართული: </Text>
                                {floor?.map((floor: string) =>(<Text key={floor} style={[styles.shopDesc, textColorStyle]}>{floor}</Text>))}
                                
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={[styles.shopDesc, textColorStyle]}>
                            {desctiption}
                        </Text>
                    </View>
                    <View style={{ height: 1, width: '75%', backgroundColor: isDarkTheme ? Colors.white : Colors.black, marginTop: 25 }} />
                    <View style={styles.shopContactInfo}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.infoTitle, textColorStyle, { fontFamily: 'HMpangram-Bold' }]}>ტელეფონი: </Text>
                            <Text style={[styles.infoTitle, textColorStyle, { fontFamily: 'HMpangram-Medium' }]}>{phone}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.infoTitle, textColorStyle, { fontFamily: 'HMpangram-Bold' }]}>სამუშაო საათები: </Text>
                            <Text style={[styles.infoTitle, textColorStyle, { fontFamily: 'HMpangram-Medium' }]}>{workingHours?.[0] + ' - ' + workingHours?.[1]}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.infoTitle, textColorStyle, { fontFamily: 'HMpangram-Bold' }]}>მისამართი: </Text>
                            <Text style={[styles.infoTitle, textColorStyle,{ fontFamily: 'HMpangram-Medium' }]}>{address}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.offersWrap}>
                    <View style={{flexDirection: 'row', paddingHorizontal: '6%', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={styles.shopName}>შეთავაზებები</Text>
                        <PaginationDots length={offersArray.length/2} step={offersStep}/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <ScrollView contentContainerStyle={{ flexDirection: 'row' }} horizontal={true} onScroll={handleOffersScroll}>
                            {offersArray.map((item: IOffer, index: number) => (
                                <PromotionBox key={index} data = {item} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.floorPlan}>
                    <Text style={[styles.shopName, textColorStyle, {marginBottom: 20, marginLeft: '8%'}]}>სართულის გეგმა</Text>    
                    <Image source = {require('../assets/images/floor-plan-map.png')} 
                    style={{width: '100%', maxWidth: 411, height: '100%', maxHeight: 221}}/>         
                </View>


            </ScrollView>
        </View>

    );
};

export default ShopDetailsScreen;

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        
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
    },
    shopDetailsWrap: {
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
    },
    shopDesc: {
        fontFamily: 'HMpangram-Medium',
        fontSize: 12,
        lineHeight: 14,
    },
    shopContactInfo: {
        marginTop: 19
    },
    infoTitle: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 12,
        lineHeight: 20,
    },
    offersWrap: {
        marginTop: 120,
        paddingHorizontal: '2%',
    },
    floorPlan: {
        height: '100%',
        maxHeight: 322,
        marginTop: '8%'
    }

});