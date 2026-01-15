import { apiHttp } from "../AxiosConfig";

export interface TransferValues{
    amount: number;
    account_number: string;
    description: string;
}

// para llamar al backend
export const transferAPI = (transferValues: TransferValues) =>
    apiHttp("POST", `/v1/client/movement`, transferValues);

export const getMovementsAPI = (page: number, multiplier: string) => 
    apiHttp("GET", `/v1/client/movement`,null, multiplier != "0" ? { page: page, page_size: 30, multiplier: multiplier} : { page: page, page_size: 30 });
