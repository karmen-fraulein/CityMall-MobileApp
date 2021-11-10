import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../Colors/Colors';

interface ICardSm {
    cardnumber: string,
    navigateTo? : () => void
}
const UserCardSmall: React.FC<ICardSm>= (props) => {
    const {cardnumber, navigateTo} = props;
    const styles = StyleSheet.create({
        giftCardImg: {
            maxHeight: 187,
            maxWidth: 300,
            width: '100%',
            height: '100%',
            borderRadius: 10
        },
    })
    return (
        <TouchableOpacity style={{position:'relative', justifyContent: 'center', alignItems: 'center', height: '100%'}} onPress={navigateTo}>
            <Image style= {styles.giftCardImg} source={require('../assets/images/loyalty-card.png')} />
            <Text style={{color: Colors.white, position: 'absolute', bottom: 60}}>{cardnumber}</Text>
        </TouchableOpacity>
    );
};

export default UserCardSmall;