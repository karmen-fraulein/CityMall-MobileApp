import React, { useContext, useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppContext } from "../AppContext/AppContext";
import { Colors } from "../Colors/Colors";
import { navigate } from "../Services/NavigationServices";
import Grid from "../Styles/grid";

interface IBmItem {
    item: IBmItemProps
};

interface IBmItemProps {
    name: string,
    _children: Array<any>,
    icon: ImageSourcePropType,
};


const BurgerMenuItem: React.FC<IBmItem> = (props) => {
    const { isDarkTheme } = useContext(AppContext)
    const [isColapsed, setIsColapsed] = useState<boolean>(false);
    const styles = StyleSheet.create({
        mainContStyle: {
            flexDirection: 'row',
            alignContent: 'flex-start',
            alignItems: 'center',

        },

        arrowImgStyle: {
            width: 7,
            height: 7,
            transform: [
                {
                    rotate: isColapsed ? '90deg' : '0deg'
                }
            ]
        },

        listName: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Bold',
            fontSize: 14,
            lineHeight: 17,
            marginLeft: 5,
            textTransform: "uppercase"
        },

        subMenuListText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontFamily: 'HMpangram-Medium',
            fontSize: 14,
            lineHeight: 17,
            fontWeight: '500',
            marginVertical: 8
        }
    })

    return (
        <ScrollView contentContainerStyle={{ marginBottom: '6%' }}>
            <TouchableOpacity style={styles.mainContStyle} onPress={() => setIsColapsed(!isColapsed)}>
                <Image style={styles.arrowImgStyle} source={props.item.icon} />
                <Text style={styles.listName}>{props.item.name}</Text>
            </TouchableOpacity>
            {
                isColapsed ?
                    <View style={{ paddingStart: '8%' }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigate(props.item._children[0].route)}>
                            <Text style={styles.subMenuListText}>{props.item._children[0].location}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={styles.subMenuListText}>{props.item._children[1].location}</Text>
                        </TouchableOpacity>
                    </View>
                    : null
            }
        </ScrollView>
    );
};

export default BurgerMenuItem;