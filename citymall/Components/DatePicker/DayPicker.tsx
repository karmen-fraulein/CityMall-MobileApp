import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';

const DateSelect: React.FC = (props: any) => {
    const [isSelecting, setIsSelecting] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<any>()
    const dimension = useDimension();
    const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    return (

        !isSelecting ?
            <TouchableOpacity style={[styles.item, props.isSelected ? styles.activeIitem : {}, props.style]} onPress={() => 
            (true)}>
                <Text>{selectedItem}</Text>
            </TouchableOpacity>
            :
            <View style={styles.background}>
                <TouchableOpacity
                    style={styles.background}
                    activeOpacity={1}
                    onPress={() => { }}
                />
                <View style={styles.centeredView}>
                    <View style={[styles.modalView]}>
                        <ScrollView style={{ maxHeight: dimension.height - 220 }}>
                            <View>
                                <Text>დღე</Text>
                            </View>
                            {days.map(item => (
                                <TouchableOpacity key={item} style={[styles.item, props.isSelected ? styles.activeIitem : {}, props.style]} onPress={() => {setSelectedItem(item) ;setIsSelecting(false)}} >
                                    <Text style={{color: Colors.white}}>{item}</Text>
                                </TouchableOpacity>
                            ))}

                        </ScrollView>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        paddingVertical: 30,
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
    background: {
        flex: 1,
        backgroundColor: "#03030366",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Colors.white,
        borderBottomWidth: 1,
        width: 200,
        paddingLeft: 20,
        paddingRight: 30,
        height: 45
        //paddingVertical: 20
    },
    activeIitem: {
        borderTopColor: Colors.bgColor,
        borderBottomColor: Colors.bgColor,
    },

});


export default DateSelect;