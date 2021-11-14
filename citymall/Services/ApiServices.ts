import axios from 'axios';
import envs from '../config/env';


export interface IResonseError {
    errorDesc: string,
    errorCode: string
};



interface IBarcodeResponseData {
    base64Data: string
}
interface IBarcodeResponse {
    data?: IBarcodeResponseData,
    error?: IResonseError
}

interface IMailOtpRequest {
    mail: string
}

interface ICheckMailOtpRequest {
    email: string,
    otp: string
}

interface IAddVirtualCardRequest {
    personCode: string,
    birthDate: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    address: string | number,
    sex: number,
    mailOtp: string
}

export interface IDisctrictsRespone {
    id: number,
    name: string
}

class ApiServices {
    GetClientCards = async () => {
        return await axios.get(`${envs.API_URL}/api/Mobile/GetCientCards`);
    };

    GenerateBarcode = async (card: string) => {
        return await axios.get<IBarcodeResponseData>(`${envs.API_URL}/api/Mobile/GenerateBarcode?input=${card}`);
    };

    SendMailOtp = async (data: IMailOtpRequest) => {
        return await axios.post(`${envs.API_URL}/api/Otp/SendMailOtp`, data);
    };

    CheckMailOtp = async (data: ICheckMailOtpRequest) => {
        return await axios.post(`${envs.API_URL}/api/Otp/CheckMailOtp`, data);
    };

    AddVirtualCard = async (data: IAddVirtualCardRequest) => {
        return await axios.post(`${envs.API_URL}/api/Clients/AddVirtCard`, data);
    };

    GetDistricts = async() => {
        return await axios.get<IDisctrictsRespone>(`${envs.API_URL}/api/Organisation/GetDistricts`)
    }
};

export default new ApiServices();