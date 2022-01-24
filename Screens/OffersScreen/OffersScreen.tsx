import { bool } from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Dimensions, Image, View, StatusBar, Text, ScrollView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AppContext } from "../../AppContext/AppContext";
import AppLayout from "../../Components/AppLayout";
import PaginationDots from "../../Components/PaginationDots";
import PromotionBox from "../../Components/PromotionBox";
import { useDimension } from "../../Hooks/UseDimension";
import { paginationDotCount } from "../../Services/Utils";



const OffersScreen = (props: any) => {
    const { state, setGlobalState } = useContext(AppContext);
    const { offersArray, isDarkTheme } = state;

    const { width } = useDimension();
    const [offersStep, setOffersStep] = useState<number>(0);
    const [offersView, setOffersView] = useState<any[]>();
    const [initLoading, setInitLoading] = useState<boolean>(true);


 

    const handleOffersScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let overView = event.nativeEvent.contentOffset.x / (width - 25);
        setOffersStep(Math.round(overView));
    };


    const handleSetOffers = () => {
        if (offersArray !== undefined) {
            for (let i = 4; i < offersArray!.length + 8; i += 8) {
                const renderElement =
                    <View style={styles.promotions}>
                        {offersArray![i - 8] && <PromotionBox data={offersArray![i - 8]} index = {i - 8} />}
                        {offersArray![i - 7] && <PromotionBox data={offersArray![i - 7]} index = {i - 7} />}
                        {offersArray![i - 6] && <PromotionBox data={offersArray![i - 6]} index = {i - 6} />}
                        {offersArray![i - 5] && <PromotionBox data={offersArray![i - 5]} index = {i - 5} />}
                        {offersArray![i - 4] && <PromotionBox data={offersArray![i - 4]} index = {i - 4} />}
                        {offersArray![i - 3] && <PromotionBox data={offersArray![i - 3]} index = {i - 3} />}
                        {offersArray![i - 2] && <PromotionBox data={offersArray![i - 2]} index = {i - 2} />}
                        {offersArray![i - 1] && <PromotionBox data={offersArray![i - 1]} index = {i - 1} />}
                    </View>
                setOffersView(prev => {
                    return [...(prev || []), renderElement]
                });
            };
        };
    };

    useEffect(() => {
        handleSetOffers();

    }, [offersArray]);

    return (
        <AppLayout >
            <View style={{ flex: 1, backgroundColor: isDarkTheme ? Colors.black : Colors.white }}>
                <View style={styles.promotionContainer}>
                    <Text style={[styles.promotionsTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                        შეთავაზებები | ფასდაკლებები
                    </Text>
                    <PaginationDots length={paginationDotCount(offersArray!, 8) } step={offersStep} />
                </View>
                    <View style={{flex: 11}}>
                        <ScrollView contentContainerStyle={{ flexDirection: "row"}} showsVerticalScrollIndicator={false}>
                            <ScrollView contentContainerStyle={{ flexDirection: 'row', padding: '7%', }} showsHorizontalScrollIndicator={false} horizontal={true} onScroll={handleOffersScroll}>
                                {offersView?.map((el, i) => (
                                    <View key={i} >
                                        {el}
                                    </View>
                                ))}
                            </ScrollView>
                        </ScrollView>
                    </View>
            </View>
        </AppLayout>
    );



};



export default OffersScreen;

const styles = StyleSheet.create({
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
        paddingTop: 10,
        flex: 1,
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