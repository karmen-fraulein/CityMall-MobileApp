import React, { useState } from "react";
import { Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { Colors } from '../Colors/Colors'
import { useDimension } from "../Hooks/UseDimension";
import Grid from "../Styles/grid";
import BackDrop from "./BackDrop";




const AppHeader = (props: any) => {

    const { width } = useDimension();
    const [isLocationActive, setIsLocationActive] = useState<boolean>(false);

    const styles = StyleSheet.create({
        apphHeader: {
            paddingHorizontal: 30,
            height: 70,
            backgroundColor: Colors.black,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        appHeaderRight: {
            width: (width / 6),
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        appHeaderLeft: {
            width: (width / 3.6),
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
            backgroundColor: Colors.white,
            borderRadius: 5
        },

        langText: {
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 17,
            marginLeft: 13,
            color: Colors.white
        },

        titletext: {
            fontWeight: '900',
            fontSize: 14,
            lineHeight: 17,
            marginLeft: 13,
            color: Colors.white,
            textAlign: 'center'
        },

        icons: {
            width: 17,
            height: 19
        },

        iconCircle: {
            width: 30,
            height: 30,
            borderRadius: 15,
            borderColor: '#FFFFFF',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        option: {
            width: 138,
            height: 68,
            borderRadius: 7,
            backgroundColor: Colors.red,
            justifyContent: 'center',
            position: 'absolute',
            elevation: 3,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
            

        }
    });

    const tt = () => {
        console.log('Clicked')
    }

    return (
        <>
            <View style={styles.apphHeader}>
                <View style={styles.appHeaderRight}>
                    <TouchableOpacity style={styles.burgerIcon} onPress = {props.toggleDrawer}>
                        <View style={styles.burgerIconLine} />
                        <View style={styles.burgerIconLine} />
                        <View style={styles.burgerIconLine} />
                    </TouchableOpacity>
                    <View style={{ width: 70 }}>
                        <Text style={styles.langText}>ENG </Text>
                    </View>
                </View>
                <Text style={styles.titletext}>მთავარი</Text>
                <View style={styles.appHeaderLeft}>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image style={styles.icons} source={require('../assets/images/loupe.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image style={styles.icons} source={require('../assets/images/bell.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconCircle}>
                        <Image style={styles.icons} source={require('../assets/images/location.png')} />
                    </TouchableOpacity>
                   
                </View>
            </View>
        </>
    )

}



export default AppHeader;