import React, { useState } from "react";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../Colors/Colors";
import Grid from "../Styles/grid";

interface IBmItem {
    item: IBmItemProps
}
interface IBmItemProps {
    name: string,
    _children: Array<any>,
    icon: ImageSourcePropType,
}

const BurgerMenuItem: React.FC<IBmItem> = (props) => {
    const [isColapsed, setIsColapsed] = useState<boolean>(false);
    return (
        <View style = {{height: Grid.col_1.height}}>
            <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'flex-start', alignItems: 'center' }} onPress={() => setIsColapsed(!isColapsed)}>
                <Image style={[{ width: 7, height: 7 },
                isColapsed ? {
                    transform: [{
                        rotate: '90deg'
                    }]
                }
                    : {}
                ]}
                    source={props.item.icon} />
                <Text style={{ color: Colors.white, marginLeft: 5 }}>{props.item.name}</Text>
            </TouchableOpacity>
            {
                isColapsed ?
                    <View style={{ paddingStart: 30 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: Colors.white }}>{props.item._children[0].location}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ color: Colors.white }}>{props.item._children[1].location}</Text>
                        </TouchableOpacity>
                    </View>
                    : null
            }
        </View>
    )
};

export default BurgerMenuItem;