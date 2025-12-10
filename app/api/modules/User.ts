import { apiHttp } from "../AxiosConfig";

export interface LoginValues{
    email:string;
    password?: string;
}

export interface RegisterValues{
    email:string;
    password?: string;
    first_name: string;
    last_name: string;
    document_number: string;
    phone_number: string;
    birth_date: string;
    user_type: "V" | "J" | "E";
}

// para llamar al backend

export const loginAPI = (loginValues: LoginValues) =>
    apiHttp("POST", `/v1/public/client/user/login`, loginValues);

export const whoAmIAPI = () =>
    apiHttp("GET", `/v1/client/user/whoami`);

export const registerAPI = (registerValues: RegisterValues) => 
  apiHttp("POST", `/v1/public/client/user/register`, registerValues);