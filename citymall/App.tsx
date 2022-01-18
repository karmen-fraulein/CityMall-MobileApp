
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import AppProvider, { AppContext } from './AppContext/AppContext';
import AppStack from './Navigation/AppStack';
import { Colors } from './Colors/Colors';
import axios from 'axios';
import AuthService, { IInterceptop } from './Services/AuthService';



const App = () => {
  const { setIsAuth, isAuthenticated, isDarkTheme } = useContext(AppContext);

  const [userToken, setUserToken] = useState<string>("");
  const [isInit, setIsInit] = useState<boolean>(false);
  const AxiosInterceptor = useRef<IInterceptop[]>([]);

  const RegisterCommonInterceptor = () => {
    let requestInterceptor = axios.interceptors.request.use((config) => {
      return config;
    });
    let responseInterceptor = axios.interceptors.response.use(
      (response: any) => {
        if (!response.config.objectResponse || response.data.expires_in) {
          return Promise.resolve(response)
        };
        return Promise.resolve(response);
      },
    );
    return {
      unsubscribe: () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      }
    };

  };

  const logOut = useCallback(async () => {
    await AuthService.SignOut();
    setUserToken("");
    setIsAuth(false);
  }, [userToken]);


  useEffect(() => {
    //console.log('Developer <--Avtandil Shaburishvili, 08.04.2021--> ')
    AuthService.getToken().then(data => {
      setUserToken(data || "");
      setIsInit(true)
    })
    
  }, [userToken, isInit]);


  useEffect(() => {
    if(userToken && isInit){
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [userToken, isInit])


  useEffect(() => {
      AxiosInterceptor.current = [RegisterCommonInterceptor(), AuthService.registerAuthInterceptor(async () => await logOut())];
    return () => {
      AxiosInterceptor.current.forEach(sub => sub.unsubscribe());
    }
  }, [userToken]);




  return (
    
    <AppProvider>
        <StatusBar backgroundColor={isDarkTheme ? Colors.black : Colors.white} />
      <AppStack />
    </AppProvider>
  );
};

export default App;
