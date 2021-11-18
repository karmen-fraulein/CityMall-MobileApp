import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';


const AppInput = (props: any) => {
    const {isDarkTheme} = useContext(AppContext)
    const styles = StyleSheet.create({
        inputWrap: {
            position: 'relative', 
            borderColor: isDarkTheme? Colors.white : Colors.black, 
            borderBottomWidth: 1, 
            width: '100%', 
            
            justifyContent: 'flex-end', 
            marginLeft: 5,
            paddingTop: 16,
             paddingBottom: 10,
             paddingHorizontal: 10, 
        }
    })
    return (
        <View style={styles.inputWrap}>
            <TextInput {...props} style = {[{...props.style},{padding: 12, height: 50}]} selectionColor  = 'white'/>
        </View>
    );
};

export default AppInput;