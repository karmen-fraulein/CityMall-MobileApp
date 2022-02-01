import React, {useState, useContext} from 'react';
import {Image, StyleSheet, Text, View, Switch} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';
import {navigate} from '../../Services/NavigationServices';
import AppLayout from '../AppLayout';
import AppSwitch from '../CustomComponents/AppSwitch';
import VoucherCardLayout from '../CustomComponents/VoucherCardLayout';

const AboutUs = () => {
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
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>გვანცა გაბუნია</Text>
        </View>
        <View style={{top: 83, height: 110, justifyContent: 'space-between' }}>
          <View style={styles.desighnView}>
              <View style={styles.iconView}>
              <View style={{width: 30}}>
              <Image source={require('../../assets/images/moon.png')} />
            </View>
            <View>
              <Text style={styles.name}>მუქი დიზაინი</Text>
            </View>
              </View>
            
            <View >
              <AppSwitch />
            </View>
          </View>
          <TouchableOpacity style={styles.iconView} onPress={() => navigate('ProfileInfo')}>
            <View style={{width: 30}}>
            <Image source={require('../../assets/images/user.png')} />
            </View>
            <View>
                <Text style={styles.name}>პროფილის გვერდი</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconView}>
            <View style={{width: 30}}>
            <Image source={require('../../assets/images/lock.png')} />
            </View>
            <View>
                <Text style={styles.name}>პაროლის ცვლილება</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  nameWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: 'HMpangram-Bold',
    textTransform: 'uppercase',
    
  },
  desighnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
 
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

});

export default AboutUs;
