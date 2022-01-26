import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Colors} from '../../Colors/Colors';



export interface IAppBtnProps {
    onPress: () => void,
    title: string,
}



const VouchersButton: React.FC<IAppBtnProps> = (props) => {


    const { onPress,title} = props;
    //const styles = StyleSheet.create({});
    return (
        <TouchableOpacity
            onPress={onPress}>
            
            <View style={styles.btn}>
                <Text style={styles.btnTitle}>{title}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    btn: {
        width: 272,
        height: 39,
        backgroundColor: Colors.btnGrey,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: Colors.white,
        fontSize: 10,
        fontFamily: 'HM pangram',
        textTransform: "uppercase",
    }
})
export default VouchersButton;