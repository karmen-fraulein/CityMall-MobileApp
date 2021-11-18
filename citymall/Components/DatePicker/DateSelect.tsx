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





const DateSelect = (props: any) => {
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
            paddingTop: 16,
            paddingBottom: 10,
            paddingHorizontal: 10,
        },

        itemText: {
            color: isDarkTheme ? Colors.white : Colors.black
        }
    })


    const handleSelect = (item: IDistrict) => {
        setSelectedItem(item);
        setIsSelecting(false);
    };

    const valueTranslate = (value:any ) => {
        if (props.pickType === 'month') {
            let month;
            switch (value) {
                case '01':
                    month = 'იანვარი'
                    break;
                case '02':
                    month = 'თებერვალი'
                    break;
                case '03':
                    month = 'მარტი'
                    break;
                case '04':
                    month = 'აპრილი'
                    break;
                case '05':
                    month = 'მაისი'
                    break;
                case '06':
                    month = 'ივნისი'
                    break;
                case '07':
                    month = 'ივლისი'
                    break;
                case '08':
                    month = 'აგვისტო'
                    break;
                case '09':
                    month = 'სექტემბერი'
                    break;
                case '10':
                    month = 'ოქტომბერი'
                    break;
                case '11':
                    month = 'ნოემბერი'
                    break;
                case '12':
                    month = 'დეკემბერი'
                    break;
                default:
                    break;
            }
            return month;
        } else {
            return value
        }
    }


    return (
        !isSelecting ?
            <TouchableOpacity
                style={styles.selectedItem}
                onPress={() => setIsSelecting(true)}>
                {selectedItem ?
                    <Text style={styles.itemText}>{valueTranslate(selectedItem)}</Text>
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
                                {props.data.map((item: any) => (
                                    <TouchableOpacity
                                        style={styles.selectedItem}
                                        key={item}
                                        onPress={() => handleSelect(item)}>
                                        <Text style={styles.itemText}>{valueTranslate(item)}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
    );
};

export default DateSelect;
