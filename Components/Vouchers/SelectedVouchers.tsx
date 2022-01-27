import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';
import {navigate} from '../../Services/NavigationServices';
import AppLayout from '../AppLayout';
import VoucherCardLayout from '../CustomComponents/VoucherCardLayout';
import OneTimeCode from '../OneTimeCode';

let hm = require('../../assets/images/H&M.png');

const SelectedVouchers = () => {
  const {width} = useDimension();
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;

  return (
    <AppLayout>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: isDarkTheme ? Colors.black : Colors.white,
          paddingHorizontal: '7%',
        }}>
        <View style={styles.cardWrapper}>
          <View style={{height: 70}}>
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
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 7,
                paddingBottom: 26,
              }}>
              <Text style={{color: Colors.white, fontFamily: 'HMpangram-Bold'}}>
                ფასი: 1000{' '}
              </Text>

              <Image source={require('../../assets/images/Star.png')} />
            </View>
            <View>
            <Text style={{color: Colors.white, fontFamily: 'HM pangram'}}>
              ვერიფიკაციისთვის საჭირო სმს გამოგზავნილია
            </Text>
          </View>
          </View>
          
          </View>
          <View style={{flex: 1}}>
          <TouchableOpacity style={styles.btnStyle} onPress={() => navigate('VouchersDone')}>
            <Text style={styles.btnText}>დადასტურება</Text>
          </TouchableOpacity>
          </View>
          
        
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 3,
    top: 100,
    height: 445,
  },
  btnStyle: {
    top: 15,
    width: 325,
    height: 66,
    borderRadius: 50,
    backgroundColor: Colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'HMpangram-Bold',
    textTransform: 'uppercase',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.white,
  },
});

export default SelectedVouchers;
