import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Image, Modal, SafeAreaView, ScrollView, ScrollViewComponent, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, VirtualizedList } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';
import countryCodes from './CountryCodes';

// export interface ICountryCodes {
//     name: string,
//     dial_code: string,
//     code: string,
// }

// interface IITem {
//     item: ICountryCodes,
//     onPress?: () => void,
// }

// interface ICountryCodeSelect {
//     onSelect: (item: ICountryCodes) => void
// }

// const SelectDialCode: React.FC<ICountryCodeSelect> = (props) => {

//     const { isDarkTheme } = useContext(AppContext);
//     const { width, height } = useDimension();

//     const [countryCode, setCountryCode] = useState<ICountryCodes[]>([]);
//     const [searchValue, setSearchValue] = useState<string>('');
//     const [selected, setSelected] = useState<ICountryCodes>();
//     const [isSelecting, setIsSelecting] = useState(false);




//     const styles = StyleSheet.create({
//         background: {
//             backgroundColor: isDarkTheme? Colors.black : Colors.white,
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             top: 0,
//             bottom: 0,
//             alignItems: 'center',
//             justifyContent: 'center',
//             elevation: 10,
//             padding: '12%'
//         },
//         item: {
//             flexDirection: 'row',
//             width: width,
//             padding: 9,
//             borderBottomWidth: 1,
//             borderBottomColor: Colors.white,
//             height: 45
//         },
//         title: {
//             fontFamily: 'HMPangram-Medium',
//             fontSize: 14,
//             lineHeight: 17,
//             color: Colors.white
//         },

//         container: {
//             flex: 1,
//             marginTop: StatusBar.currentHeight || 0,
//         },
//     });

//     const handleSearch = () => {
//         let filteredCodes = countryCodes.filter(el => el.dial_code.match(searchValue) || el.name.toLowerCase().match(searchValue.toLowerCase()));
//         if(searchValue === '') {
//             setCountryCode(countryCodes)
//         } else {
//             setCountryCode(filteredCodes)
//         }
//     }

//     const selectItem = (data: ICountryCodes) => {
//         setSelected(data);
//         props.onSelect(data)
//         setIsSelecting(false);
//     };


//     const Item: React.FC<IITem> = ({ item, onPress }) => (
//         <TouchableOpacity onPress={onPress} style={styles.item}>
//             <Text style={styles.title}>{item.dial_code}</Text>
//             <Text style={[styles.title, { marginLeft: 5 }]}>{item.name}</Text>
//         </TouchableOpacity>
//     );

//     const RenderItem: React.FC<IITem> = ({ item }) => {
//         return (
//             <Item
//                 item={item}
//                 onPress={() => selectItem(item)}
//             />
//         );
//     };

//     return (
//         isSelecting ?
//             <View style={styles.background}>
//                 <TextInput style={styles.item} value={searchValue} onChangeText = {(value: string) => setSearchValue(value)} onChange = {handleSearch}/>
//                 <SafeAreaView style={styles.container}>
//                     <ScrollView contentContainerStyle = {{flexGrow: 1, backgroundColor: 'red'}}>
//                         {countryCode.map(item => (
//                             <RenderItem key = {item.code} item = {item}/>
//                         ))}
//                     </ScrollView>
//                 </SafeAreaView>
//             </View>
//             :
//             <View style={styles.item}>
//                 <TouchableOpacity
//                     onPress={() => setIsSelecting(true)}>
//                     <Text style={{ color: Colors.white }}>{selected?.dial_code || 'press'}</Text>
//                 </TouchableOpacity>
//             </View>

//     );
// };

// export default SelectDialCode;



// import React, { useContext, useEffect, useState } from 'react';
// import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { AppContext } from '../../AppContext/AppContext';
// import { Colors } from '../../Colors/Colors';
// import { useDimension } from '../../Hooks/UseDimension';

// export interface IDistrict {
//     id: number,
//     name: string
// }

// interface ISelectedItem {
//     selectedItem: IDistrict
// }

// interface IDistricts {
//     districts: IDistrict
// }


export interface ICountryCodes {
    name: string,
    dial_code: string,
    code: string,
}


const DialCodePIcker = (props: any) => {
    const [isSelecting, setIsSelecting] = useState<boolean>(false);
    const [countryCode, setCountryCode] = useState<ICountryCodes[]>([]);
    const [selectedItem, setSelectedItem] = useState<any>();
    const [searchValue, setSearchValue] = useState<string>('');
    const { width, height } = useDimension();
    const { isDarkTheme } = useContext(AppContext);

    useEffect(() => {
        if (selectedItem) {
            props.onSelect(selectedItem);
        };
    }, [selectedItem]);

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
            borderBottomWidth: 1
        },

        itemText: {
            color: isDarkTheme ? Colors.white : Colors.black
        }
    });


    useEffect(() => {
        setSelectedItem(countryCodes[0]);
        props.onSelect(countryCodes[0])
    }, []);

    useEffect(() => {
        if (countryCode?.length <= 0) {
            setCountryCode(countryCodes)
        }
    }, [countryCode])


    const handleSearch = () => {
        let filteredCodes = countryCodes.filter(el => el.dial_code.match(searchValue) || el.name.toLowerCase().match(searchValue.toLowerCase()));
        if (searchValue === '') {
            setCountryCode(countryCodes)
        } else {
            setCountryCode(filteredCodes)
        }
    }

    const handleSelect = (item: ICountryCodes) => {
        setSelectedItem(item);
        setIsSelecting(false);
    };


    return (
        !isSelecting ?
            <TouchableOpacity
                style={styles.selectedItem}
                onPress={() => setIsSelecting(true)}>
                {selectedItem ?
                    <Text style={styles.itemText}>{selectedItem?.dial_code}</Text>
                    :
                    <Text style={styles.itemText}>{props.placeholder}</Text>
                }
                <Image source={require('./../../assets/images/arrow-down-sm.png')} style={{ width: 7, height: 7, marginLeft: 10 }} />
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
                            <ScrollView style={{ maxHeight: height - 300 }} contentContainerStyle={{ flexGrow: 1 }} pointerEvents='box-none'>
                                <View>
                                    <TextInput style={styles.selectedItem} value={searchValue} onChangeText={(value: string) => setSearchValue(value)} onChange={handleSearch} />
                                </View>

                                {countryCode.map((item: any) => (
                                    <TouchableOpacity
                                        style={styles.selectedItem}
                                        key={item.code}
                                        onPress={() => handleSelect(item)}>
                                        <Text style={styles.itemText}>{item.dial_code} {item.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
            </View>
    );
};



export default DialCodePIcker;
