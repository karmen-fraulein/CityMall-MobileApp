import React, { useState } from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Grid from '../Styles/grid';
import { Colors } from '../Colors/Colors';
import BurgerMenuItem from './BurgerMenuItem';
import DrawerItems from '../Constants/DrawerItems';

const BurgerMenu = (props: any) => {

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
                <Image source={require('../assets/images/city-mall-title.png')} />
            </View>
            <View style={Grid.col_10}>
                <View style={[Grid.row_1, { justifyContent: 'space-around' }]}>
                    <Text style={{ color: Colors.white }}>გვანცა გაბუნია</Text>
                    <Image source={require('../assets/images/gradient-line.png')} />
                </View>
                {DrawerItems.map((item: any, index: number) => (
                    <BurgerMenuItem item = {item} key  = {index}/>
                ))}
                

            </View>
            <View style={[Grid.col_1, { justifyContent: 'flex-start' }]}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text>გამოსვლა</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default BurgerMenu;




// const CustomDrawerNavigation = (props) => {
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <View style={{ height: 250, backgroundColor: '#d2d2d2', opacity: 0.9 }}>
//                 <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
//                     <Image source={require('./assets/no-image.png')} style={{ height: 150, width: 150, borderRadius: 60 }} />
//                 </View>
//                 <View style={{ height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
//                     <Text>John Doe</Text>
//                 </View>
//             </View>
//             <ScrollView>
//                 <DrawerItems {...props} />
//             </ScrollView>
//             <View style={{ alignItems: "center", bottom: 20 }}>
//                 <View style={{ flexDirection: 'row' }}>
//                     <View style={{ flexDirection: 'column', marginRight: 15 }}>
//                         <Icon name="flask" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
//                     </View>
//                     <View style={{ flexDirection: 'column' }}>
//                         <Icon name="call" style={{ fontSize: 24 }} onPress={() => console.log("Tıkladın")} />
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }