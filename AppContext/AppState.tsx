import {IOffer} from '../Services/Api/OffersApi';
import { IMerchant } from '../Services/Api/ShopsApi';


export interface IAppState {
    isAuthenticated: boolean,
    isDarkTheme: boolean,
    clientDetails: any,
    userCardDetails: any,
    userPhoneNumber: string,
    cardDetails: any,
    routeObject: any,
    offersArray: IOffer[] | [],
    singleOffer: IOffer | {},
    singleMerchant: IMerchant | {},
    categoryArray: number[] | [],
    subCategoryArray: number[] | [],
    objectTypeId: number | undefined,
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
    singleMerchant: {},
    categoryArray: [],
    subCategoryArray: [],
    objectTypeId: undefined
}