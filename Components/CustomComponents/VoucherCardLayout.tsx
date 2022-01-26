import React, {ElementType, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../Colors/Colors';
import ReadMoreItem from '../ReadMore/ReadMoreItem';

import {Item, Location} from '../../Constants/ShopList';

export interface IAppBtnProps {
  text: string;
  amountText: string;
  amount: number;
  percent: string;
  image: ImageSourcePropType;
  more: string;
  icon: ImageSourcePropType;
  
}

const VoucherCardLayout: React.FC<IAppBtnProps> = props => {
  const {text, amountText, amount, percent, image, more, icon} = props;
  const [isMore, setIsMore] = useState<boolean>(false);
  //const styles = StyleSheet.create({});
  // console.log('image ==>', image);
  // console.log('image ==>', icon);

  return (
    <>
      <View style={styles.main}>
        <View style={styles.cardWrapper}>
          <View style={styles.cardView}>
            <View>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 90,
                  fontFamily: 'HMpangram-Bold',
                }}>
                {amount}
              </Text>
            </View>
            <View>
              <View>
                <View>
                  <Text style={{color: Colors.white, fontSize: 35}}>
                    {percent}
                  </Text>
                </View>

                <Image source={image} style={{width: 29.23, height: 29.23}} />
              </View>
            </View>
          </View>
          <View style={{width: '40%'}}>
            <Text
              style={{
                color: Colors.btnGrey,
                fontSize: 10,
                bottom: 15,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
              }}>
              {text}
            </Text>
            <Text
              style={{
                color: Colors.btnGrey,
                fontSize: 10,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
              }}>
              {amountText}
            </Text>
            <TouchableOpacity
              onPress={() => setIsMore(!isMore)}
              style={{top: 20, flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 10,
                  fontFamily: 'HMpangram-Bold',
                  textTransform: 'uppercase',
                }}>
                {more}
              </Text>
              <Image
                source={icon}
                style={
                  isMore
                    ? {
                        width: 5,
                        height: 5,
                        left: 5,
                        transform: [{rotate: '90deg'}],
                      }
                    : {width: 5, height: 5, left: 5}
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isMore && (
        <View
          style={{
            minHeight: 330,
            justifyContent: 'space-between',
            paddingVertical: 17,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Item[0].image} />
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
                fontSize: 8,
                paddingHorizontal: 10,
              }}>
              {Item[0].name} {Item[0].address1}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Item[0].image} />
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
                fontSize: 8,
                paddingHorizontal: 10,
              }}>
              {Item[0].name} {Item[0].address2}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Item[2].image} />
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
                fontSize: 8,
                paddingHorizontal: 10,
              }}>
              {Item[2].name} {Item[2].address}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Item[3].image} />
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
                fontSize: 8,
                paddingHorizontal: 10,
              }}>
              {Item[3].name} {Item[3].address}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Item[4].image} />
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
                fontSize: 8,
                paddingHorizontal: 10,
              }}>
              {Item[4].name} {Item[4].address}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Item[5].image} />
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
                fontSize: 8,
                paddingHorizontal: 10,
              }}>
              {Item[5].name} {Item[5].address}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    maxWidth: 342,
    height: 125,
    borderRadius: 5,
    borderColor: Colors.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
});
export default VoucherCardLayout;
