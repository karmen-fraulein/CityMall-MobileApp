import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Grid from '../Styles/grid';
import { Colors } from '../Colors/Colors';
import BurgerMenuItem from './BurgerMenuItem';
import DrawerItems from '../Constants/DrawerItems';
import { AppContext } from '../AppContext/AppContext';
import AuthService from '../Services/AuthService';

const BurgerMenu: React.FC = (props) => {

    const { setIsAuth, isDarkTheme, clientDetails } = useContext(AppContext)

    const styles = StyleSheet.create({
        burgerMenuCont: {
            flex: 1,
            backgroundColor: isDarkTheme ? Colors.black : Colors.white,
           
            
        },
        burgerMenuHeader: {
            height: Grid.col_2.height,
            justifyContent: 'space-around',
            paddingHorizontal: '8%'
        },
        usernameText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Medium',
            fontSize: 12,
            lineHeight: 15,
            fontWeight: '500'
        },

        burgerMenuSeparator: {
            height: Grid.row_1.height,
            justifyContent: 'center',
            paddingRight: '8%'


        },

        logoutBtn: {
            width: 224,
            height: 39,
            borderRadius: 50,
            backgroundColor: Colors.darkGrey,
            justifyContent: 'center',
            alignItems: 'center'
        },

        logoutBtnText: {
            fontFamily: 'HMpangram-Bold',
            textTransform: 'uppercase',
            fontSize: 14,
            lineHeight: 17,
            color: isDarkTheme? Colors.white : Colors.black
        }
    });

    return (
        <SafeAreaView style={styles.burgerMenuCont}>
            <View style={styles.burgerMenuHeader}>
                <Image source={require('../assets/images/city-mall-title.png')} style={{ width: 135, height: 17 }} />
                <Text style={styles.usernameText}>{clientDetails?.[0]?.firstName} {clientDetails?.[0]?.lastName}</Text>
                <Image source={require('../assets/images/gradient-line.png')} style={{ width: '100%' }} />
            </View>
            <ScrollView contentContainerStyle={{ marginVertical: '10%', paddingLeft: '8%' }}>
                {DrawerItems.map((item: any, index: number) => (
                    item.name === '_blank' ?
                        <View style={styles.burgerMenuSeparator} key='_blank'>
                            <View style={{ borderColor: '#ffffff45', borderWidth: 1 }}></View>
                        </View>
                        :
                        <BurgerMenuItem item={item} key={index} />
                ))}
            </ScrollView>
            <View style={[Grid.col_1, { justifyContent: 'flex-start', marginLeft: '8%'  }]}>
                <TouchableOpacity style={styles.logoutBtn} onPress={() => {
                    AuthService.SignOut();
                    setIsAuth(false);
                }}>
                    <Text style={styles.logoutBtnText}>გამოსვლა</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default BurgerMenu;