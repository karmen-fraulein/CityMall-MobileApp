import React, { useContext, useState } from "react";
import { Image, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { toggleDrawer } from './../Services/NavigationServices';
import { AppContext } from "../AppContext/AppContext";
import { Colors } from '../Colors/Colors'
import { useDimension } from "../Hooks/UseDimension";
import Grid from "../Styles/grid";
import BackDrop from "./BackDrop";
import { SafeAreaView } from "react-native-safe-area-context";




const AppHeader = (props: any) => {
    const {isDarkTheme} = useContext(AppContext)

    const { width } = useDimension();
    const [isLocationActive, setIsLocationActive] = useState<boolean>(false);

    const styles = StyleSheet.create({
        apphHeader: {
            paddingHorizontal: 30,
            height: 70,
            backgroundColor: isDarkTheme? Colors.black : Colors.white,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            
        },

        appHeaderRight: {
            width: (width / 6),
            flexDirection: 'row',
            justifyContent: 'space-between',
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
            backgroundColor: isDarkTheme? Colors.white : Colors.black,
            borderRadius: 5
        },

        langText: {
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 17,
            marginLeft: 13,
            color: isDarkTheme? Colors.white : Colors.black,
        },

        titletext: {
            fontWeight: '900',
            fontSize: 14,
            lineHeight: 17,
            marginLeft: 13,
            color: isDarkTheme? Colors.white : Colors.black,
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
            borderColor: isDarkTheme? Colors.white : Colors.black,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        option: {
            width: 138,
            height: 68,
            borderRadius: 7,
            backgroundColor: isDarkTheme? Colors.black : Colors.white,
            justifyContent: 'center',
            position: 'absolute',
            elevation: 3,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
            

        }
    });

 
    return (
        <>
            <SafeAreaView style={styles.apphHeader}>
                <View style={styles.appHeaderRight}>
                    <TouchableOpacity style={styles.burgerIcon} onPress = {() => toggleDrawer()}>
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
            </SafeAreaView>
        </>
    )

}



export default AppHeader;