import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';

const WorkingHours = () => {
  const {width} = useDimension();
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;

  return (
    <View>
      <Text style={styles.text}>
        მისამართი: <Text style={styles.subTxt}>ვაჟა-ფშაველას N70 </Text>
      </Text>
      <Text style={styles.text}>
        სამუშაო საათები: <Text style={styles.subTxt}>10:00-22:00</Text>
      </Text>
      <Text style={styles.text}>
        ტელეფონი: <Text style={styles.subTxt}>+995 595 355 033</Text>
      </Text>
      <View style={styles.iconView}>
        <Text style={styles.text}>სოც. სქელი:</Text>
        <Image source={require('../../assets/images/facebook.png')} />
        <Image source={require('../../assets/images/insta.png')} />
        <Image source={require('../../assets/images/twiteer.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: 'HMpangram-Bold',
    lineHeight: 23,
  },
  subTxt: {
    fontFamily: 'HM pangram',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 150,
  },
});

export default WorkingHours;
