import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { useDimension } from '../../Hooks/UseDimension';
import countryCodes from './CountryCodes';
import AppSelectItem from './AppSelectItem';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../Colors/Colors';
import { AppContext } from '../../AppContext/AppContext';


const AppSelect = (props: any) => {
    const { isDarkTheme } = useContext(AppContext)
    const { width, height } = useDimension();
    const [selecting, setSelecting] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<any>({});


    const styles = StyleSheet.create({
        modalView: {

        },
        searchContainer: {
            position: 'relative',
            height: 45,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            width: '100%',
            backgroundColor: Colors.black,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
        },
        searchIcon: {
            width: 17,
            height: 17,
            position: 'absolute',
            right: 10,
            top: 14
        },
        selectView: {
            backgroundColor: 'green',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10


        },
        listItemWrap: {
            width: '100%',
            height: 45,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            backgroundColor: isDarkTheme ? Colors.black : Colors.white,
          
        },
        listItemsText: {
            color: isDarkTheme ? Colors.white : Colors.black,
            fontSize: 14,
            lineHeight: 17,
            fontFamily: 'Pangram-Regular'
        }
    });

    useEffect(() => {
        props.onSelect(selectedItem);
    }, [selectedItem])


    return (

        <>
            {
                !selecting ?
                <View style={{borderBottomWidth: 1, borderBottomColor: isDarkTheme ? Colors.black : Colors.white, width: '15%'}}>
                    <TouchableOpacity style={styles.listItemWrap} onPress={() => setSelecting(true)}>
                        <Text style={styles.listItemsText}>{selectedItem.dial_code}</Text>
                    </TouchableOpacity>
                </View>
                    
                    :
                    <View style={{ height: height - 80, width: width - 60, }}>
                        <View style={styles.searchContainer}  >
                            <TextInput value={searchValue} onChangeText={(value: string) => setSearchValue(value)} placeholder='ძებნა' placeholderTextColor={Colors.white} style={{ color: Colors.white }} />
                            <Image source={require('../../assets/images/loupe.png')} style={styles.searchIcon} />
                        </View>
                        <ScrollView style={styles.selectView} contentContainerStyle={{ alignContent: 'center', justifyContent: 'center' }}>
                            {countryCodes.map(item => (
                                <AppSelectItem key={item.code} country={item} onSelectItem={() => { setSelectedItem(item); setSelecting(false) }} />
                            ))}
                        </ScrollView>
                    </View>
            }
        </>
    );
};

export default AppSelect;