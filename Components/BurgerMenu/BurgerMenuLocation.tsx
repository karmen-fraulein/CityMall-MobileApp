import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { ICategories, ILocation } from '../../Constants/DrawerItems';
import { navigate } from '../../Services/NavigationServices';
import BurgerMenuCategories from './BurgerMenuCategories';

export interface IBmItem {
    item: ILocation,
    categories?: ICategories[],
    routeName: string
}


const BurgerMenuLocation: React.FC<IBmItem> = ({item, categories, routeName}) => {
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;
    const [isCollapsed, setIsCollapsed] = useState<Boolean>(false);

    let MenuItemCategories = categories;

   if (routeName === 'Stores') {
        if(item.id === 2) {
            MenuItemCategories = categories?.filter(c => c.id !==2);
        } else {
            MenuItemCategories = categories;
        }    
    } 

    return (
        <View style={{ marginLeft: 10, marginVertical: 7 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} 
            onPress={() =>categories!?.length > 0 ? setIsCollapsed(!isCollapsed) : navigate(routeName!, {routeId: item.id})}>
                {
                   categories!?.length > 0 ?
                        <Image
                            style={[
                                styles.arrowImgStyle,
                                { transform: [{ rotate: isCollapsed ? '90deg' : '0deg' }] }
                            ]}
                            source={require('../../assets/images/arrow-sm.png')} /> :
                        null
                }
                <Text style={{ color: isDarkTheme ? Colors.white : Colors.black }}> {item.name}</Text>
            </TouchableOpacity>
            {
                isCollapsed && <View>
                    {MenuItemCategories?.map((el, i) => (
                        <BurgerMenuCategories item={el} key={i} routeName = {routeName!} routeId = {item.id}  />
                    ))}
                </View>
            }
        </View>
        
    );
};

export default BurgerMenuLocation;

const styles = StyleSheet.create({
    arrowImgStyle: {
        width: 7,
        height: 7,
    },
})

