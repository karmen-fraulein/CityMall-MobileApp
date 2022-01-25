import React, {createRef, useContext, useEffect, useRef, useState} from 'react';
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
import {AppContext} from '../../AppContext/AppContext';
import AppLayout from '../../Components/AppLayout';
import {Colors} from '../../Colors/Colors';
import PaginationDots from '../../Components/PaginationDots';
import {ChunckArrays} from '../../Utils/utils';
import PromotionBox from '../../Components/PromotionBox';

const categories: Array<string> = [
  'ტანსცმელი',
  'ფეხსაცმელი',
  'აქსესუარები',
  'პარფიუმერია',
  'ტანსცმელი2',
  'ფეხსაცმელი2',
  'აქსესუარები2',
  'პარფიუმერია2',
  'ტანსცმელი3',
  'ფეხსაცმელი3',
  'აქსესუარები3',
  'პარფიუმერია3',
];

const subCategories: Array<string> = [
  'ქალის',
  'კაცის',
  'ბავშვის',
  'გეის',
  'ტრანსის',
  'რაღაცის',
];

interface IData {
  id: number;
  imgUrl: string;
  name: string;
  txt: string;
  subtitle: string;
}

const filteredeData: IData[] = [
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
  data?: Array<string>;
  style?: StyleProp<ViewStyle>;
  title: string;
}

const RenderCategoryes: React.FC<ICatsProps> = props => {
  const [catStep, setCatStep] = useState<number>(0);
  const carouselRef = createRef<ScrollView>();
  const {isDarkTheme} = useContext(AppContext);

  const onChangeCategoriesSectionStep = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );

      setCatStep(slide);
    }
  };

  const textStyle = {
    color: !isDarkTheme ? Colors.white : Colors.black,
  };
  const borderStyle = {
    borderColor: !isDarkTheme ? Colors.white : Colors.black,
  };
  return (
    <View style={[styles.catView, props.style]}>
      <View style={styles.catHeader}>
        <Text style={[styles.catTitle, textStyle]}>{props.title}</Text>
        <PaginationDots
          length={
            props.data?.length
              ? props.data?.length % 3 === 0
                ? props.data?.length / 3
                : Math.ceil(props.data?.length / 3)
              : 1
          }
          step={catStep}
        />
      </View>
      <ScrollView
        style={styles.scrollerStyle}
        contentContainerStyle={styles.scrollContainer}
        ref={carouselRef}
        onScroll={({nativeEvent}) => onChangeCategoriesSectionStep(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        horizontal>
        {props.data?.map((category: string) => (
          <View key={category} style={[styles.catItem, borderStyle]}>
            <Text style={[styles.catItemTitle, textStyle]}>{category}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const Stores: React.FC = () => {
  const [isFilterCollapsed, setIsFilterCollapsed] = useState<boolean>(true);
  const [secStep, setSectStep] = useState<number>(0);
  const carouselRef = createRef<ScrollView>();
  const {isDarkTheme} = useContext(AppContext);
  const itemChunk = 4;

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

  const collapsableHeight = {
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
  const chunkedData = ChunckArrays<IData>(filteredeData, itemChunk);
  const fillSpace = (ln: number) => {
    if ((itemChunk - ln) === 0) return null;
    return Array.from(Array(itemChunk - ln).keys()).map(element => (
      <View style={styles.emptyItem} key={`_${element}`}></View>
    ));
  };
  return (
    <AppLayout>
      <View style={[styles.container, containerStyle]}>
        <Animated.View style={[styles.collabsable, collapsableHeight]}>
          <Text style={[styles.headerText, textStyle]}>
            <Text style={styles.baseText}>მაღაზიები</Text> | სითი მოლი საბურთალო
          </Text>

          <RenderCategoryes data={categories} title="კატეგორიები" />

          <RenderCategoryes
            data={subCategories}
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
            onScroll={({nativeEvent}) => onChangeSectionStep(nativeEvent)}
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
  collabsable: {
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
  catView: {marginTop: 35},
  catHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '7%',
  },
  catTitle: {
    fontFamily: 'HMpangram-Bold',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '700',
  },
  catItem: {
    borderWidth: 1,
    borderRadius: 25,
    marginRight: 17,
    paddingVertical: 8,
    paddingHorizontal: 11,
  },
  catItemTitle: {
    fontFamily: 'HMpangram-Bold',
    fontSize: 14,
    lineHeight: 17,
  },
  subCategoryes: {
    marginTop: 50,
  },
  scrollerStyle: {
    marginTop: 16,
  },
  scrollContainer: {
    paddingLeft: '7%',
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
