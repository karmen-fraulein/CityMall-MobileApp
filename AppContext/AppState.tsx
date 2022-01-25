export interface IOffers {
    address: number,
    clientCategory: number,
    contactInfoCityMall: string,
    contactiInfoMerchant: string,
    fromDate: string,
    id: number,
    imgUrl: string,
    merchantUrl: string,
    name: string,
    offerType: number,
    subtitle: string,
    toDate: string,
    txt: string
}

export interface IAppState {
    isAuthenticated: boolean,
    isDarkTheme: boolean,
    clientDetails: any,
    userCardDetails: any,
    userPhoneNumber: string,
    cardDetails: any,
    routeObject: any,
    offersArray: IOffers[] | [],
    singleOffer: IOffers | {},
}


export const AppState: IAppState = {
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