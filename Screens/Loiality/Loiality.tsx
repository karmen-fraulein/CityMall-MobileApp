import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';
import {GoBack, navigate} from '../../Services/NavigationServices';
import Layout from '../../Components/Layouts/Layout';

const Loiality = () => {
  const {width} = useDimension();
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;

  return (
    <Layout hasBackArrow pageName="ლოიალობის შესახებ" onPressBack={GoBack}>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: isDarkTheme ? Colors.black : Colors.white,
          paddingHorizontal: '7%',
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.imageView}>
            <Image
              style={styles.giftCardImg}
              source={require('../../assets/images/loyalty-card.png')}
            />
          </View>
          <View style={{top: 40}}>
            <Text style={styles.text}>
              შეუკვეთე სითი მოლის ლოიალობის ბარათი შენთვის ან შენი საყვარელი
              ადამიანებისთვის - ეს ყველაზე სასურველი საჩუქარია, რითაც შეგიძლიათ
              ადამიანს არჩევანის თავისუფლება მისცეთ შეუკვეთე სითი მოლის
              ლოიალობის ბარათი შენთვის ან შენი საყვარელი ადამიანებისთვის - ეს
              ყველაზე სასურველი საჩუქარია, რითაც შეგიძლიათ ადამიანს არჩევანის
              თავისუფლება მისცეთ. შეუკვეთე სითი მოლის ლოიალობის ბარათი შენთვის
              ან შენი საყვარელი ადამიანებისთვის.
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  imageView: {
    height: 150,
    width: 240,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  giftCardImg: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  text: {
    color: Colors.white,
    fontFamily: 'HM pangram',
    lineHeight: 24,
  },
});

export default Loiality;
