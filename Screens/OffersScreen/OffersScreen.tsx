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
import { RouteProp, useRoute } from '@react-navigation/native';
import { IOffers } from '../../AppContext/AppState';
import {CategoryTypes} from '../../Constants/Categories';

type RouteParamList = {
    params: {
        id: number,
        routeId: number
    }
}

const OffersScreen = (props: any) => {
    const { state, setGlobalState } = useContext(AppContext);
    const { offersArray, isDarkTheme } = state;

    const routeParams = useRoute<RouteProp<RouteParamList, 'params'>>();

    const { width } = useDimension();
    const [offersStep, setOffersStep] = useState<number>(0);
    const [offersView, setOffersView] = useState<any[]>();
    const [filteredOffers, setFilteredOffers] = useState<IOffers[] | []>([]);
    const [initLoading, setInitLoading] = useState<boolean>(true);


    const handleOffersScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let overView = event.nativeEvent.contentOffset.x / (width - 25);
        setOffersStep(Math.round(overView));
    };

    const handleFilterOffers = () => {
        //routeParams.params.id is to filter offers 
        //routeParams.params.routeId is to filter the locations of CityMall ('CityMall Gldani ===1, CityMall Saburtalo ===2)

        //Filter Offers with location and offer type: 
        let filteredOffersArray = offersArray.filter((el: IOffers) => el.offerType === routeParams.params.id && el.address === routeParams.params.routeId);
        setFilteredOffers(filteredOffersArray);
    }

    const handleSetOffers = () => {
        if (filteredOffers !== undefined) {
           
            for (let i = 8; i < filteredOffers!.length + 8; i += 8) {
                
                const renderElement =
                    <View style={styles.promotions}>
                        {filteredOffers![i - 8] && <PromotionBox data={filteredOffers![i - 8]} index={i - 8} />}
                        {filteredOffers![i - 7] && <PromotionBox data={filteredOffers![i - 7]} index={i - 7} />}
                        {filteredOffers![i - 6] && <PromotionBox data={filteredOffers![i - 6]} index={i - 6} />}
                        {filteredOffers![i - 5] && <PromotionBox data={filteredOffers![i - 5]} index={i - 5} />}
                        {filteredOffers![i - 4] && <PromotionBox data={filteredOffers![i - 4]} index={i - 4} />}
                        {filteredOffers![i - 3] && <PromotionBox data={filteredOffers![i - 3]} index={i - 3} />}
                        {filteredOffers![i - 2] && <PromotionBox data={filteredOffers![i - 2]} index={i - 2} />}
                        {filteredOffers![i - 1] && <PromotionBox data={filteredOffers![i - 1]} index={i - 1} />}
                    </View>
                setOffersView([renderElement]);
            };

        };

    };
    
    useEffect(() => {
        handleSetOffers();
        
    }, [filteredOffers]);

    useEffect(() => {
        handleFilterOffers()
    }, [offersArray,routeParams.params.id])

    return (
        <AppLayout >
            <View style={{ flex: 1, backgroundColor: isDarkTheme ? Colors.black : Colors.white }}>
                <View style={styles.promotionContainer}>
                    <Text style={[styles.promotionsTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                        {'შეთავაზებები | ' + CategoryTypes[routeParams.params.id] }
                    </Text>
                    <PaginationDots length={paginationDotCount(offersArray!, 8)} step={offersStep} />
                </View>
                <View style={{ flex: 11 }}>
                    <ScrollView contentContainerStyle={{ flexDirection: "row" }} showsVerticalScrollIndicator={false}>
                        <ScrollView contentContainerStyle={{ flexDirection: 'row', padding: '7%', }}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            onScroll={handleOffersScroll}>
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