import { apiHttp } from "../AxiosConfig"; 

export interface Contact{
    id?: string;
    alias: string;
    account_number: string;
    description?: string;
}

//Trae los contactos
export const getContactsAPI = (params?: { alias?: string; page?: number; page_size?: number }) => {
    let query = "";
    if (params) {
        const searchParams = new URLSearchParams(params as any);
        query = `?${searchParams.toString()}`;
    }
    return apiHttp("GET", `/v1/client/contact${query}`);
};

//Agregar un contacto
export const createContactAPI = (contactData: Contact) =>
    apiHttp ("POST", `/v1/client/contact`, contactData);

//modificar un contacto
export const updateContactAPI = (id: string, contactData: Contact) =>
    apiHttp("PATCH", `/v1/client/contact/${id}`, contactData);

//Elimina contacto
export const deleteContactAPI = (id: string) =>
    apiHttp("DELETE", `/v1/client/contact/${id}`);
