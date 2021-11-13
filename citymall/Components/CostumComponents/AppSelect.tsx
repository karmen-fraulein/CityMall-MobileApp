import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDimension } from '../../Hooks/UseDimension';
import countryCodes from '../DialCodePIcker/CountryCodes';
import { Colors } from '../../Colors/Colors';
import { AppContext } from '../../AppContext/AppContext';


const AppSelect = (props: any) => {
    const { isDarkTheme } = useContext(AppContext)
    const { width, height } = useDimension();
    const [selecting, setSelecting] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<any>({});


    const styles = StyleSheet.create({
        appSelectWrap: {
            width: '100%',
            height: 66,
            borderWidth: 1,
            borderColor: Colors.white,
            justifyContent: 'center'
        }


    });

    return (
            <TouchableOpacity style={styles.appSelectWrap}>
            </TouchableOpacity>
    )
       
};

export default AppSelect;