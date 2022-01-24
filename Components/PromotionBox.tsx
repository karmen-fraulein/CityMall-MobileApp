import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import { navigate } from '../Services/NavigationServices';

const PromotionBox = (props: any) => {
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;


    const BoxColor = (i: number) => {
        console.log(i)
        if(i % 4 === 1) {
            return styles.promotionRed;
        } else if (i% 4 === 2) {
            return styles.promotionBlue;
        } if(i % 4 === 3) {
            return styles.promotionLightBlue;
        } else {
            return styles.promotionYellow;   
        }
    }

    return (
        <TouchableOpacity onPress={() => navigate('ShopDetailsScreen')}>
            <View style={styles.promotionBox}>
                <View style={[styles.container, BoxColor(props.index) ]}>
                    <Text style={{ fontSize: 5, color: isDarkTheme? Colors.white : Colors.black }}>  {props.data.name}</Text>
                </View>
                <Image style={styles.promotionImg} source={{uri: props.data.imgUrl}} />

                <Text style={[styles.promotionTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                    {props.data.subtitle}
                </Text>
                <Text style={[styles.promotionBodyText, { color: isDarkTheme ? Colors.white : Colors.black }]} numberOfLines={1}>
                    {props.data.txt}
                </Text>
                <View style={styles.promotionBottom}>
                    <Text style={[styles.promotionBottomText, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                        ვრცლად
                    </Text>
                    <Image style={styles.promotionBottomImg} source={require('../assets/images/arrow-sm.png')} />
                </View>
            </View>
        </TouchableOpacity>
    );
};



export default PromotionBox;

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
        backgroundColor: 'red'

    },

    promotionRed: {
        backgroundColor: Colors.red
    },

    promotionBlue: {
        backgroundColor: Colors.blue
    },

    promotionLightBlue: {
        backgroundColor: Colors.lightBlue
    },

    promotionYellow: {
        backgroundColor: Colors.yellow
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
        fontFamily: 'HMpangram-Medium',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,

        margin: 6
    },

    promotionBodyText: {
        fontFamily: 'HMpangram-Medium',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 9,
        lineHeight: 11,

        marginLeft: 6,
        marginBottom: 9,

    },

    promotionBottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    promotionBottomText: {

        fontFamily: 'HMpangram-Bold',
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