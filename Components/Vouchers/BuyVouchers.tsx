import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import { Colors } from '../../Colors/Colors';
import { useDimension } from '../../Hooks/UseDimension';
import { GoBack, navigate } from '../../Services/NavigationServices';
import VoucherCardLayout from '../CustomComponents/VoucherCardLayout';
import Data from '../../Constants/VouchersDummyData'
import Layout from '../Layouts/Layout';

const BuyVouchers = () => {
  const { width } = useDimension();
  const { state } = useContext(AppContext);
  const { isDarkTheme } = state;

  return (
    <Layout
      hasBackArrow
      onPressBack={GoBack}
      hideArrows
      pageName='ვაუჩერების შეძენა'
      >
      <View style={styles.mainContainer}>
        <View style={styles.cardWrapper}>
              {Data.map((el: any, i: React.Key) => (
                  <VoucherCardLayout key={i}
                    item={el}
                  />
              ))}
          <TouchableOpacity style={styles.btnStyle} onPress={() => navigate('SelectedVouchers')} >
            <Text style={styles.btnText}>შეძენა</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: '7%',
    flex: 1
  },

  cardWrapper: {
    flex: 1,
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
  },

 
});

export default BuyVouchers;
