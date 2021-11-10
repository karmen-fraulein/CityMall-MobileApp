import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { AppContext } from '../AppContext/AppContext';
import Layout from '../Components/Layouts/Layout';

interface ICardWithBarcode {
    cardnumber?: string,
    barocdeUrl?: string
}

const UserCardWithBarcode: React.FC<ICardWithBarcode> = (props) => {
    const {userCardDetails} = useContext(AppContext)
    const {cardnumber, barocdeUrl} = props;
    return (
            <View style={{alignItems: 'center', justifyContent: 'center', padding: 30, position: 'relative'}}>
                {/* <Image source = {require('../assets/images/card-with-barcode.png')} style= {{maxWidth: 344, width: '100%', maxHeight: 705, height: '100%'}} />
                <Image source = {require(`${userCardDetails?.barocdeUrl}`)} /> */}

            </View>
    );
};

export default UserCardWithBarcode;