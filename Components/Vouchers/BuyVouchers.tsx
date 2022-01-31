import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';
import {navigate} from '../../Services/NavigationServices';
import AppLayout from '../AppLayout';
import VoucherCardLayout from '../CustomComponents/VoucherCardLayout';
import {Item} from '../../Constants/ShopList';
import  Data  from '../../Constants/VouchersDummyData'
import AppCheckBox from '../CustomComponents/AppCheckBox';
let hm = require('../../assets/images/H&M.png');

const BuyVouchers = () => {
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
          <View >
            <View >
            {Data.map((el : any, i: React.Key) => (
            <View key={i} >
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
          <TouchableOpacity style={styles.btnStyle} onPress={() => navigate('SelectedVouchers')} >
          <Text style={styles.btnText}>შეძენა</Text>
          </TouchableOpacity>
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
  btnStyle: {
    top: 15,
    width: 325,
        height: 66,
        borderRadius: 50,
        backgroundColor: Colors.darkGrey,
        justifyContent: 'center',
        alignItems: 'center'
  },
  btnText: {
    fontFamily: 'HMpangram-Bold',
        textTransform: 'uppercase',
        fontSize: 14,
        lineHeight: 17,
        color: Colors.white
  }
});

export default BuyVouchers;
