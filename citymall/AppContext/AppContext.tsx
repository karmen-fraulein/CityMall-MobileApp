import React, { createContext, useState } from "react";

export interface IApp {
    isAuthenticated: boolean,
    setIsAuth: (value: boolean) => void,
    isDarkTheme: boolean,
    setAppTheme: (value: boolean) => void,
    clientDetails: any,
    setDetails: (data: any) => void,
    userCardDetails: any,
    setCardDetails: (value: string) => void,
    userPhoneNumber: string,
    setPhoneNumber: (value: string) => void,
    cardDetails: any,
    
    fillCardDetails: (data: any) => void,
};

const AppState: IApp = {
    isAuthenticated: false,
    setIsAuth: (value: boolean) => { },
    isDarkTheme: true,
    setAppTheme: (value: boolean) => { },
    clientDetails: {},
    setDetails: (data: any) => { },
    userCardDetails: {},
    setCardDetails: (data: any) => { },
    userPhoneNumber: '',
    setPhoneNumber: (value: string) => { },
    cardDetails: {},
    fillCardDetails: (data: any) => { }
};

export const AppContext = createContext<IApp>(AppState);

const AppProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(AppState.isAuthenticated);
    const [isDarkTheme, setDarkTheme] = useState<boolean>(AppState.isDarkTheme);
    const [clientDetails, setClientDetails] = useState<any>(AppState.clientDetails);
    const [userCardDetails, setUserCardDetails] = useState<string>(AppState.userCardDetails);
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>(AppState.userPhoneNumber);
    const [cardDetails, setCDetails ] = useState(AppState.cardDetails)

    const setIsAuth = (value: boolean) => {
        setIsAuthenticated(value);
    };

    const setAppTheme = (value: boolean) => {
        setDarkTheme(value);
    };

    const setDetails = (data: any) => {
        setClientDetails(data);
    };

    const setCardDetails = (data: any) => {
        setUserCardDetails({ ...data });
    };

    const setPhoneNumber = (value: string) => {
        setUserPhoneNumber(value);
    };

    const fillCardDetails = (data: any) => {
        setCDetails(data);
    }

    return (
        <AppContext.Provider value={{
            isAuthenticated,
            setIsAuth,
            isDarkTheme,
            setAppTheme,
            clientDetails,
            setDetails,
            userCardDetails,
            setCardDetails,
            userPhoneNumber,
            setPhoneNumber,
            cardDetails,
            fillCardDetails
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;