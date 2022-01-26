import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppContext } from '../../AppContext/AppContext';
import { ShopList, Location, Item } from '../../Constants/ShopList';

export interface ShopItem {
    item?: ShopList,
   
}


const ReadMoreCategories: React.FC<ShopItem> = (props) => {
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;

    return (
        <View style={styles.categoryView}>
            <TouchableOpacity style={styles.categoryItem}>
                <Text style={[styles.categoryItemText, {color: isDarkTheme? Colors.white : Colors.black}]}>
                    {props.item?.name || 'rame'}
                    
                </Text>
            </TouchableOpacity>
           
        </View>
    );
};

export default ReadMoreCategories;

const styles = StyleSheet.create({
    categoryView: {
        marginLeft: 10,
        marginVertical: 7
    },

    categoryItem: {

    },

    categoryItemText: {
        color: 'yellow'
    }
})