
import React, { useContext, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppProvider, { AppContext } from './AppContext/AppContext';
import HomeScreen from './Screens/HomeScreen';
import AppNavigator from './Navigation/AppNavitagor';



const App = () => {
  const { setIsAuth } = useContext(AppContext);


  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
