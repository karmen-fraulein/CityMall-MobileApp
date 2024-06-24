import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../Colors/Colors';
import { useDimension } from '../Hooks/UseDimension';

const StatusBar = () => {
    const { width } = useDimension();
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
            <View style={{backgroundColor: 'red'  }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={[styles.round, { backgroundColor: Colors.silver }]}>
                    </View>
                </View>
                <Text style={{ color: Colors.white, fontSize: 8 }}>
                    ვერცხლი
                </Text>
            </View>
            <View style={[styles.line, { width: width / 2 - 30 - width * 15 / 100, backgroundColor: Colors.silver }]} />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <View style={[styles.round, { backgroundColor: Colors.gold }]}>
                    </View>
                    <Text style={{ color: Colors.white, fontSize: 8 }}>
                        ოქრო
                    </Text>
                </View>
                <View style={[styles.line, { width: width / 2 - 30 - width * 15 / 100, backgroundColor: Colors.gold }]} />
            </View>
            <View>
                <View style={[styles.round, { backgroundColor: Colors.platinum }]}>
                </View>
                <Text style={{ color: Colors.white, fontSize: 8 }}>
                    პლატინა
                </Text>
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
