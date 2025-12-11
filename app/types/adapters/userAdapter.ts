import type { User, UserDTO } from "../user";

export const userAdapter = (data: UserDTO): User => {
  return {
    documentNumber: data.document_number,
    // Unificamos nombre para simplificar la UI
    name: data.first_name,
    lastName: data.last_name, 
    email: data.email,
    // Convertimos a camelCase
    accountNumber: data.account_number, 
    phone: data.phone_number,
    // Formateamos la fecha aquí una sola vez
    birthDate: data.birth_date
  };
};