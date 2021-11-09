import React, { createContext, useState } from "react";

export interface IApp {
    isAuthenticated: boolean,
    setIsAuth: (value: boolean) => void,
    isDarkTheme: boolean,
    setAppTheme: (value: boolean) => void
};

const AppState: IApp = {
    isAuthenticated: false,
    setIsAuth: (value: boolean) => { },
    isDarkTheme: true,
    setAppTheme: (value: boolean) => { }
};

export const AppContext = createContext<IApp>(AppState);

const AppProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(AppState.isAuthenticated);
    const [isDarkTheme, setDarkTheme] = useState<boolean>(AppState.isDarkTheme);

    const setIsAuth = (value: boolean) => {
        setIsAuthenticated(value);
    };

    const setAppTheme = (value: boolean) => {
        setDarkTheme(value);
    }
    return (
        <AppContext.Provider value={{
            isAuthenticated,
            setIsAuth,
            isDarkTheme,
            setAppTheme,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;