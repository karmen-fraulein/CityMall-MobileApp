import React, { createContext, useState } from "react";

export interface IApp {
    isAuthenticated: boolean,
    setIsAuth: (value: boolean) => void
};

const AppState: IApp = {
    isAuthenticated: false,
    setIsAuth: (value: boolean) =>{}
};

export const AppContext = createContext<IApp>(AppState);

const AppProvider: React.FC = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(AppState.isAuthenticated);
    const setIsAuth = (value: boolean) => {
        setIsAuthenticated(value);
    };

    return (
        <AppContext.Provider value ={{
            isAuthenticated,
            setIsAuth
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;