export interface IAppState {
    isAuthenticated: boolean,
    isDarkTheme: boolean,
    clientDetails: any,
    userCardDetails: any,
    userPhoneNumber: string,
    cardDetails: any,
    routeObject: any,
    offersArray: [],
    singleOffer: any,
}


export const AppState:IAppState = {
    isAuthenticated: false,
    isDarkTheme: true,
    clientDetails: {},
    userCardDetails: {},
    userPhoneNumber: '',
    cardDetails: {},
    routeObject: {},
    offersArray: [],
    singleOffer: {},
}