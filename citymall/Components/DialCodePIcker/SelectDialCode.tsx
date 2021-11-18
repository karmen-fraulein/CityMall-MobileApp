import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, FlatList, SafeAreaView, ScrollView, ScrollViewComponent, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, VirtualizedList } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';
import countryCodes from './CountryCodes';

export interface ICountryCodes {
    name: string,
    dial_code: string,
    code: string,
}

interface IITem {
    item: ICountryCodes,
    onPress?: () => void,
}

interface ICountryCodeSelect {
    onSelect: (item: ICountryCodes) => void
}

const SelectDialCode: React.FC<ICountryCodeSelect> = (props) => {

    const { isDarkTheme } = useContext(AppContext);
    const { width, height } = useDimension();

    const [countryCode, setCountryCode] = useState<ICountryCodes[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selected, setSelected] = useState<ICountryCodes>();
    const [isSelecting, setIsSelecting] = useState(false);

    useEffect(() => {
        setSelected(countryCodes[0]);
        props.onSelect(countryCodes[0])
    }, []);

    useEffect(() => {
        if(countryCode?.length <= 0) {
            setCountryCode(countryCodes)
        }
    }, [countryCode])



    const styles = StyleSheet.create({
        background: {
            backgroundColor: isDarkTheme? Colors.black : Colors.white,
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
            width: width,
            padding: 9,
            borderBottomWidth: 1,
            borderBottomColor: Colors.white,
            height: 45
        },
        title: {
            fontFamily: 'HMPangram-Medium',
            fontSize: 14,
            lineHeight: 17,
            color: Colors.white
        },

        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
    });

    const handleSearch = () => {
        let filteredCodes = countryCodes.filter(el => el.dial_code.match(searchValue) || el.name.toLowerCase().match(searchValue.toLowerCase()));
        if(searchValue === '') {
            setCountryCode(countryCodes)
        } else {
            setCountryCode(filteredCodes)
        }
    }

    const selectItem = (data: ICountryCodes) => {
        setSelected(data);
        props.onSelect(data)
        setIsSelecting(false);
    };


    const Item: React.FC<IITem> = ({ item, onPress }) => (
        <TouchableOpacity onPress={onPress} style={styles.item}>
            <Text style={styles.title}>{item.dial_code}</Text>
            <Text style={[styles.title, { marginLeft: 5 }]}>{item.name}</Text>
        </TouchableOpacity>
    );

    const RenderItem: React.FC<IITem> = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => selectItem(item)}
            />
        );
    };

    return (
        isSelecting ?
            <View style={styles.background}>
                <TextInput style={styles.item} value={searchValue} onChangeText = {(value: string) => setSearchValue(value)} onChange = {handleSearch}/>
                <SafeAreaView style={styles.container}>
                    <ScrollView contentContainerStyle = {{flexGrow: 1, backgroundColor: 'red'}}>
                        {countryCode.map(item => (
                            <RenderItem key = {item.code} item = {item}/>
                        ))}
                    </ScrollView>
                </SafeAreaView>
            </View>
            :
            <View style={styles.item}>
                <TouchableOpacity
                    onPress={() => setIsSelecting(true)}>
                    <Text style={{ color: Colors.white }}>{selected?.dial_code || 'press'}</Text>
                </TouchableOpacity>
            </View>

    );
};

export default SelectDialCode;