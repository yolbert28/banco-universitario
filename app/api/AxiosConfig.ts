import axios, {type AxiosRequestConfig, type Method} from "axios";
import { getJWT} from "~/api/LocalStorage";

export const API_URL_BACKEND = import.meta.env.VITE_API_URL_BACKEND || "http://localhost:3000";
const AXIOS_TIMEOUT_MS = 10000;

const defaultHeaders ={
    accept: "application/json", "Content-Type": "application/json",
};

export const apiHttp = async (
    method: Method,
    endpoint: String,
    data: any = null,
    params: any = null,
    options: AxiosRequestConfig = {}
) => {
    
    const headers = {
        ...defaultHeaders,
        ...(options.headers || {})
    } as Record<string, string>;

    const jwt = getJWT();
    if (jwt) {
        headers["Authorization"] = `Bearer ${jwt}`;
    }

    const url = `${API_URL_BACKEND}${endpoint}`;

    const config: AxiosRequestConfig = {
        method,
        url,
        params,
        data,
        timeout: AXIOS_TIMEOUT_MS,
        headers,
        ...options
    };

    console.log (` ${method.toUpperCase()} ${url}`);

    try {
        const response = await axios(config);
        return {
            data: response.data,
            headers: response.headers,
            errors: []
        };

    } catch (error: any){
        console.error(" Error en apiHttp:", error);

        if (error.response) {
        
           let errorMessage = 
                error.response.data.error || 
                error.response.data.message || 
                "Error del servidor"; 

           return {
            data:null,
            errors:[{ error: errorMessage }] 
           }
        } else {
            return {
                data:null,
                errors: [{ error: "Error de conexión o tiempo de espera" }]
            }
        }
    }
};