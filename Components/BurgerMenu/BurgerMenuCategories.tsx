import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppContext } from '../../AppContext/AppContext';
import { ICategories, ILocation } from '../../Constants/DrawerItems';
import { navigate } from '../../Services/NavigationServices';

export interface IBmCategoriesItem {
    item?: ICategories,
    routeName: string,
    routeId?: number
}

const BurgerMenuCategories: React.FC<IBmCategoriesItem> = ({item, routeName, routeId}) => {
    // console.log('From Burger Menu routeId ==>', routeId)
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;
    return (
        <View style={styles.categoryView}>
            <TouchableOpacity style={styles.categoryItem} onPress={() => navigate(routeName!, {id: item?.id, routeId: routeId})}>
                <Text style={[styles.categoryItemText, {color: isDarkTheme? Colors.white : Colors.black}]}>
                    {item?.name}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default BurgerMenuCategories;

const styles = StyleSheet.create({
    categoryView: {
        marginLeft: 10,
        marginVertical: 7
    },

    categoryItem: {

    },

    categoryItemText: {
        
    }
})