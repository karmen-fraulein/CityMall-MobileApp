import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  NativeScrollEvent,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';
import { AppContext } from '../../AppContext/AppContext';
import AppLayout from '../../Components/AppLayout';
import { Colors } from '../../Colors/Colors';
import PaginationDots from '../../Components/PaginationDots';
import { ChunkArrays as ChunkArrays } from '../../Utils/utils';
import RenderCategories from '../../Components/CategoriesFilter/RenderCategories';
import {
  RouteProp,
  useRoute
} from '@react-navigation/native';
import ShopDetailBox from '../../Components/ShopDetailBox';
import {
  GetMainCategories,
  GetSubCategories,
  IMainCategories
} from '../../Services/Api/CategoryApi';
import {
  GetMerchants,
  IMerchant
} from '../../Services/Api/ShopsApi';


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

type RouteParamList = {
  params: {
    id: number,
    routeId: number
  }
}


const Stores: React.FC = () => {
  const [isFilterCollapsed, setIsFilterCollapsed] = useState<boolean>(true);
  const [secStep, setSectStep] = useState<number>(0);
  const carouselRef = createRef<ScrollView>();
  const { state } = useContext(AppContext);
  const { isDarkTheme, objectTypeId, subCategoryArray, categoryArray } = state;
  const itemChunk = 4;

  let isEndFetching = false;
  let startFetching = false;

  const routeParams = useRoute<RouteProp<RouteParamList, 'params'>>();


  const [mainCategories, setMainCategories] = useState<IMainCategories[]>();
  const [subCategories, setSubCategories] = useState<IServiceSubCategories[]>([])
  const [merchants, setMerchants] = useState<IMerchant[]>([]);
  const [isFetchingData, setIsFetchingData] = useState<boolean>(false);
  const [pagPage, setPagPage] = useState<number>(1);

  useEffect(() => {
    handleGetMainCategories()
  }, [objectTypeId]);

  useEffect(() => {
    handleGetSubCategories();
  }, [categoryArray.length]);

  useEffect(() => {
    if(merchants.length <= 0) {
      return;
    } else {
      setPagPage(1);
      isEndFetching = false;
    };
   
  }, [subCategoryArray.length, categoryArray.length, objectTypeId, routeParams.params.routeId, routeParams.params.id])

  useEffect(() => {
    handleGetMerchants();
  }, [objectTypeId, subCategoryArray.length, categoryArray.length, routeParams.params.routeId, routeParams.params.id, pagPage]);

  useEffect(() => {
    if (isFetchingData) {
      setPagPage(pagPage + 1);
    };

  }, [isFetchingData])



  const handleGetMainCategories = () => {
    GetMainCategories([objectTypeId])
      .then(res => {
        setMainCategories(res.data);
      })
      .catch(e => {
        console.log(JSON.parse(JSON.stringify(e.response)))
      })
  };

  const handleGetSubCategories = () => {
    GetSubCategories(categoryArray)
      .then(res => {
        setSubCategories(res.data);
      })
      .catch(e => {
        console.log(JSON.parse(JSON.stringify(e.response)))
      })
  };

  const handleGetMerchants = () => {
    let isPremium;
    if (routeParams.params.id === 1) {
      isPremium = false;
    } else {
      isPremium = true;
    };
    if(startFetching) return;
    startFetching = true;
    GetMerchants(routeParams.params.routeId, objectTypeId, isPremium, categoryArray, subCategoryArray, pagPage,)
      .then(res => {
        let tempMerchants = res.data.data;
        if (tempMerchants.length < 16) {
          isEndFetching = true;
        };
        if (isFetchingData) {
          setMerchants(prevState => {
            return [...prevState, ...tempMerchants]
          });
        } else {
          setMerchants(res.data.data);
        };
        setIsFetchingData(false);
        startFetching = false;
      })
      .catch(e => {
        console.log(JSON.parse(JSON.stringify(e.response)));
        startFetching = false;
      })
  };






  const onChangeSectionStep = (nativeEvent: NativeScrollEvent) => {
    if (!isFilterCollapsed) return;
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );

      setSectStep(slide);
    };
    if (isFetchingData || isEndFetching) return;

    let scrollPoint = Math.floor(nativeEvent.contentOffset.x + nativeEvent.layoutMeasurement.width);
    let scrollContentSize = Math.floor(nativeEvent.contentSize.width)
    if (scrollPoint >= scrollContentSize - 20) {
      setIsFetchingData(true);
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
    backgroundColor: isDarkTheme ? Colors.black : Colors.white,
  };

  const textStyle = {
    color: isDarkTheme ? Colors.white : Colors.black,
  };

  const itemStyle = {
    width: Dimensions.get('screen').width,
  };

  const chunkedData = ChunkArrays<IMerchant>(merchants!, itemChunk);
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
            isCategory
            data={mainCategories!}
            title="კატეგორიები" />

          <RenderCategories
            data={subCategories}
            title="ქვეკატეგორიები"
            style={styles.subCategories}
            isCategory={false}
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

  subCategories: {
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
