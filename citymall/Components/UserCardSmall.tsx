import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../Colors/Colors';

interface ICardSm {
    cardnumber: string,
    navigateToBarCode?: () => void,
    navigateToReg?: () => void
}
const UserCardSmall: React.FC<ICardSm> = (props) => {
    const { cardnumber, navigateToBarCode, navigateToReg } = props;
    const styles = StyleSheet.create({
        giftCardImg: {
            maxHeight: 187,
            maxWidth: 296,
            width: '100%',
            height: '100%',
            borderRadius: 10
        },
        warningImg: {
            maxHeight: 187,
            maxWidth: 296,
            width: '100%',
            height: '100%',
            borderRadius: 10,
            borderColor: Colors.white,
            justifyContent: 'center', 
            alignItems: 'center',
            alignSelf: 'center',
            position: 'relative',
        },
        warningText: {
            color: Colors.yellow,
            fontSize: 10, 
            textAlign: 'center',
            fontFamily: 'Pangram-Bold',
            position: 'absolute',
            width: '80%',
            elevation:10

        }
    })
    return (
        !cardnumber ?
            <TouchableOpacity style={ [styles.warningImg, ]} onPress={navigateToReg}>
                <Text style={styles.warningText}>ლოიალობის პროგრამაში მონაწილეობის მისაღებად გთხოვთ, გაიაროთ დაასრულოთ რეგისტრაციის პროცესი</Text>
                <Image style={[styles.giftCardImg, {opacity: 0.2}]} source={require('../assets/images/loyalty-card.png')} />
            </TouchableOpacity>
            :
            <TouchableOpacity style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', height: '100%' }} onPress={navigateToBarCode}>
                <Image style={styles.giftCardImg} source={require('../assets/images/loyalty-card.png')} />
                <Text style={{ color: Colors.white, position: 'absolute', bottom: 60 }}>{cardnumber}</Text>
            </TouchableOpacity>
    );
};

export default UserCardSmall;