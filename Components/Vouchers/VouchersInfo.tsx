import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';
import {navigate} from '../../Services/NavigationServices';
import AppLayout from '../AppLayout';
import VoucherCardLayout from '../CustomComponents/VoucherCardLayout';
import VouchersButton from '../CustomComponents/VouchersButton';
import  Data  from '../../Constants/VouchersDummyData'
let hm = require('../../assets/images/H&M.png');



const VouchersInfo = () => {
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
        <View style={styles.main}>
          <VouchersButton
            title="ვაუჩერის შეძენა"
            onPress={() => navigate('BuyVouchers')}
          />
        </View>
        <View style={styles.cardWrapper}>
          {Data.map((el : any, i: React.Key) => (
            <View key={i}>
              <VoucherCardLayout
                amount={el.amount}
                percent={el.percent}
                text={el.text}
                amountText={el.amountText}
                image={el.image}
                more={el.more}
                icon={el.icon}
              />
            </View>
          ))}
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
