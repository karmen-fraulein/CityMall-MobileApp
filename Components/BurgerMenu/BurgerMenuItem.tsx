import React, { useContext, useEffect, useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppContext } from "../../AppContext/AppContext";
import { Colors } from "../../Colors/Colors";
import { IDrawerItem } from "../../Constants/DrawerItems";
import { navigate } from "../../Services/NavigationServices";
import Grid from "../../Styles/grid";
import BurgerMenuLocation from "./BurgerMenuLocation";

interface IBmItem {
    item: IDrawerItem
};

// interface IBmItemProps {
//     name: string,
//     _children: Array<any>,
//     icon: ImageSourcePropType,
// };


const BurgerMenuItem: React.FC<IBmItem> = ({item}) => {
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            setIsCollapsed(false);
        };
    }, []);

    const handleOnMenuItemPress = () => {
        if(item.location?.length == 0) {
            return navigate(item.routeName!);
        } else {
            return setIsCollapsed(!isCollapsed);
        };
    };

 


    return (
        <View style = {{marginBottom: 20}}>
            <TouchableOpacity style={styles.mainContStyle}
                onPress={handleOnMenuItemPress}>
                { 
                item?.location?.length! !== 0 ?
                    <Image
                    style={[
                        styles.arrowImgStyle,
                        { transform: [{ rotate: isCollapsed ? '90deg' : '0deg' }] }
                    ]}
                    source={require('../../assets/images/arrow-sm.png')} />
                    :
                    null
                }
                <Text
                    style={[
                        styles.listName,
                        { color: isDarkTheme ? Colors.white : Colors.black }
                    ]}>
                    {item.name}
                </Text>
            </TouchableOpacity>
            {isCollapsed && 
            <View style={{marginBottom: 5}}>
               {item?.location?.map((el, i) => (
                   <BurgerMenuLocation item = {el} key = {i} categories = {item.categories} routeName = {item.routeName!}/>
               ))}     
            </View>}
        </View>
    );
};


export default BurgerMenuItem;

const styles = StyleSheet.create({
    mainContStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    arrowImgStyle: {
        width: 7,
        height: 7,
    },

    listName: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 14,
        lineHeight: 17,
        marginLeft: 5,
        textTransform: "uppercase"
    },

    subMenuListText: {
        fontFamily: 'HMpangram-Medium',
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '500',
        marginVertical: 8
    }
});
