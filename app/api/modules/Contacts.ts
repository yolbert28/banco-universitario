import { apiHttp } from "../AxiosConfig"; 

export interface Contact{
    id?: string;
    alias: string;
    account_number: string;
    description?: string;
}

//funcionalidades para el CRUD

//Trae los contactos
export const getContactsAPI = () =>
    apiHttp ("GET", `/v1/client/contact`);

//Agregar un contacto
export const createContactAPI = (contactData: Contact) =>
    apiHttp ("POST", `/v1/client/contact`, contactData);

//modificar un contacto
export const updateContactAPI = (id: string, contactData: Contact) =>
    apiHttp("PUT", `/v1/client/contact/${id}`, contactData);

//Elimina contacto
export const deleteContactAPI = (id: string) =>
    apiHttp("DELETE", `/v1/client/contact/${id}`);


