import React from 'react';
import { ListViewBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDimension } from '../../Hooks/UseDimension';

interface IAppSelectItem {
    countryCode: string,
    countryName: string,
    onItemSelect: () => void
}

const AppSelectItem = (props: any) => {
    const styles = StyleSheet.create({
        listItemWrap: {
            height: 45,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            width: '100%'
        }
    })
    return (
        <View style={{width: '100%'}}>
            <TouchableOpacity style={styles.listItemWrap} onPress={props.onSelect}>
                <Text>{props.country.dial_code}</Text>
                <Text style={{ paddingLeft: 10 }}>{props.country.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AppSelectItem;