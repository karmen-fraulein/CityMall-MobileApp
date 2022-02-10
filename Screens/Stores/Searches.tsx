import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import AppLayout from '../../Components/AppLayout';
import {Colors} from '../../Colors/Colors';
import {AppContext} from '../../AppContext/AppContext';
import ShopDetailBox from '../../Components/ShopDetailBox';
import {ChunkArrays} from '../../Utils/utils';
import {IMerchant} from '../../Services/Api/ShopsApi';
import axios from 'axios';
import envs from './../../config/env';

export default () => {
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;
  const [merchants, setMerchants] = useState<IMerchant[]>([]);
  const [keyword, setKeyword] = useState<string>();
  const itemChunk = 4;

  const itemStyle = {
    width: Dimensions.get('screen').width,
  };

  useEffect(() => {
    if (!keyword) return;

    axios
      .get(`${envs.API_URL}/api/Mobile/SearchMerchants?keyword=${keyword}`)
      .then(res => {
        setMerchants(res.data);
      });
  }, [keyword]);

  const chunkedData = ChunkArrays<IMerchant>(merchants!, itemChunk);
  const fillSpace = (ln: number) => {
    if (itemChunk - ln === 0) return null;
    return Array.from(Array(itemChunk - ln).keys()).map(element => (
      <View style={styles.emptyItem} key={`_${element}`}></View>
    ));
  };
  return (
    <AppLayout pageTitle={'ძიება'}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: '7%',
          backgroundColor: isDarkTheme ? Colors.black : Colors.white,
          paddingTop: 20,
        }}>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="ძიება"
            placeholderTextColor={'#fff'}
            style={{color: '#fff'}}
            value={keyword}
            onChangeText={e => setKeyword(e)}
          />
          <Image
            source={require('./../../assets/images/icon-search-red.png')}
          />
        </View>
      </View>
      <View>
        <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: 'row'}}>
          {merchants.length > 0 && (
            <ScrollView
              scrollToOverflowEnabled={true}
              style={[styles.dataScroller]}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}>
              {chunkedData.map((data, i) => (
                <View key={i} style={[styles.dataContent, itemStyle]}>
                  {data.map((item, index) => (
                    <ShopDetailBox
                      index={index}
                      data={item}
                      key={item.name! + index}
                      style={styles.dataItem}
                    />
                  ))}

                  {fillSpace(data.length)}
                </View>
              ))}
            </ScrollView>
          )}
        </ScrollView>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  dataContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dataItem: {
    marginBottom: 20,
  },
  dataScroller: {
    marginTop: 20,
  },
  emptyItem: {
    width: 159,
    height: 180,
    margin: 10,
  },
});
