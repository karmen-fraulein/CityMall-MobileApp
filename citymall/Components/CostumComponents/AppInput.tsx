import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';


const AppInput = (props: any) => {
    const {isDarkTheme} = useContext(AppContext);
    const {width} = useDimension();

    const styles = StyleSheet.create({
        inputWrap: {
            position: 'relative', 
            borderColor: isDarkTheme? Colors.white : Colors.black, 
            borderBottomWidth: 1, 
           flex: 1,
           
        },

        input: {
            paddingTop: 16, 
            paddingBottom: 12,
            paddingHorizontal: 12,
            height: 65,
        }
    })
    return (
        <View style={styles.inputWrap}>
            <TextInput {...props} style = {[{...props.style},styles.input]} selectionColor  = 'white'/>
        </View>
    );
};

export default AppInput;