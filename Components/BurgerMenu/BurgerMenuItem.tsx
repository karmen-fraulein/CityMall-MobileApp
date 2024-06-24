import React, {
    useContext,
    useState
} from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { AppContext } from "../../AppContext/AppContext";
import { Colors } from "../../Colors/Colors";
import { IDrawerItem } from "../../Constants/DrawerItems";
import { navigate } from "../../Services/NavigationServices";
import BurgerMenuLocation from "./BurgerMenuLocation";

interface IBmItem {
    item: IDrawerItem
};

const BurgerMenuItem: React.FC<IBmItem> = ({ item }) => {
    const { state, setGlobalState } = useContext(AppContext);
    const { isDarkTheme, clientDetails } = state;
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const handleOnMenuItemPress = () => {
        if (item.location?.length == 0) {
            if(clientDetails.length === 0 && item.id === 10) {
                return navigate('AboutUs', {routeId: 2})
            } else {
                return navigate(item.routeName!);
            };
            
        } else {
            if (item.objectTypeId !== undefined) {
                return [setGlobalState({ objectTypeId: item.objectTypeId }), setIsCollapsed(!isCollapsed)]
            } else {
                return setIsCollapsed(!isCollapsed);
            }
        };
    };

    const themeTextColor = {
        color: isDarkTheme ? Colors.white : Colors.black
    };
    const notRegisteredTextColor = {
        color: Colors.red
    }

    return (
        <View style={{ marginBottom: 20 }}>
            <TouchableOpacity style={styles.mainContStyle}
                onPress={handleOnMenuItemPress}>
                {
                    item?.location?.length! !== 0 ?
                        <Image style={[styles.arrowImgStyle, { transform: [{ rotate: isCollapsed ? '90deg' : '0deg' }] }]}
                            source={require('../../assets/images/arrow-sm.png')} />
                        :
                        null
                }
                <Text style={[styles.listName, clientDetails.length ===0 && item.id === 10? notRegisteredTextColor :  themeTextColor]}>
                    {item.name}
                </Text>
            </TouchableOpacity>
            {
                isCollapsed &&
                <View style={{ marginBottom: 5 }}>
                    {
                        item?.location?.map((el, i) => (
                            <BurgerMenuLocation item={el} key={i} categories={item.categories} routeName={item.routeName!} />
                        ))
                    }
                </View>
            }
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
