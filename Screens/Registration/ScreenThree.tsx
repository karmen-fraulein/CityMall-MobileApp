import React, { useContext } from 'react';
import { ActivityIndicator, Keyboard, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {AppContext} from '../../AppContext/AppContext';
import Layout from '../../Components/Layouts/Layout';
import ApiServices from '../../Services/ApiServices';
import { navigate } from '../../Services/NavigationServices';
import Grid from '../../Styles/grid';



const ScreenThree: React.FC = () => {
    const { isDarkTheme, setDetails } = useContext(AppContext);

    const handleGetClientCards = () => {
        ApiServices.GetClientCards().then(res => {
            setDetails(res.data);
            navigate('HomeScreen')
        })
            .catch(e => {
                console.log(JSON.parse(JSON.stringify(e.response)).data);
            });
    };

    return (
        <Layout hasBackArrow={false} >
            <ScrollView keyboardShouldPersistTaps='always' contentContainerStyle={{ paddingHorizontal: '10%', position: 'relative', flexGrow: 1 }}>
                <View style={[Grid.row_12_5, {}]}>
                    <Text style={[styles.regTitle, { color: isDarkTheme ? Colors.white : Colors.black }]}>რეგისტრაცია</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Image source={require('../../assets/images/success-mark.png')} style={{ width: 64, height: 64, marginBottom: 20 }} />
                    <Text style={[styles.registerSuccess, { color: isDarkTheme ? Colors.white : Colors.black, }]}>რეგისტაცია წარმატებით დასრულდა</Text>
                </View>
                <View style={[Grid.row_12_5, { marginBottom: 20 }]}>
                    <TouchableOpacity style={styles.authBtn} onPress={handleGetClientCards}>
                        <Text style={[styles.btnText, { color: isDarkTheme ? Colors.white : Colors.black, }]}>დახურვა</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Layout>
    );
};

export default ScreenThree;

const styles = StyleSheet.create({
    regTitle: {
        textAlign: 'center',

        fontFamily: 'HMpangram-Bold',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 22,
        alignItems: 'center',
        textTransform: 'uppercase'
    },
    authBtn: {
        marginBottom: 100,
        alignSelf: 'center',
        width: 325,
        height: '100%',
        maxHeight: 66,
        backgroundColor: Colors.darkGrey,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    btnText: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '800',
        fontFamily: 'HMpangram-Bold',
        textTransform: 'uppercase'
    },

    registerSuccess: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 22,
        textAlign: 'center'
    },

});
