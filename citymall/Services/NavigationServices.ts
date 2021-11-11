// RootNavigation.js
import * as React from 'react';
import { createNavigationContainerRef, DrawerActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

// export function navigate(name: any, params: any) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }

export function GoBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

export function toggleDrawer () {
  if (navigationRef.isReady()) {
    
    navigationRef.dispatch(DrawerActions.openDrawer())
  } 
}

// add other navigation functions that you need and export them