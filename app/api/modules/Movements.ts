import { apiHttp } from "../AxiosConfig";
import { getMultiplier, getPage } from "../LocalStorage";

export interface TransferValues{
    amount: number;
    account_number: string;
    description: string;
}

// para llamar al backend
export const transferAPI = (transferValues: TransferValues) =>
    apiHttp("POST", `/v1/public/client/movement`, transferValues);

export const getMovementsAPI = () => 
    apiHttp("GET", `/v1/client/movement`,null, getMultiplier() != "0" ? { page: getPage(), page_size: 30, multiplier: getMultiplier()} : { page: getPage(), page_size: 30 });

