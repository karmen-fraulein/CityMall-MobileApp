import React, { useContext, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Grid from '../Styles/grid';
import { Colors } from '../Colors/Colors';
import BurgerMenuItem from './BurgerMenuItem';
import DrawerItems from '../Constants/DrawerItems';
import { AppContext } from '../AppContext/AppContext';

const BurgerMenu: React.FC = (props) => {

    const {setIsAuth} = useContext(AppContext)

    const styles = StyleSheet.create({
        logoutBtn: {
            width: 224,
            height: 39,
            borderRadius: 50,
            backgroundColor: Colors.darkGrey,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black, paddingLeft: 35 }}>
            <View style={[Grid.col_1, { justifyContent: 'center' }]}>
                <Image source={require('../assets/images/city-mall-title.png')}  style={{ width: 135, height: 17}}/>
            </View>
            <View style={Grid.col_10}>
                <View style={[Grid.row_1, { justifyContent: 'space-around' }]}>
                    <Text style={{ color: Colors.white }}>გვანცა გაბუნია</Text>
                    <Image source={require('../assets/images/gradient-line.png')} style={{ width: 210 }} />
                </View>
                <ScrollView>
                    {DrawerItems.map((item: any, index: number) => (
                        <BurgerMenuItem item={item} key={index} />
                    ))}
                </ScrollView>

            </View>
            <View style={[Grid.col_1, { justifyContent: 'flex-start' }]}>
                <TouchableOpacity style={styles.logoutBtn} onPress = {() => setIsAuth(false)}>
                    <Text>გამოსვლა</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default BurgerMenu;