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
import AppCheckBox from '../CustomComponents/AppCheckBox';
import AppButton from '../CustomComponents/AppButton';
let hm = require('../../assets/images/H&M.png');

const BuyVouchers = () => {
  const {width} = useDimension();
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;

  console.log('item ===>', Item);
  return (
    <AppLayout>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: isDarkTheme ? Colors.black : Colors.white,
          paddingHorizontal: '7%',
        }}>
        <View style={styles.cardWrapper}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <VoucherCardLayout
                  amount={15}
                  percent="%"
                  text="ვადა: 15 სექტ - 20 სექტ"
                  amountText="რაოდენობა: 2"
                  image={require('../../assets/images/H&M.png')}
                  more="ვრცლად"
                  icon={require('../../assets/images/Polygon.png')}
                />
                <View></View>
              </View>
              <View style={{paddingLeft: 10}}>
                <AppCheckBox checked={false} isRequired={false} name={''} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 7,
                paddingBottom: 26,
              }}>
              <Text style={{color: Colors.white}}>ფასი: 1000 </Text>

              <Image source={require('../../assets/images/Star.png')} />
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <VoucherCardLayout
                  amount={20}
                  percent="%"
                  text="ვადა: უვადო"
                  amountText="რაოდენობა: 1"
                  image={require('../../assets/images/H&M.png')}
                  more="ვრცლად"
                  icon={require('../../assets/images/Polygon.png')}
                />
              </View>

              <View style={{paddingLeft: 10}}>
                <AppCheckBox checked={false} isRequired={false} name={''} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 7,
                paddingBottom: 26,
              }}>
              <Text style={{color: Colors.white}}>ფასი: 1000 </Text>
              <Image source={require('../../assets/images/Star.png')} />
            </View>
          </View>

          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View>
                <VoucherCardLayout
                  amount={10}
                  percent="%"
                  text="ვადა: უვადო"
                  amountText="რაოდენობა: 2"
                  image={require('../../assets/images/H&M.png')}
                  more="ვრცლად"
                  icon={require('../../assets/images/Polygon.png')}
                />
              </View>
              <View style={{paddingLeft: 10}}>
                <AppCheckBox checked={true} isRequired={false} name={''} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 7,
                paddingBottom: 26,
              }}>
              <Text style={{color: Colors.white}}>ფასი: 1000 </Text>
              <Image source={require('../../assets/images/Star.png')} />
            </View>
          </View>
          <AppButton onPress={() =>{}} title={''} btnStyle={undefined} />
        </View>
        
      </View>
      
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    top: 100,
    height: 445,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default BuyVouchers;
