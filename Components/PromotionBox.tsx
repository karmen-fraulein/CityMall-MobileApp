import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    RefreshControlBase
} from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import { navigate } from '../Services/NavigationServices';
import { IOffer } from '../Services/Api/OffersApi';


interface IPromotionData {
    data: IOffer
    index?: number
    style?: any
}

const PromotionBox: React.FC<IPromotionData> = ({ data, index, style }) => {
    const { state, setGlobalState } = useContext(AppContext);
    const { isDarkTheme } = state;


    // const BoxColor = (i: number) => {
    //     if (i % 4 === 1) {
    //         return styles.promotionRed;
    //     } else if (i % 4 === 2) {
    //         return styles.promotionBlue;
    //     } if (i % 4 === 3) {
    //         return styles.promotionLightBlue;
    //     } else {
    //         return styles.promotionYellow;
    //     }
    // };

    const handlePromotionBoxClick = () => {
        setGlobalState({ singleOffer: data })
        navigate('SingleOfferScreen');

    };

    return (
        <TouchableOpacity onPress={handlePromotionBoxClick} style={style}>
            <View style={styles.promotionBox}>
                <View style={[styles.container, {backgroundColor: data.offerType.color}]}>
                    <Text style={{ fontSize: 5, color: isDarkTheme ? Colors.white : Colors.black }}> {data.offerType.name}</Text>
                </View>
                <Image style={styles.promotionImg} source={{ uri: data.imgUrl }} />
                <Text style={[styles.promotionTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                    {data.name}
                </Text>
                <Text style={[styles.promotionBodyText, { color: isDarkTheme ? Colors.white : Colors.black }]} numberOfLines={1}>
                    {data.subtitle}
                </Text>
                <View style={styles.promotionBottom}>
                    {
                        data.floor ?
                            <View>
                                <Text style={[styles.promotionBottomText, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                                    {`სართული: ${data.floor[0]}`}
                                </Text>
                            </View>
                            : null
                    }
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.promotionBottomText, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                            ვრცლად
                        </Text>
                        <Image style={styles.promotionBottomImg} source={require('../assets/images/arrow-sm.png')} />
                    </View>
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
        justifyContent: 'space-between'
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