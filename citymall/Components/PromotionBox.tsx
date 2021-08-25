import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Colors } from '../Colors/Colors';

const PromotionBox = () => {
    return (
        <View style={styles.promotionBox}>
            <View style={styles.container}>
                <Text style={{ fontSize: 5 }}> ფასდაკლება</Text>
            </View>
            <Image style={styles.promotionImg} source={require('../assets/images/promotion_img.png')} />
            <TouchableOpacity>
                <Text style={styles.promotionTitle}>საგაზაფხულო ფასდალკება</Text>
                <Text style={styles.promotionBodyText}>საცურაო აუზი -30% ფასდაკლება</Text>
                <View style={styles.promotionBottom}>
                    <Text style={styles.promotionBottomText}>ვრცლად</Text>
                    <Image style={styles.promotionBottomImg} source={require('../assets/images/arrow.png')} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    promotionBox: {
        width: 159,
        height: 180,
        backgroundColor: Colors.bgColor,
        borderRadius: 10,
        margin: 15
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 46,
        height: 12,
        backgroundColor: Colors.bgColor,
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
        width: 94,
        height: 24,
        fontFamily: 'Pangram-Regular',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color: Colors.black,
        margin: 6
    },

    promotionBodyText: {
        fontFamily: 'Pangram-Regular',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 4,
        lineHeight: 5,
        color: Colors.black,
        marginLeft: 6,
        marginBottom: 9
    },

    promotionBottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    promotionBottomText: {
        color: Colors.black,
        fontFamily: 'Pangram-Bold',
        fontSize: 5,
        lineHeight: 6,
        marginRight: 2,
        marginLeft: 6,

    },

    promotionBottomImg: {
        width: 4,
        height: 4
    }


})

export default PromotionBox;