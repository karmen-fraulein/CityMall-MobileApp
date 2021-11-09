import React, { useContext, useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import Grid from '../../Styles/grid';

interface ILayoutProp {
    pageName?: string,
    hasBackArrow?: boolean
}

const Layout: React.FC<ILayoutProp> = (props) => {
    const { isDarkTheme } = useContext(AppContext);
    const DownArrowAnim = useRef(new Animated.Value(0));
    const UpArrowAnim = useRef(new Animated.Value(0));


    console.log('DownArrowAnim ===> ',DownArrowAnim, 'UpArrowAnim====>', UpArrowAnim )

    const styles = StyleSheet.create({
        layout: {
            flex: 1,
            backgroundColor: isDarkTheme ? Colors.black : Colors.white
        },

        upArrow: {
            position: 'absolute',
            maxWidth: 89, 
            width: '100%',
            height: 89, 
        },

        downArrow: {
            position: 'absolute',
            right: 0,
            maxWidth: 89, 
            width: '100%',
            height: 89, 
        }
    });

    const downArrowStyle = {
        top: DownArrowAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [-90, 0]
        }),
        right: DownArrowAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [-90, 0]
        }),
        
    };
    const upArrowStyle = {
        bottom: UpArrowAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [-90, 0]
        }),
        left: UpArrowAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [-90, 0]
        }),
        
    };

    useEffect(()=> {
        Animated.timing(DownArrowAnim.current, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false
        }).start();
        Animated.timing(UpArrowAnim.current, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }, [])
    
console.log(upArrowStyle.bottom) 


    return (
        <View style={styles.layout}>
            <View style={[Grid.col_2, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                {/* <Image style={{ width: 12, height: 12 }} source={require('../../assets/images/back-arrow.png')} />
                <Text style={{ color: Colors.white, fontFamily: 'Pangram-Medium', paddingLeft: 31}}>ENG</Text>
                <Image style={{ width: 135, height: 17}} source={require('../../assets/images/city-mall-title.png')} /> */}
                <Animated.Image style={[styles.downArrow, downArrowStyle]} source={require('../../assets/images/arrow-down.png')} />
            </View>
            <ScrollView contentContainerStyle = {{flexGrow: 1}}>
                {props.children}
            </ScrollView>
            <Animated.View style={[Grid.col_2, {justifyContent: 'flex-end'}]}>
            <Animated.Image style={[styles.upArrow, upArrowStyle]} source={require('../../assets/images/arrow-up.png')} />
            </Animated.View >
        </View>
    );
};

export default Layout;