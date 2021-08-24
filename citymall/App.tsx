
import React, {useContext} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppProvider, {AppContext} from './AppContext/AppContext';



const App = () => {
  const {setIsAuth} = useContext(AppContext);
  return (
        <AppProvider>
          <Text>Hello World </Text>
        </AppProvider>
  );
};

export default App;
