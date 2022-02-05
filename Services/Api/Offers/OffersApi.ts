import axios from  'axios';
import envs from '../../../config/env';


export interface IOffer {
    id: number,
    fromDate: Date,
    toDate: Date,
    clientCategory: number,
    name: string,
    txt: string,
    imgUrl: string,
    contactiInfoMerchant: string,
    contactInfoCityMall: string,
    merchantUrl: string | null,
    offerType: number,
    subtitle: string,
    address: number[]
}


interface IOffersResponse {
    data: IOffer[]
    currentPage: number,
    pageCount: number,
    pageSize: number,
    rowCount: number,
}




export const GetOffers = async (address: number | undefined) => {
    let queryParams = '';
    if(address) {
        queryParams =  `?Addres=${address}`
    };

    console.log('GetOffers ====>', `${envs.API_URL}/api/Offers/GetOffers${queryParams}`)
    return await axios.get<IOffersResponse>(`${envs.API_URL}/api/Offers/GetOffers${queryParams}`);
};


export const GetNews = async (address: number | undefined) => {
    let queryParams = '';
    if(address) {
        queryParams =  `?Addres=${address}`
    };

    console.log('GetNews ====>', `${envs.API_URL}/api/Offers/GetNews${queryParams}`)
    return await axios.get<IOffersResponse>(`${envs.API_URL}/api/Offers/GetNews${queryParams}`);
};
