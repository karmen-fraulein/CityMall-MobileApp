import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Colors/Colors';

const AppSelectedItem = () => {
    const styles = StyleSheet.create({

    })
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={{color: Colors.white, fontSize: 14, fontFamily: 'Pangram-Medium'}}>+995 </Text>
            <Text style={{color: Colors.white, fontSize: 14, fontFamily: 'Pangram-Medium'}}> Georgia</Text>
        </View>
    );
};

export default AppSelectedItem;