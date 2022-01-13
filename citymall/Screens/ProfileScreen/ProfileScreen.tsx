import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import Layout from '../../Components/Layouts/Layout';
import PaginationDots from '../../Components/PaginationDots';
import PromotionBox from '../../Components/PromotionBox';
import { useDimension } from '../../Hooks/UseDimension';
import Grid from '../../Styles/grid';

const offers: any = [
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
    // {
    //     title: 'ფასდაკლება THE NORTH FACE-ში',
    //     subTitle: 'საცურაო აუზი -30% ფასდაკლება',
    //     imgUrl: '../assets/images/promotion_img.png'
    // },
    // {
    //     title: 'ფასდაკლება THE NORTH FACE-ში',
    //     subTitle: 'საცურაო აუზი -30% ფასდაკლება',
    //     imgUrl: '../assets/images/promotion_img.png'
    // },
    // {
    //     title: 'ფასდაკლება THE NORTH FACE-ში',
    //     subTitle: 'საცურაო აუზი -30% ფასდაკლება',
    //     imgUrl: '../assets/images/promotion_img.png'
    // },
    // {
    //     title: 'ფასდაკლება THE NORTH FACE-ში',
    //     subTitle: 'საცურაო აუზი -30% ფასდაკლება',
    //     imgUrl: '../assets/images/promotion_img.png'
    // },
    // {
    //     title: 'ფასდაკლება THE NORTH FACE-ში',
    //     subTitle: 'საცურაო აუზი -30% ფასდაკლება',
    //     imgUrl: '../assets/images/promotion_img.png'
    // },
    // {
    //     title: 'ფასდაკლება THE NORTH FACE-ში',
    //     subTitle: 'საცურაო აუზი -30% ფასდაკლება',
    //     imgUrl: '../assets/images/promotion_img.png'
    // },
    // {
    //     title: 'ფასდაკლება THE NORTH FACE-ში',
    //     subTitle: 'საცურაო აუზი -30% ფასდაკლება',
    //     imgUrl: '../assets/images/promotion_img.png'
    // },
    // {
    //     title: 'ფასდაკლება THE NORTH FACE-ში',
    //     subTitle: 'საცურაო აუზი -30% ფასდაკლება',
    //     imgUrl: '../assets/images/promotion_img.png'
    // },
]

const ProfileScreen = () => {
    const { width } = useDimension();
    const { isDarkTheme } = useContext(AppContext);

    const [offersStep, setOffersStep] = useState<number>(0);

    const styles = StyleSheet.create({
        balanceView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 50,
            marginBottom: 35
        },
        balanceWrap: {

        },
        balanceWrapTitle: {
            fontSize: 14,
            fontFamily: 'HMpangram-Medium',
            color: Colors.darkGrey
        },
        balanceWrapAmount: {
            fontSize: 24,
            fontFamily: 'HMpangram-Bold',
            color: Colors.white
        },

        statusBarView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 88,
            marginBottom: 30
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
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Bold',
            fontSize: 14,
            lineHeight: 17,
            fontWeight: '900',
            textTransform: 'uppercase',
            textAlign: 'center',
        },
        redirectView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'green',
            width: '100%',
            marginBottom: 20
        },
        redirectBtn: {
            width: '100%',
            maxWidth: 272,
            height: 39,
            borderRadius: 50,
            backgroundColor: Colors.darkGrey,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        redirectBtnText: {
            fontSize: 10,
            fontFamily: 'HMpangram-Medium',
            marginRight: 5
        },
        transactionView: {
            
        }
    })


    const handleOffersScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let overView = event.nativeEvent.contentOffset.x / (width - 25);
        setOffersStep(Math.round(overView));
    };

    return (
        <Layout
            hideArrows={true}
            hasBackArrow={true}>
            <View style={{ flexGrow: 1 }}>
                <View style={styles.balanceView}>
                    <View >
                        <Text style={styles.balanceWrapTitle}>
                            ხელმისაწვდომი თანხა
                        </Text>
                        <Text style={styles.balanceWrapAmount}>
                            1050.50
                        </Text>

                    </View>
                    <View>
                        <Text style={styles.balanceWrapTitle}>
                            სითი ქულა
                        </Text>
                        <Text style={styles.balanceWrapAmount}>
                            1360.50
                        </Text>
                    </View>
                </View>
                <View style={styles.statusBarView}>
                    <Text style={styles.promotionsTitle}>
                        სტატუსბარი
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.promotionsTitle}>
                            ვრცლად
                        </Text>
                    </TouchableOpacity>
                </View>

                    <View style={styles.promotionContainer}>
                        <Text style={styles.promotionsTitle}>
                            პირადი შეთავაზებები
                        </Text>
                        <PaginationDots length={Math.round(offers?.length / 2)} step={offersStep} />
                    </View>
                    <ScrollView contentContainerStyle={{ flexDirection: "row" }} showsVerticalScrollIndicator={false}>
                        <ScrollView contentContainerStyle={{ flexDirection: 'row', }} showsHorizontalScrollIndicator={false} horizontal={true} onScroll={handleOffersScroll}>
                            {offers?.map((el: any, i: number) => (
                                <PromotionBox key={i} data={el} />

                            ))}
                        </ScrollView>
                    </ScrollView>
                    <View style={styles.promotionContainer}>
                        <Text style={styles.promotionsTitle}>
                            ქულების გახაჯვის ოფცია
                        </Text>
                        <PaginationDots length={Math.round(offers?.length / 2)} step={offersStep} />
                    </View>
                    <ScrollView contentContainerStyle={{ flexDirection: "row" }} showsVerticalScrollIndicator={false}>
                        <ScrollView contentContainerStyle={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false} horizontal={true} onScroll={handleOffersScroll}>
                            {offers?.map((el: any, i: number) => (
                                <PromotionBox key={i} data={el} />

                            ))}
                        </ScrollView>
                    </ScrollView>
                <View style={styles.redirectView}>
                    <Image source={require('../../assets/images/payunicard_white.png')} style={{ width: 49, height: 26 }} />
                    <TouchableOpacity style={styles.redirectBtn}>
                        <Text style={styles.redirectBtnText}>
                            დამატებითი ოპერაციები ფეიუნიქარდში
                        </Text>
                        <Image source={require('../../assets/images/redirect_icon.png')} style={{ width: 9, height: 9 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.transactionView}>

                </View>
            </View>



        </Layout>
    );
};



export default ProfileScreen;