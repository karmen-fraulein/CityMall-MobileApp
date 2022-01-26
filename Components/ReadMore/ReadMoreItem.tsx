import React, { useContext, useEffect, useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { AppContext } from "../../AppContext/AppContext";
import { Colors } from "../../Colors/Colors";
import { ShopList } from "../../Constants/ShopList";
import ReadMoreCategories from "./ReadMoreCategories";



interface ShopItem {
    item?: ShopList,
};


const ReadMoreItem: React.FC<ShopItem> = (props) => {
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;
    const [isMore, setIsMore] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            setIsMore(false);
        };
    }, []);

 

    return (
        <View style = {{marginBottom: 20}}>
            <TouchableOpacity style={styles.mainContStyle}
                onPress={() => setIsMore(!isMore)}>
                <Image
                    style={[
                        styles.arrowImgStyle,
                        { transform: [{ rotate: isMore ? '90deg' : '0deg' }] }
                    ]}
                    source={require('../../assets/images/arrow-sm.png')} />
                <Text
                    style={[
                        styles.listName,
                        { color: isDarkTheme ? Colors.white : Colors.black }
                    ]}>
                    ვრცლად
                </Text>
            </TouchableOpacity>
            {isMore && 
            <View style={{marginBottom: 5}}>
               {props.item?.ShopList?.map((el: any, i: React.Key) => (
                   <ReadMoreCategories key ={i} item={el}  />
                   
               ))}  
                 
            </View>}
        </View>
    );
};


export default ReadMoreItem;

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
