import React, {useState, useContext} from 'react';
import {Image, StyleSheet, Text, View, Switch} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';
import {GoBack, navigate} from '../../Services/NavigationServices';
import AppLayout from '../../Components/AppLayout';
import AppSwitch from '../../Components/CustomComponents/AppSwitch';
import VoucherCardLayout from '../../Components/CustomComponents/VoucherCardLayout';
import Layout from '../../Components/Layouts/Layout';

const AboutUs = () => {
  const {width} = useDimension();
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;

  return (
    <Layout hasBackArrow pageName="ჩვენ შესახებ" onPressBack={GoBack}>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: isDarkTheme ? Colors.black : Colors.white,
          paddingHorizontal: '7%',
        }}>
        <View style={styles.txtView}>
          <Text style={styles.titleTxt}>სითი მოლი</Text>
          <Text style={styles.infoTxt}>
            ცნობილი ფაქტია, რომ გვერდის წაკითხვად შიგთავსს შეუძლია მკითხველის
            ყურადღება მიიზიდოს და დიზაინის აღქმაში ხელი შეუშალოს. გამოყენებით
            ვღებულობთ იმაზე მეტ-ნაკლებად სწორი გადანაწილების ტექსტს, ვიდრე
            ერთიდაიგივე გამეორებადი სიტყვებია ხოლმე.
          </Text>
        </View>
        <View style={[styles.txtView, {paddingVertical: 30}]}>
          <Text style={styles.contactTitle}>კონტაქტი</Text>
          <View style={{top: 10}}>
            <Text style={styles.bold}>
              ცხელი ხაზი: <Text style={styles.unBold}>+032 220 00 99</Text>
            </Text>
            <Text style={styles.bold}>
              მარკეტინგის დეპარტამენტი:{' '}
              <Text style={styles.unBold}>(+995) 595 393 924 </Text>
            </Text>
            <Text style={styles.bold}>
              გაყიდვების დეპარტამენტი:{' '}
              <Text style={styles.unBold}>(+995) 599 515 672</Text>
            </Text>
          </View>
        </View>
        <View style={{paddingVertical: 30}}>
          <Text style={styles.contactTitle}>მისამართი</Text>
          <View style={{top: 10}}>
            <Text style={styles.addressInfo}>
              სითი მოლი საბურთალო, ვაჟა-ფშაველას №70 სითი მოლი გლდანი, ი.ვეკუას
              №1
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  txtView: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.75,
  },
  titleTxt: {
    color: Colors.white,
    fontSize: 30,
    fontFamily: 'HMpangram-Bold',
    textTransform: 'uppercase',
  },
  infoTxt: {
    paddingVertical: 20,
    color: Colors.white,
    lineHeight: 24,
    fontFamily: 'HM pangram',
  },
  contactTitle: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontFamily: 'HMpangram-Bold',
  },
  bold: {
    color: Colors.white,
    fontFamily: 'HMpangram-Bold',
    fontSize: 12,
    lineHeight: 20,
  },
  unBold: {
    color: Colors.white,
    fontFamily: 'HM pangram',
  },
  addressInfo: {
    color: Colors.white,
    fontFamily: 'HM pangram',
    fontSize: 12,
    lineHeight: 20,
  },
});

export default AboutUs;
