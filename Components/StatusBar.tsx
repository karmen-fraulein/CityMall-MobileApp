import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppContext} from '../AppContext/AppContext';
import {Colors} from '../Colors/Colors';
import {useDimension} from '../Hooks/UseDimension';

const data = {
  name: 'ცისანა',
  surname: 'თოდრია',
  ballance: null,
  points: 120000,
  status: 'სილვერი',
  category: 2,
  categoryStatus: 1,
  categoryPointInfo: [
    {
      point: 0,
      pointsLeft: 0,
      category: 1,
    },
    {
      point: 40000,
      pointsLeft: 0,
      category: 2,
    },
    {
      point: 90000,
      pointsLeft: 89900,
      category: 3,
    },
    {
      point: 150000,
      pointsLeft: 149900,
      category: 4,
    },
  ],
};

const StatusBar = () => {
  const {state} = useContext(AppContext);
  const [pointArray, setPointArray] = useState<Array<number>>([]);
  const {isDarkTheme} = state;
  const {width} = useDimension();

  const lineWidth = width / 2 - 70 - (width * 15) / 100;
  const curPoints = data.points; // ეს არის სერვისის მიერ დაბრუნებული მნიშვნელობა

  useEffect(() => {
    setPointArray([]);
    data.categoryPointInfo.map((point, index) => {
      if (index !== 0) {
        setPointArray(prev => [...(prev || []), point.point]);
      }
    });
  }, [data.categoryPointInfo]);

  const _progressValue = (value: number, points: number) => {
    const mod = points / lineWidth;
    return value / mod;
  };

  const getMax = (value: number, mod: number) => {
    if (value < lineWidth) {
        return value;
      } else if (value === lineWidth) {
        return lineWidth;
      } else if (value > lineWidth) {
        return lineWidth;
      }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[styles.round, {backgroundColor: Colors.bgColor}]}></View>
        </View>

        <View style={{position: 'relative'}}>
          <View
            style={[
              styles.line,
              {width: lineWidth, backgroundColor: Colors.silver},
            ]}
          />
          <View
            style={[
              styles.line,
              {
                width: getMax(_progressValue(curPoints, pointArray[0]), 1),
                backgroundColor: Colors.blue,
                position: 'absolute',
              },
            ]}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={[styles.round, {backgroundColor: Colors.silver}]}></View>
        </View>

        <View style={{position: 'relative'}}>
          <View
            style={[
              styles.line,
              {width: lineWidth, backgroundColor: Colors.silver},
            ]}
          />
          <View
            style={[
              styles.line,
              {
                width: getMax(
                  _progressValue(
                    curPoints - pointArray[0],
                    pointArray[1] - pointArray[0],
                  ),
                  2,
                ),
                backgroundColor: Colors.red,
                position: 'absolute',
              },
            ]}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={[styles.round, {backgroundColor: Colors.gold}]}></View>
          <View style={{position: 'relative'}}>
            <View
              style={[
                styles.line,
                {width: lineWidth, backgroundColor: Colors.gold},
              ]}
            />
            <View
              style={[
                styles.line,
                {
                  width: getMax(
                    _progressValue(
                      curPoints - pointArray[1],
                      pointArray[2] - pointArray[1],
                    ),
                    3,
                  ),
                  backgroundColor: 'green',
                  position: 'absolute',
                },
              ]}
            />
          </View>
        </View>
        <View style={[styles.round, {backgroundColor: Colors.platinum}]}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '45%',
          }}>
          <Text
            style={{
              color: isDarkTheme ? Colors.white : Colors.black,
              fontSize: 10,
            }}>
            სტანდარტი
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.white : Colors.black,
              fontSize: 10,
            }}>
            ვერცხლი
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '40%',
          }}>
          <Text
            style={{
              color: isDarkTheme ? Colors.white : Colors.black,
              fontSize: 10,
            }}>
            ოქრო
          </Text>
          <Text
            style={{
              color: isDarkTheme ? Colors.white : Colors.black,
              fontSize: 10,
            }}>
            პლატინა
          </Text>
        </View>
      </View>
    </>
  );
};
export default StatusBar;

const styles = StyleSheet.create({
  round: {
    borderRadius: 15,
    width: 30,
    height: 30,
  },

  line: {
    height: 4,
  },
});
