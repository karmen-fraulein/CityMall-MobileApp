import React, { useContext, useEffect, useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';

export interface IDistrict {
    id: number,
    name: string
}

interface ISelectedItem {
    selectedItem: IDistrict
}

interface IDistricts {
    districts: IDistrict
}





const DistrictPiker = (props: any) => {
    const [isSelecting, setIsSelecting] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<IDistrict>();
    const { width, height } = useDimension();
    const { isDarkTheme } = useContext(AppContext);

    useEffect(() => {
        if (selectedItem) {
            props.onSelect(selectedItem);
        };
    }, [selectedItem])

    const styles = StyleSheet.create({
        background: {

            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            backgroundColor: 'red',
            elevation: 10,

        },

        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },

        selectBox: {

        },
        modalView: {
            margin: 20,
            backgroundColor: Colors.black,
            borderRadius: 10,
            borderColor: Colors.bgColor,
            borderWidth: 1,
            paddingVertical: 10,
            shadowColor: Colors.black,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            width: '90%',
            maxWidth: 380
        },

        selectedItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 16,
            paddingBottom: 10,
            paddingHorizontal: 10,
            borderBottomColor: isDarkTheme ? Colors.white : Colors.black,
            borderBottomWidth: 1,
            height: 65
        },

        itemText: {
            color: isDarkTheme ? Colors.white : Colors.black
        }
    })


    const handleSelect = (item: IDistrict) => {
        setSelectedItem(item);
        setIsSelecting(false);
    };


    return (
        !isSelecting ?
            <TouchableOpacity
                style={styles.selectedItem}
                onPress={() => setIsSelecting(true)}>
                {selectedItem ?
                    <Text style={styles.itemText}>{selectedItem?.name}</Text>
                    :
                    <Text style={styles.itemText}>{props.placeholder}</Text>
                }
                <Image source = {require('./../../assets/images/arrow-down-sm.png')} style={{width: 7, height: 7, marginLeft: 10}} />
            </TouchableOpacity>
            :

            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => {
                        setIsSelecting(!isSelecting)
                    }}
                    visible={isSelecting}>
                        
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <ScrollView style={{ maxHeight: height - 200 }} contentContainerStyle={{ flexGrow: 1 }} pointerEvents='box-none'>
                                {props.districts.map((item: IDistrict) => (
                                    <TouchableOpacity
                                        style={styles.selectedItem}
                                        key={item.id}
                                        onPress={() => handleSelect(item)}>
                                        <Text style={styles.itemText}>{item.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
    );
};



export default DistrictPiker;
