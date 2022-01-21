import React, { useContext, useEffect, useState } from "react";
import { Dimensions, Image, View, StatusBar, Text, ScrollView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity, ActivityIndicator } from 'react-native';
import ApiServices from "../Services/ApiServices";
import { Colors } from '../Colors/Colors';
import PaginationDots from "../Components/PaginationDots";
import PromotionBox from "../Components/PromotionBox";
import { useDimension } from "../Hooks/UseDimension";
import Grid from "../Styles/grid";
import AppLayout from "../Components/AppLayout";
import { AppContext } from "../AppContext/AppContext";
import UserCardSmall from "../Components/UserCardSmall";

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
    const { state, setGlobalState } = useContext(AppContext);
    const { clientDetails, isDarkTheme } = state;

    const { width, height } = useDimension();
    const [offersStep, setOffersStep] = useState<number>(0);
    const [offers, setOffers] = useState<any[]>();
    const [barcode, setBarCode] = useState<string>('');
    const [initLoading, setInitLoading] = useState<boolean>(true);


    useEffect(()=> {
        getOffers();
    }, [])









    const handleOffersScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let overView = event.nativeEvent.contentOffset.x / (width - 25);
        setOffersStep(Math.round(overView));
    };


    const handleGetClientCards = () => {
        ApiServices.GetClientCards().then(res => {
            setGlobalState({ clientDetails: res.data });
            setInitLoading(false);
        })
            .catch(e => {
                console.log(JSON.parse(JSON.stringify(e.response)).data);
                setInitLoading(false);
            });
    };
    const handleGetBarcode = (card: string) => {
        ApiServices.GenerateBarcode(card)
            .then(res => {
                setGlobalState({ cardDetails: { barcode: res.data.base64Data, cardNumber: clientDetails?.[0]?.card } })
            })
            .catch(e => {
                console.log(JSON.parse(JSON.stringify(e.response)).data)
            });
    }

    const handleSetOffers = () => {
        for (let i = 4; i < dummyData.length + 4; i += 4) {
            const renderElement =
                <View style={sytles.promotions}>
                    {dummyData[i - 4] && <PromotionBox data={dummyData[i - 4]} />}
                    {dummyData[i - 3] && <PromotionBox data={dummyData[i - 3]} />}
                    {dummyData[i - 2] && <PromotionBox data={dummyData[i - 2]} />}
                    {dummyData[i - 1] && <PromotionBox data={dummyData[i - 1]} />}
                </View>
            setOffers(prev => {
                return [...(prev || []), renderElement]
            });
        };
    };

    const getOffers = () => {
        ApiServices.GetOffers().then(res => {
            console.log('res', res.data)
        }).catch(e => {
           console.log('error ===>',e)
        })
    }





    useEffect(() => {
        handleGetClientCards();
        handleSetOffers();

    }, []);

    useEffect(() => {
        if (clientDetails !== undefined) {
            handleGetBarcode(clientDetails?.[0]?.card)
        };

    }, [clientDetails]);


    return (
        <AppLayout >
            <View style={{ flex: 1, backgroundColor: isDarkTheme ? Colors.black : Colors.white }}>
                <View style={[Grid.col_4, { justifyContent: 'center' }]}>
                    {!initLoading ?
                        <UserCardSmall
                            cardnumber={clientDetails?.[0]?.card.replace(
                                /\b(\d{4})(\d{4})(\d{4})(\d{4})\b/,
                                '$1  $2  $3  $4',
                            )}
                            navigateToBarCode={() => props.navigation.navigate('UserCardWithBarcode')}
                            navigateToReg={() => props.navigation.navigate('RegistrationScreen')} />
                        :
                        <ActivityIndicator animating={initLoading} color='#dadde1' />
                    }


                </View>
                <Image style={{ width: '100%' }} source={require('../assets/images/gradient-line.png')} />
                <View style={[Grid.col_8, {}]}>
                    <View style={[Grid.col_12]}>
                        <View style={[Grid.col_1, sytles.promotionContainer]}>
                            <Text style={[sytles.promotionsTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                                შეთავაზებები
                            </Text>
                            <PaginationDots length={offers?.length} step={offersStep} />
                        </View>
                        <ScrollView contentContainerStyle={{ flexDirection: "row" }} showsVerticalScrollIndicator={false}>
                            <ScrollView contentContainerStyle={{ flexDirection: 'row', padding: '7%' }} showsHorizontalScrollIndicator={false} horizontal={true} onScroll={handleOffersScroll}>
                                {offers?.map((el, i) => (
                                    <View key={i}>
                                        {el}
                                    </View>
                                ))}
                            </ScrollView>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </AppLayout>
    );

};



export default HomeScreen;

const sytles = StyleSheet.create({
    giftCardImg: {
        maxHeight: 187,
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
        paddingHorizontal: '7%',
    },
    promotionsTitle: {

        fontFamily: 'HMpangram-Bold',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '900',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    authBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },


});