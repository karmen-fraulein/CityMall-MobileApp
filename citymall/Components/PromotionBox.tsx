import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Colors } from '../Colors/Colors';
import { navigate } from '../Services/NavigationServices';

const PromotionBox = (props: any) => {
    return (
        <TouchableOpacity onPress = {() =>navigate('ShopDetailsScreen')}>
        <View style={styles.promotionBox}>
            <View style={styles.container}>
                <Text style={{ fontSize: 5 }}> ფასდაკლება</Text>
            </View>
            <Image style={styles.promotionImg} source={require('../assets/images/promotion_img.png')} />
           
                <Text style={styles.promotionTitle}>{props.data.title }</Text>
                <Text style={styles.promotionBodyText} numberOfLines={1}>{props.data.subtitle }</Text>
                <View style={styles.promotionBottom}>
                    <Text style={styles.promotionBottomText}>ვრცლად</Text>
                    <Image style={styles.promotionBottomImg} source={require('../assets/images/arrow-sm.png')} />
                </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    promotionBox: {
        width: 159,
        height: 180,
        borderRadius: 10,
        margin: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 46,
        height: 12,
        borderRadius: 10,
        position: 'absolute',
        top: 9,
        left: 9,
        zIndex: 1,

    },

    promotionImg: {
        position: 'relative',
        width: 159,
        height: 113,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },

    promotionTitle: {
        height: 24,
        fontFamily: 'Pangram-Regular',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color: Colors.white,
        margin: 6
    },

    promotionBodyText: {
        fontFamily: 'Pangram-Regular',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 9,
        lineHeight: 11,
        color: Colors.white,
        marginLeft: 6,
        marginBottom: 9,
        
    },

    promotionBottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    promotionBottomText: {
        color: Colors.white,
        fontFamily: 'Pangram-Bold',
        fontSize: 7,
        lineHeight: 9,
        marginRight: 2,
        marginLeft: 6,

    },

    promotionBottomImg: {
        width: 4,
        height: 4
    }


})

export default PromotionBox;