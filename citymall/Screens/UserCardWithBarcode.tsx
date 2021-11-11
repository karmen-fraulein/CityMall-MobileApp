import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import { Colors } from '../Colors/Colors';
import Layout from '../Components/Layouts/Layout';  

interface ICardWithBarcode {
    cardnumber?: string,
    barocdeUrl?: string
}

const UserCardWithBarcode: React.FC = (props:any ) => {
    const styles =StyleSheet.create({
        barCode: {
            height: 65,
            width: 500,
            transform: [{rotate: '90deg'}],
            position: 'absolute',
            top: 325,
            left: -187,
          },
          cardnumber: {
            height: 65,
            width: 565,
            transform: [{rotate: '90deg'}],
            position: 'absolute',
            top: 500,
            left: -157,
            fontSize: 20
          }
          
    })
    const {cardDetails} = useContext(AppContext)
    const {cardnumber, barocdeUrl} = props;
    return (
            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 30, position: 'relative', backgroundColor: Colors.black}} onPress = {()=> props.navigation.navigate('HomeScreen')}>
                <Image source = {require('../assets/images/card-with-barcode.png')} style= {{maxWidth: 344, width: '100%', maxHeight: 705, height: '100%'}} />
                <Image source = {{  uri: 'data:image/png;base64,'+cardDetails.barcode}} style={styles.barCode}/>
                <Text style={styles.cardnumber}>{cardDetails.cardNumber}</Text>
            </TouchableOpacity>  
    );
};

export default UserCardWithBarcode;