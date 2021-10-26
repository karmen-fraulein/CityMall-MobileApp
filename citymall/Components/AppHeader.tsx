import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { Colors } from '../Colors/Colors'
import { useDimension } from "../Hooks/UseDimension";
import Grid from "../Styles/grid";




const AppHeader = () => {
    
    const {width} = useDimension();

    const styles = StyleSheet.create({
        apphHeader: {
            height: Grid.col_1.height,
            paddingHorizontal: 30,
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
    
        iconCircle : {
            width: 30,
            height: 30,
            borderRadius: 15,
            borderColor: '#FFFFFF',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

    
    return (
        <>
            <StatusBar backgroundColor={Colors.black} />
            <View style={styles.apphHeader}>
                <View style={styles.appHeaderRight}>
                    <View style={styles.burgerIcon}>
                        <View style={styles.burgerIconLine} />
                        <View style={styles.burgerIconLine} />
                        <View style={styles.burgerIconLine} />
                    </View>
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