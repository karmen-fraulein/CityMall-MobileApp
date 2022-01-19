
import React from 'react';
import AppIndex from './AppIndex';
import { createAppProvider } from './AppContext/AppContext';
import { AppState } from './AppContext/AppState';

const AppProvider = createAppProvider(AppState);

const App = () => {
  
  return (
    <AppProvider>
      <AppIndex />
    </AppProvider>
  );
};

export default App;
