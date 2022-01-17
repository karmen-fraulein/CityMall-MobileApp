import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../Colors/Colors';
import { useDimension } from '../Hooks/UseDimension';

const StatusBar = () => {
    const {width} = useDimension();
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.round, { backgroundColor: Colors.silver }]}>
                </View>
                <View style={[styles.line, {width: width/2 - 60, backgroundColor: Colors.silver }]} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.round, { backgroundColor: Colors.gold }]}>
                </View>
                <View style={[styles.line, { width: width/2 - 30 - width*15/100, backgroundColor: Colors.gold }]} />
            </View>
            <View>
                <View style={[styles.round, { backgroundColor: Colors.platinum }]}>
                </View>
            </View>
        </View>
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
