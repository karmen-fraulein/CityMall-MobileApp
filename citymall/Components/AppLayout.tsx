import React from 'react';
import { View } from 'react-native';
import AppNavigator from '../Navigation/AppNavitagor';
import AppHeader from './AppHeader';

const AppLayout: React.FC = (props) =>  <AppNavigator><><AppHeader/>{props.children}</></AppNavigator>

export default AppLayout;