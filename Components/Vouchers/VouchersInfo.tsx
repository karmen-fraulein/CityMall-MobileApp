import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';
import {navigate} from '../../Services/NavigationServices';
import AppHeader from '../AppHeader';
import AppLayout from '../AppLayout';
import VoucherCardLayout from '../CustomComponents/VoucherCardLayout';
import VouchersButton from '../CustomComponents/VouchersButton';
import ReadMoreCategories from '../ReadMore/ReadMoreCategories';
import ReadMoreItem from '../ReadMore/ReadMoreItem';
import {Item} from '../../Constants/ShopList';
let hm = require('../../assets/images/H&M.png');

const VouchersInfo = () => {
  const {width} = useDimension();
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;


  console.log('item ===>', Item)
  return (
    <AppLayout>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: isDarkTheme ? Colors.black : Colors.white,
          paddingHorizontal: '7%',
        }}>
        <View style={styles.main}>
          <VouchersButton title="ვაუჩერის შეძენა" onPress={() => navigate('BuyVouchers')} />
        </View>
        {/* <ReadMoreItem item={Item} /> */}
        <View style={styles.cardWrapper}>
          <View>
            <VoucherCardLayout
              amount={15}
              percent="%"
              text="ვადა: 15 სექტ - 20 სექტ"
              amountText="რაოდენობა: 2"
              image={require('../../assets/images/H&M.png')}
              more="ვრცლად"
              icon = {require('../../assets/images/Polygon.png')}
            />
          </View>
          <View>
            <VoucherCardLayout
              amount={20}
              percent="%"
              text="ვადა: უვადო"
              amountText="რაოდენობა: 1"
              image={require('../../assets/images/H&M.png')}
              more="ვრცლად"
              icon = {require('../../assets/images/Polygon.png')}
            />
            
          </View>
          <View>
            <VoucherCardLayout
              amount={10}
              percent="%"
              text="ვადა: უვადო"
              amountText="რაოდენობა: 2"
              image={require('../../assets/images/H&M.png')}
              more="ვრცლად"
              icon = {require('../../assets/images/Polygon.png')}
            />
          </View>
        </View>
      </View>
      
     
 
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    top: 88,
    height: 175,
  },
  cardWrapper: {
    height: 445,
    justifyContent: 'space-between',
  },
});

export default VouchersInfo;
