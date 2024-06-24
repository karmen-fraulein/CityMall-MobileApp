import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppContext } from "../../AppContext/AppContext";
import { Colors } from "../../Colors/Colors";
import { CategoryTypes } from "../../Constants/Categories";
import { useDimension } from "../../Hooks/UseDimension";
import { GoBack } from "../../Services/NavigationServices";


type RouteParamList = {
    params: {
        id: number
    }
}

const SingleOfferScreen = () => {
    const { state } = useContext(AppContext);
    const { isDarkTheme, singleOffer } = state;
    const { height } = useDimension();

    const routeObj = useRoute<RouteProp<RouteParamList, 'params'>>();



    return (
        <SafeAreaView style={{ flex: 1, position: 'relative', backgroundColor: isDarkTheme? Colors.black : Colors.white }}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.backButton} onPress={()=>GoBack()}>
                    <Image source={require('../../assets/images/back-arrow.png')} style={{ width: 16, height: 16 }} />
                </TouchableOpacity>
                <Text style={[styles.pageTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                    {singleOffer.name}
                </Text>
            </View>
            <View style={{ flex: 6 }}>
                <Image source={{uri: singleOffer.imgUrl}} style={{ width: '100%', maxWidth: 418, height: height / 2, maxHeight: 433 }} />
                <Image source={require('../../assets/images/gradient-line.png')} style={{ width: '100%' }} />
            </View>
            <View style={{ flex: 6, paddingHorizontal: '7%' }}>
                <View style={styles.offerTitleBox}>
                    <Text style={[styles.offerTitleBoxText, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                    {CategoryTypes[singleOffer.offerType]}
                    </Text>
                </View>
                <View style={{ marginTop: 23 }}>
                    <Text style={[styles.merchantTitle, { color: isDarkTheme ? Colors.white : Colors.black }]} >
                    {singleOffer.subtitle}
                    </Text>
                    <Text style={[styles.merchantDesc, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                    {singleOffer.content}
                    </Text>
                </View>
                <View style={{ marginTop: 25 }}>
                    <Text style={[styles.merchantDesc, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                       {singleOffer.txt}
                    </Text>
                </View>
                <View style={[styles.merchantUrl, { borderBottomColor: isDarkTheme? Colors.white : Colors.black}]}>
                    <Text style={[styles.merchantUrlText, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                    {singleOffer.merchantUrl}
                    </Text>
                </View>
                <View style={{ marginTop: 25 }}>
                   {singleOffer.contactiInfoMerchant? 
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.contactTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>მაღაზია: </Text>
                        <Text style={[styles.contactDetails, { color: isDarkTheme ? Colors.white : Colors.black }]}>{singleOffer.contactiInfoMerchant}</Text>
                    </View> 
                    :
                    null}
                    {singleOffer.contactInfoCityMall? 
                     <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.contactTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>სითი მოლი: </Text>
                        <Text style={[styles.contactDetails, { color: isDarkTheme ? Colors.white : Colors.black }]}>{singleOffer.contactInfoCityMall}</Text>
                    </View>
                    :null}

                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SingleOfferScreen;

const styles = StyleSheet.create({

    headerView: {
        width: '50%',
        position: 'absolute', 
        top: 20, 
        elevation: 9, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '8%',
        alignItems: 'center'
    },
    backButton: {
        width: 30, 
        height: 30, 
        justifyContent: 'center',
    },

    pageTitle: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 14,
        lineHeight: 17,
        marginLeft: 5,
        textTransform: "uppercase",
        textAlign: 'center',
        width: '100%'

    },

    offerTitleBox: {
        width: 73,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        marginTop: 30
    },
    offerTitleBoxText: {
        fontSize: 8,
        lineHeight: 9.5,
        fontFamily: 'HMpangram-Thin',
    },

    merchantTitle: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '700',
        marginBottom: 5,
        textTransform: "uppercase"
    },
    merchantDesc: {
        fontFamily: 'HMpangram-Thin',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '400'
    },
    merchantUrl: {
        height: 38,
        borderBottomWidth: 2,
        width: 272,
        marginTop: 19
    },
    merchantUrlText: {
        fontFamily: 'HMpangram-Thin',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: '400',
        color: Colors.red
    },

    contactTitle: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 12,
        lineHeight: 20,
        fontWeight: '700'

    },
    contactDetails: {
        fontFamily: 'HMpangram-Thin',
        fontSize: 12,
        lineHeight: 20,
        fontWeight: '400'
    }
});

