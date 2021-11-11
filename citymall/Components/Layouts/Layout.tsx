import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, Image, Keyboard, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import GoBack from '../../Services/NavigationServices'
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import Grid from '../../Styles/grid';

interface ILayoutProp {
    pageName?: string,
    hasBackArrow?: boolean,
    hideArrows?: boolean
}

const Layout: React.FC<ILayoutProp> = (props) => {
    const { isDarkTheme } = useContext(AppContext);
    const DownArrowAnim = useRef(new Animated.Value(0));
    const UpArrowAnim = useRef(new Animated.Value(0));

    const [keyBoardShown, setKeyBoardShown] = useState<boolean>(false)


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

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyBoardShown(true);
        });
        const hideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyBoardShown(false);
        });

        return () => {
            showListener.remove();
            hideListener.remove();
        }
    }, []);

    console.log('keyBoardShown', keyBoardShown)
    return (
        <View style={styles.layout}>
            {props.hideArrows && keyBoardShown ?
                null :
                <View style={[Grid.col_2, { flexDirection: 'row' }]}>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        {props.hasBackArrow ?
                            <>
                                <TouchableOpacity style={{ marginLeft: 25 }} onPress={() => GoBack}>
                                    <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/back-arrow.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={{ color: Colors.white, fontFamily: 'Pangram-Medium', paddingHorizontal: 15 }}>ENG</Text>
                                </TouchableOpacity>
                                <Image style={{ width: 135, height: 17 }} source={require('../../assets/images/city-mall-title.png')} />
                            </>
                            : null}
                    </View>
                    <Animated.Image style={[styles.downArrow, downArrowStyle]} source={require('../../assets/images/arrow-down.png')} />
                </View>
            }
            <ScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps='always'>
                {props.children}
            </ScrollView>
            {keyBoardShown ?
                null
                :
                <Animated.View style={[Grid.col_2, { justifyContent: 'flex-end' }]}>
                    <Animated.Image style={[styles.upArrow, upArrowStyle]} source={require('../../assets/images/arrow-up.png')} />
                </Animated.View >}
        </View>
    );
};

export default Layout;