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

const BurgerMenuCategories: React.FC<IBmCategoriesItem> = (props) => {
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;
    return (
        <View style={styles.categoryView}>
            <TouchableOpacity style={styles.categoryItem} onPress={() => navigate(props.routeName!, {id: props.item?.id, routeId: props.routeId})}>
                <Text style={[styles.categoryItemText, {color: isDarkTheme? Colors.white : Colors.black}]}>
                    {props.item?.name}
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