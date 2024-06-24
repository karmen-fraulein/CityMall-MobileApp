import React, {
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
import {
    Animated,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';

interface ILayoutProp {
    pageName?: string,
    hasBackArrow?: boolean,
    hideArrows?: boolean,
    onPressBack?: () => void,
}

const Layout: React.FC<ILayoutProp> = (props) => {
    const { state } = useContext(AppContext);
    const { isDarkTheme } = state;

    const DownArrowAnim = useRef(new Animated.Value(0));
    const UpArrowAnim = useRef(new Animated.Value(0));

    const [keyBoardShown, setKeyBoardShown] = useState<boolean>(false)


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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: isDarkTheme ? Colors.black : Colors.white }}>
            <View style={{ flexDirection: 'row', height: keyBoardShown || props.hideArrows ? 'auto' : 89 }}>
                <View style={styles.headerAction}>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            props.hasBackArrow ?
                                <TouchableOpacity style={{ marginLeft: 25 }} onPress={props.onPressBack}>
                                    <Image style={{ width: 15, height: 15 }} source={require('../../assets/images/back-arrow.png')} />
                                </TouchableOpacity>
                                :
                                null
                        }
                        <TouchableOpacity >
                            <Text style={{ color: Colors.white, fontFamily: 'HMpangram-Medium', paddingHorizontal: 15 }}>
                                ENG
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.cityMall, { color: isDarkTheme ? Colors.white : Colors.black }]}>
                        {props.pageName}
                    </Text>
                </View>
                {
                    (keyBoardShown && Platform.OS === 'android') || props.hideArrows ?
                        null
                        :
                        <Animated.Image style={[styles.downArrow, downArrowStyle]} source={require('../../assets/images/arrow-down.png')} />
                }
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                    {props.children}
                </ScrollView>
            </KeyboardAvoidingView>
            {
                (keyBoardShown && Platform.OS === 'android') || props.hideArrows ?
                    null
                    :
                    <Animated.View style={{ justifyContent: 'flex-end', height: props.hideArrows ? 'auto' : 89 }}>
                        <Animated.Image style={[styles.upArrow, upArrowStyle]} source={require('../../assets/images/arrow-up.png')} />
                    </Animated.View >
            }
        </SafeAreaView>

    );
};

export default Layout;
const styles = StyleSheet.create({
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
    },

    headerAction: {
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '68%'
    },

    cityMall: {
        fontFamily: 'HMpangram-Bold',
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});
