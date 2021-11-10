import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDimension } from '../../Hooks/UseDimension';
import countryCodes from './CountryCodes';
import AppSelectItem from './AppSelectItem';


const AppSelect = () => {
    const {width, height} = useDimension();


    const styles = StyleSheet.create({
        modalView: {

        },

        selectView:{
            width: width - 60,
            height: height - 80,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red'

        }
    })
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <ScrollView style={styles.selectView}>
                {countryCodes.map(item => (
                    <AppSelectItem key = {item.code} country = {item}/>
                ))}

            </ScrollView>
        </View>
    );
};

export default AppSelect;