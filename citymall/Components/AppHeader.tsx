import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../Colors/Colors'

const AppHeader = () => {
    return (
        <>
            <StatusBar backgroundColor={Colors.bgColor} />
            <View style={styles.apphHeader}>
                <View style={styles.appHeaderRight}>
                    <View style={styles.burgerIcon}>
                        <View style={styles.burgerIconLine} />
                        <View style={styles.burgerIconLine} />
                        <View style={styles.burgerIconLine} />
                    </View>
                    <View style={{ width: 70 }}>
                        <Text style={styles.langText}>GEO</Text>
                    </View>
                </View>
                <Text style={styles.titletext}>მთავარი</Text>
                <View style={styles.appHeaderRight}>
                    <Image style={styles.icons} source={require('../assets/images/notification-icon.png')} />
                    <Image style={styles.icons} source={require('../assets/images/location-icon.png')} />
                </View>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    apphHeader: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: Colors.bgColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    appHeaderRight: {
        width: 70,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    burgerIcon: {
        width: 26,
        height: 17,
        justifyContent: 'space-between'
    },

    burgerIconLine: {
        width: 26,
        height: 3,
        backgroundColor: Colors.textColor,
        borderRadius: 5
    },

    langText: {
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 17,
        marginLeft: 13,
        color: Colors.textColor
    },

    titletext: {
        fontWeight: '900',
        fontSize: 14,
        lineHeight: 17,
        marginLeft: 13,
        color: Colors.textColor,
        textAlign: 'center'
    },

    icons: {
        width: 30,
        height: 30
    }
})

export default AppHeader;