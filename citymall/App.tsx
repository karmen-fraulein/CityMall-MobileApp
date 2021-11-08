
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
import AppStack from './Navigation/AppStack';
import AuthScreen from './Screens/AuthScreen';
import { NavigationContainer } from '@react-navigation/native';



const App = () => {
  const { setIsAuth, isAuthenticated } = useContext(AppContext);
  useEffect(() => {

  }, [isAuthenticated])

  

  return (
    <AppProvider>
      <AppStack/>
    </AppProvider>
  );
};

export default App;
