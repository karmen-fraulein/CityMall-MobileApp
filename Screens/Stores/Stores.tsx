import React, { createRef, useContext, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  NativeScrollEvent,
  StyleProp,
  ViewStyle,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import AppLayout from '../../Components/AppLayout';
import { Colors } from '../../Colors/Colors';
import PaginationDots from '../../Components/PaginationDots';
import { ChunckArrays as ChunkArrays } from '../../Utils/utils';
import PromotionBox from '../../Components/PromotionBox';
import ApiServices from '../../Services/ApiServices';
import RenderCategories from '../../Components/CategoriesFilter/RenderCategories';


export interface IServiceCategories {
  id?: number,
  name?: string,
  objectTypeId?: number,
  objectTypeName?: string,
  subCategories: IServiceSubCategories[]
}

export interface IServiceSubCategories {
  id: number,
  name: string
}



interface IData {
  id: number;
  imgUrl: string;
  name: string;
  txt: string;
  subtitle: string;
}

const filteredData: IData[] = [
  {
    id: 1,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 2,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 3,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 4,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 5,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 6,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 7,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 8,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 9,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 10,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
  {
    id: 11,
    imgUrl: 'https://www.payunicard.ge/images/pngImages/Visa-Card.png',
    name: 'GANT',
    subtitle: 'ტანსაცმელი, ფეხსაცმელი, აქ ტანსაცმელი, ფეხსაცმელი, აქ',
    txt: '1',
  },
];

interface ICatsProps {
  data?: IServiceCategories[] | [];
  style?: StyleProp<ViewStyle>;
  title: string;
}

interface ICatsProps2 {
  data?: IServiceCategories[] | [];
  style?: StyleProp<ViewStyle>;
  title: string;
}



const Stores: React.FC = () => {
  const [isFilterCollapsed, setIsFilterCollapsed] = useState<boolean>(true);
  const [secStep, setSectStep] = useState<number>(0);
  const carouselRef = createRef<ScrollView>();
  const { isDarkTheme } = useContext(AppContext);
  const itemChunk = 4;

  const [serviceCategories, setServiceCategories] = useState<IServiceCategories[]>();
  const [serviceSubCategories, setServiceSubCategories] = useState<IServiceSubCategories[]>([])


  const getServiceCategories = () => {
    ApiServices.GetServiceCategories(1).then(res => {
      setServiceCategories(res.data);
    }).catch(e => {
      console.log(e)
    })
  }

  const getServiceSubCategories = () => {
    ApiServices.GetServiceSubCategories([1, 2, 3, 4]).then(res => {
      setServiceSubCategories(res.data)
    }).catch(e => {
      console.log(e)
    })
  }


  useEffect(() => {
    getServiceCategories();
    getServiceSubCategories();
  }, [])




  const onChangeSectionStep = (nativeEvent: NativeScrollEvent) => {
    if (!isFilterCollapsed) return;
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );

      setSectStep(slide);
    }
  };

  const collapseFilters = () => {
    setIsFilterCollapsed(collapsed => !collapsed);
  };

  const animatedIsCollapsed = useRef(
    new Animated.Value(isFilterCollapsed ? 1 : 0),
  );

  useEffect(() => {
    Animated.timing(animatedIsCollapsed.current, {
      toValue: isFilterCollapsed ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFilterCollapsed]);

  const collapsibleHeight = {
    height: animatedIsCollapsed.current.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 266],
    }),
  };

  const containerStyle = {
    backgroundColor: !isDarkTheme ? Colors.black : Colors.white,
  };

  const textStyle = {
    color: !isDarkTheme ? Colors.white : Colors.black,
  };

  const itemStyle = {
    width: Dimensions.get('screen').width,
  };

  const chunkedData = ChunkArrays<IData>(filteredData, itemChunk);
  const fillSpace = (ln: number) => {
    if ((itemChunk - ln) === 0) return null;
    return Array.from(Array(itemChunk - ln).keys()).map(element => (
      <View style={styles.emptyItem} key={`_${element}`}></View>
    ));
  };

  return (
    <AppLayout>
      <View style={[styles.container, containerStyle]}>
        <Animated.View style={[styles.collapsible, collapsibleHeight]}>
          <Text style={[styles.headerText, textStyle]}>
            <Text style={styles.baseText}>მაღაზიები</Text> | სითი მოლი საბურთალო
          </Text>

          <RenderCategories
            data={serviceCategories!}
            title="კატეგორიები" />

          <RenderCategories
            data={serviceSubCategories}
            title="ქვეკატეგორიები"
            style={styles.subCategoryes}
          />

          <Image
            source={require('./../../assets/images/gradient-line.png')}
            style={styles.line}
          />
        </Animated.View>
        <TouchableOpacity
          style={styles.collapseButton}
          onPress={collapseFilters}>
          <Image
            source={
              isFilterCollapsed
                ? require('./../../assets/images/icon-collapse-up.png')
                : require('./../../assets/images/icon-collapse-down.png')
            }
            style={styles.sollapseIcon}
          />
        </TouchableOpacity>

        {isFilterCollapsed && (
          <PaginationDots
            length={chunkedData?.length}
            step={secStep}
            style={styles.dataPagination}
          />
        )}
        <ScrollView>
          <ScrollView
            style={styles.dataScroller}
            ref={carouselRef}
            onScroll={({ nativeEvent }) => onChangeSectionStep(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            horizontal={isFilterCollapsed}>
            {chunkedData.map(data => (
              <View key={data[0].id} style={[styles.dataContent, itemStyle]}>
                {data.map((item, index) => (
                  <PromotionBox
                    index={index}
                    data={item}
                    key={item.id + index}
                    style={styles.dataItem}
                  />
                ))}
                {fillSpace(data.length)}
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  collapsible: {
    overflow: 'hidden',
  },
  headerText: {
    fontFamily: 'HMpangram-Bold',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
  baseText: {
    fontWeight: '700',
  },

  subCategoryes: {
    marginTop: 50,
  },

  line: {
    width: '100%',
    marginTop: 22,
  },
  collapseButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sollapseIcon: {
    marginVertical: 14,
  },
  dataContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dataItem: {
    marginBottom: 20,
  },
  dataPagination: {
    marginRight: '7%',
    alignSelf: 'flex-end',
    marginBottom: 9,
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

export default Stores;
