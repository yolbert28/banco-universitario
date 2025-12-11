import { apiHttp } from "../AxiosConfig";

export interface TransferValues{
    amount: number;
    account_number: string;
    description: string;
}

// para llamar al backend
export const transferAPI = (transferValues: TransferValues) =>
    apiHttp("POST", `/v1/public/client/movement`, transferValues);

export const getMovementsAPI = () =>
    apiHttp("GET", `/v1/client/movement?page=1&page_size=20`);
