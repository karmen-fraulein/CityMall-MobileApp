import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../Colors/Colors';

import {Item} from '../../Constants/ShopList';

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
  
  // console.log(Item);

  return (
    <>
    <View style={{paddingBottom: 25}}>
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
                  <Text style={{color: Colors.white, fontSize: 35,fontFamily: 'HMpangram-Bold',}}>
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
    </View>
      
      {isMore &&
        Item.map((el: any, i: React.Key) => (
          <View key={i} style={{justifyContent: 'space-between',
          paddingVertical: 5}} >
            <View style={{flexDirection: 'row', alignItems: 'center', top: -15}}>
            <Image source={el.image} />
            <Text
              style={{
                color: Colors.white,
                fontFamily: 'HMpangram-Bold',
                textTransform: 'uppercase',
                fontSize: 8,
                paddingHorizontal: 10,
              }}>
              {el.name} {el.address}
            </Text>
          </View>
            </View>

        ))}

      
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    width: 342,
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
