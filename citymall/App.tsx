
import React, {useContext, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppProvider, {AppContext} from './AppContext/AppContext';
import HomeScreen from './Screens/HomeScreen';



const App = () => {
  const {setIsAuth} = useContext(AppContext);

  
  return (
        <AppProvider>
          <HomeScreen/>
        </AppProvider>
  );
};

export default App;
