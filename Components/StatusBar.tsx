import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import { useDimension } from '../Hooks/UseDimension';

const StatusBar = () => {
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;
    const { width } = useDimension();
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={[styles.round, { backgroundColor: Colors.bgColor }]}>
                    </View>
                </View>
                <View style={[styles.line, { width: width / 2 - 70 - width * 15 / 100, backgroundColor: Colors.silver }]} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={[styles.round, { backgroundColor: Colors.silver }]}>
                    </View>
                </View>
                <View style={[styles.line, { width: width / 2 - 70 - width * 15 / 100, backgroundColor: Colors.silver }]} />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={[styles.round, { backgroundColor: Colors.gold }]}>
                    </View>
                    <View style={[styles.line, { width: width / 2 - 70 - width * 15 / 100, backgroundColor: Colors.gold }]} />
                </View>
                <View style={[styles.round, { backgroundColor: Colors.platinum }]}>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' , width: '100%', marginTop: 10}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '45%'}}>
                    <Text style={{ color: isDarkTheme ? Colors.white : Colors.black, fontSize: 10 }}>
                        სტანდარტი
                    </Text>
                    <Text style={{ color: isDarkTheme ? Colors.white : Colors.black, fontSize: 10 }}>
                        ვერცხლი
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%' }}>
                    <Text style={{ color: isDarkTheme ? Colors.white : Colors.black, fontSize: 10 }}>
                        ოქრო
                    </Text>
                    <Text style={{ color: isDarkTheme ? Colors.white : Colors.black, fontSize: 10 }}>
                        პლატინა
                    </Text>
                </View>

            </View>
        </>
    )
};
export default StatusBar;

const styles = StyleSheet.create({
    round: {
        borderRadius: 15,
        width: 30,
        height: 30

    },

    line: {
        height: 4,
    }
})
