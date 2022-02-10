import React, {useContext} from 'react';
import {View} from 'react-native';
import AppLayout from '../../Components/AppLayout';
import {Colors} from '../../Colors/Colors';
import {AppContext} from '../../AppContext/AppContext';

export default () => {
  const {state} = useContext(AppContext);
  const {isDarkTheme} = state;
  return (
    <AppLayout pageTitle={'ძებნა'}>
      <View
        style={{
          flex: 1,
          backgroundColor: isDarkTheme ? Colors.black : Colors.white,
        }}></View>
    </AppLayout>
  );
};
