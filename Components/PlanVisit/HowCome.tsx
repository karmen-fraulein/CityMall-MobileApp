import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';

const HowCome = () => {
  const {width} = useDimension();
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;

  return (
    <View>
      <View style={styles.row}>
          <View style={styles.width}>
          <Image source={require('../../assets/images/train.png')} />
          </View>
          
          <View>
              <Text style={styles.titleTxt}>ავტობუსი </Text>
              <Text style={styles.detailTxt}>140, 34, 160, 24, 12, 110</Text>
          </View>
      </View>
      <View style={styles.row}>
          <View style={styles.width}>
          <Image source={require('../../assets/images/bus.png')} />
          </View>
      
      <View>
              <Text style={styles.titleTxt}>სამარშრუტო ტაქსი  </Text>
              <Text style={styles.detailTxt}>51, 64, 111, 62, 98, 255</Text>
          </View>
      </View>
      <View style={styles.row}>
          <View style={styles.width}>
          <Image source={require('../../assets/images/metro.png')} />
          </View>
      
      <View>
              <Text style={styles.titleTxt}>მეტრო </Text>
              <Text style={styles.detailTxt}>ვაჟა-ფშაველა</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
       
        
    },
    titleTxt: {
        color: Colors.white,
        fontSize: 12,
        fontFamily: 'HMpangram-Bold',
        textTransform: 'uppercase',
        lineHeight: 20
    },
    detailTxt: {
        color: Colors.white,
        fontSize: 12,
        fontFamily: 'HM pangram',
    },
    width: {
        width: 60,
    }
});

export default HowCome;
