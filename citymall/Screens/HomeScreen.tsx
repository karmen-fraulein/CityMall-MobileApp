import React, { useEffect, useState } from "react";
import { Dimensions, Image, View, StatusBar, Text, ScrollView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { Colors } from '../Colors/Colors';
import AppHeader from "../Components/AppHeader";
import BackDrop from "../Components/BackDrop";
import PaginationDots from "../Components/PaginationDots";
import PromotionBox from "../Components/PromotionBox";
import { useDimension } from "../Hooks/UseDimension";
import Grid from "../Styles/grid";

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

// interface IOffers {
//     title: string, 
//     subTitle: string, 
//     imgUrl: string
// } 


const HomeScreen = (props: any) => {
    const { width, height } = useDimension();
    const [offersStep, setOffersStep] = useState<number>(0);
    const [offers, setOffers] = useState<any[]>();

    const handleOffersScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let overView = event.nativeEvent.contentOffset.x / (width - 25);
        setOffersStep(Math.round(overView));
    }


    const sytles = StyleSheet.create({
        giftCardImg: {
            maxHeight: 186,
            maxWidth: 300,
            width: '100%',
            height: '100%'
        },

        promotions: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 400,
        },
        promotionContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        promotionsTitle: {
            color: Colors.white,
            fontFamily: 'Pangram-Bold',
            fontSize: 14,
            lineHeight: 17,
            fontWeight: '900',
            textTransform: 'uppercase',
            textAlign: 'center'
        },
        authBtn: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

        },

        authBtnText: {
            color: Colors.white,
            fontSize: 12,
            fontWeight: '900'
        }
    });

    useEffect(() => {
        for (let i = 4; i < dummyData.length+4; i += 4) {
           const renderElement = 
            <View style={sytles.promotions}>
                {dummyData[i-4] && <PromotionBox data = {dummyData[i-4]} />}
                {dummyData[i-3] && <PromotionBox data = {dummyData[i-3]} />}
                {dummyData[i-2] && <PromotionBox data = {dummyData[i-2]} />}
                {dummyData[i-1] && <PromotionBox data = {dummyData[i-1]} />}
                
            </View>
            setOffers(prev => {
                return [...(prev || []), renderElement]
            })
        }
        
    }, [])
    console.log('(offers?.length',offers?.length)
    return (
        <View style={[Grid.col_12, { backgroundColor: Colors.black ,}]}>
            
            <View style={[Grid.col_5, { justifyContent: 'flex-end' }]}>
                <View style={[Grid.col_10, { alignItems: 'center' }]}>
                    <Image style={sytles.giftCardImg} source={require('../assets/images/loyalty-card.png')} />
                </View>
                <View style={[Grid.col_2, { justifyContent: 'space-around' }]}>
                    <TouchableOpacity style={sytles.authBtn} onPress={() => props.navigation.navigate('AuthScreen')}>
                        <Text style={sytles.authBtnText}>ავტორიზაცია</Text>
                        <Image style={{ marginLeft: 7 }} source={require('../assets/images/arrow-sm.png')} />
                    </TouchableOpacity>
                    <Image source={require('../assets/images/gradient-line.png')} />
                </View>
            </View>
            <View style={[Grid.col_7, {padding: '7%'}]}>
                
                <View style={[Grid.col_12]}>
                <View style={[Grid.col_1, sytles.promotionContainer]}>
                    <Text style={sytles.promotionsTitle}>შეთავაზებები</Text>
                    <PaginationDots length={offers?.length} step={offersStep} />
                </View>
                    <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
                        <ScrollView contentContainerStyle={{ flexDirection: 'row' }} horizontal={true} onScroll={handleOffersScroll}>
                          {offers?.map((el, i) => (
                              <View key = {i}>
                                    {el}
                              </View>
                          ))}
                        </ScrollView>
                    </ScrollView>
                </View>
            </View>
        </View>
    );

};



export default HomeScreen;