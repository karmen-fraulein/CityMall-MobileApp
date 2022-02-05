import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Colors} from '../../Colors/Colors';
import {useDimension} from '../../Hooks/UseDimension';
import {GoBack, navigate} from '../../Services/NavigationServices';
import AppLayout from '../AppLayout';
import VoucherCardLayout from '../CustomComponents/VoucherCardLayout';
import {Item} from '../../Constants/ShopList';
import Data from '../../Constants/VouchersDummyData';
import AppCheckBox from '../CustomComponents/AppCheckBox';
import Layout from '../Layouts/Layout';
import PlanVisitLayout from '../CustomComponents/PlanVisitLayout';
let hm = require('../../assets/images/H&M.png');
import data from '../../Constants/PlanVisitData';
import WorkingHours from './WorkingHours';




const PlanVisit = () => {
  const {width} = useDimension();
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;

  return (
    <Layout hasBackArrow pageName="დაგეგმე ვიზიტი" onPressBack={GoBack}>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: isDarkTheme ? Colors.black : Colors.white,
          paddingHorizontal: '7%',
        }}>
          {data.map((el: any, i: React.Key) => (
            <PlanVisitLayout key={i} title={el.name} icon={el.icon} Content={el.content}/>
          ))}
        
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.white,
  },
});

export default PlanVisit;
