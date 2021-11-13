import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import countryCodes from './CountryCodes';

// interface ICountryCodes {
//     name: string,
//     dial_code: string,
//     code: string,
// }

const SelectDialCode = (props) => {

    const { isDarkTheme } = useContext(AppContext);

    const [selectedId, setSelectedId] = useState(null);


    const styles = StyleSheet.create({
       

        background: {
            backgroundColor: Colors.black,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 10,
            padding: '12%'
        },
        item: {
            flexDirection: 'row',
            width: '100%',
            padding: 9,
            borderBottomWidth: 1,
            borderBottomColor: Colors.white,
            height: 45
        },
        title: {
            fontFamily: 'Pangram-Medium',
            fontSize: 14,
            lineHeight: 17,
            color: Colors.white
        },

        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
    })

  

    const Item = ({ item, onPress }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <Text style={styles.title}>{item.dial_code}</Text>
            <Text style={[styles.title,{marginLeft: 5}]}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        // const color = item.id === selectedId ? 'white' : 'black';
 
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.code)}
                // backgroundColor={Colors.black}
                // textColor={Colors.white}
            />
        );
    };

    return (
        !props.onSelecting?
        <View style={styles.background}>
            {/* <TextInput style={styles.item}/> */}
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={countryCodes}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.code}
                    extraData={selectedId}
                />
            </SafeAreaView>
        </View>
        :null
    );
};

export default SelectDialCode;