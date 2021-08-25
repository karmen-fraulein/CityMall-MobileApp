import React, { useState } from "react";
import { Dimensions, Image, View, StatusBar, Text, ScrollView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Colors } from '../Colors/Colors';
import AppHeader from "../Components/AppHeader";
import PaginationDots from "../Components/PaginationDots";
import PromotionBox from "../Components/PromotionBox";

const HomeScreen = () => {
    const { width } = Dimensions.get('window');
    const [offersStep, setOffersStep] = useState<number>(0);


    const handleOffersScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let overView = event.nativeEvent.contentOffset.x / (width - 25);
        setOffersStep(Math.round(overView));
    }




    return (
        <View style={{ flex: 1 }}>
            <AppHeader />
            <View style={{ flex: 4, backgroundColor: Colors.bgColor, justifyContent: 'center', alignItems: 'center' }} >
                <Image style={sytles.giftCardImg} source={require('../assets/images/gift-card.png')} />
            </View>
            <View style={{ flex: 7, marginTop: 64 }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginBottom: 33, marginHorizontal: 15 }}>
                    <Text style={sytles.promotionsTitle}>შეთავაზებები</Text>
                    <PaginationDots length={4} step={offersStep} />
                </View>
                <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
                    <ScrollView contentContainerStyle={{ flexDirection: 'row' }} horizontal={true} onScroll={handleOffersScroll}>
                        <View style={sytles.promotions}>
                            <PromotionBox />
                            <PromotionBox />
                            <PromotionBox />
                            <PromotionBox />
                        </View>
                        <View style={sytles.promotions}>
                            <PromotionBox />
                            <PromotionBox />
                            <PromotionBox />
                            <PromotionBox />
                        </View>
                        <View style={sytles.promotions} >
                            <PromotionBox />
                            <PromotionBox />
                            <PromotionBox />
                            <PromotionBox />
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        </View>
    );

};

const sytles = StyleSheet.create({
    giftCardImg: {
        width: 287,
        height: 174
    },

    promotions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 400,
    },

    promotionsTitle: {
        color: Colors.black,
        fontFamily: 'Pangram-Bold',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '900',

        textTransform: 'uppercase',
        textAlign: 'center'

    }
})

export default HomeScreen;