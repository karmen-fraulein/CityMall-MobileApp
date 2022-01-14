import React, { useContext, useEffect, useState } from "react";
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
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            setIsCollapsed(false);
        };
    }, []);


    return (
        <ScrollView
            contentContainerStyle={{ marginBottom: '6%' }}>
            <TouchableOpacity style={styles.mainContStyle}
                onPress={() => setIsCollapsed(!isCollapsed)}>
                <Image
                    style={[
                        styles.arrowImgStyle,
                        { transform: [{ rotate: isCollapsed ? '90deg' : '0deg' }] }
                    ]}
                    source={props.item.icon} />
                <Text
                    style={[
                        styles.listName,
                        { color: isDarkTheme ? Colors.white : Colors.black }
                    ]}>
                    {props.item.name}
                </Text>
            </TouchableOpacity>
            {
                isCollapsed ?
                    <View style={{ paddingStart: '8%' }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={() => navigate(props.item._children[0].route)}>
                            <Text
                                style={[
                                    styles.subMenuListText,
                                    { color: isDarkTheme ? Colors.white : Colors.black }
                                ]}>
                                {props.item._children[0].location}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={() => navigate(props.item._children[1].route)}>

                            <Text
                                style={[
                                    styles.subMenuListText,
                                    { color: isDarkTheme ? Colors.white : Colors.black }
                                ]}>
                                {props.item._children[1].location}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    : null
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContStyle: {
        flexDirection: 'row',
        alignContent: 'flex-start',
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
})

export default BurgerMenuItem;