
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { StatusBar } from 'react-native';
import { AppContext } from './AppContext/AppContext';
import AppStack from './Navigation/AppStack';
import { Colors } from './Colors/Colors';
import axios from 'axios';
import AuthService, { IInterceptop } from './Services/AuthService';



const AppIndex = () => {
  const { state, setGlobalState } = useContext(AppContext);
  const { isDarkTheme } = state;

  const [userToken, setUserToken] = useState<string>("");
  const AxiosInterceptor = useRef<IInterceptop[]>([]);

  const RegisterCommonInterceptor = () => {
    let requestInterceptor = axios.interceptors.request.use((config: any) => {
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
    setGlobalState({ isUserAuthorized: false })
  }, [userToken]);

  useEffect(() => {
    //console.log('Developer <--Avtandil Shaburishvili, 08.04.2021--> ')
    AuthService.getToken().then(data => {
      setUserToken(data || "");
    });
  }, [userToken]);

  useEffect(() => {
    AxiosInterceptor.current = [RegisterCommonInterceptor(), AuthService.registerAuthInterceptor(async () => await logOut())];
    return () => {
      AxiosInterceptor.current.forEach(sub => sub.unsubscribe());
    }
  }, [userToken]);

  return (
    <>
      <StatusBar backgroundColor={isDarkTheme ? Colors.black : Colors.white} />
      <AppStack />
    </>
  );
};

export default AppIndex;
