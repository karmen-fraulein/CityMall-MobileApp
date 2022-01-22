import React, { createContext, useState } from "react";

const AppContext = createContext<any>({});

const createAppProvider = (initialState: any) => ({children}: any) => {
    const [appState, setAppState] = useState<any>(initialState);
    
    const setGlobalState = (updateValue: any) => {
        setAppState((prevState: any)=>({
            ...prevState,
            ...updateValue
        }));
    };

    return <AppContext.Provider
        value={{
            state: appState,
            setGlobalState,
        }}
    >
        {children}
    </AppContext.Provider>
};

export {AppContext, createAppProvider}