import React, { useContext } from 'react';
import { ListViewBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';

interface IAppSelectItem {
    countryCode: string,
    countryName: string,
    onItemSelect: () => void
}

const AppSelectItem = (props: any) => {
    const { isDarkTheme } = useContext(AppContext)
    const styles = StyleSheet.create({
        listItemWrap: {
            height: 45,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            width: '100%'
        },
        listItemsText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontSize: 14,
            lineHeight: 17,
            fontFamily: 'Pangram-Regular'
        }
    })
    return (
        <View style={{ width: '100%' }}>
            <TouchableOpacity
                style={styles.listItemWrap}
                onPress={props.pressed}>
                <Text style={styles.listItemsText}>
                    {props.item.dial_code}
                </Text>
                <Text style={[styles.listItemsText, { paddingLeft: 10 }]}>
                    {props.item.name}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AppSelectItem;