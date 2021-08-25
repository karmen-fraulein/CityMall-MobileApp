import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '../Colors/Colors';

interface IPageProps {
    length?: number;
    step: number,
    style?: StyleProp<ViewStyle>;
}

const PaginationDots: React.FC<IPageProps> = (props) => {
    const [length, setLength] = useState<number[]>([]);

    useEffect(() => {
        setLength([...Array(props.length).keys()].map(() => 0))
    }, []);

    const dots = length.map((_, i) => <View key={i} style={{ ...styles.dot, backgroundColor: i === props.step ? Colors.black : Colors.bgColor }}></View>);

    return (
        <View style={[styles.container, props.style]}>
            {dots}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 50,
        marginHorizontal: 6
    }
})

export default PaginationDots;