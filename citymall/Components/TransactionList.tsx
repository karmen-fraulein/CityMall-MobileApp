import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const TransactionList = () => {
    return (
        <View 
        style = {styles.trListWrap}>
            <View>
            <Image
                source={require('../assets/images/hm-icon-profile.png')}
                style={{ width: 40, height: 40 }}
            />
            <View style={{marginLeft: 10}}>
                <Text>28.10.2021 16:45</Text>
                <Text>Zara</Text>
            </View>
            </View>
            <Text>-90.00 ₾</Text>
        </View>
    )
};

export default TransactionList;


const styles = StyleSheet.create({
    trListWrap: {
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    trDetailsView: {

    }
})
