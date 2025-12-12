import type { Movement, MovementDTO } from "../movements";

// Configuramos el formateador de dinero una sola vez (fuera de la función para rendimiento)
const currencyFormatter = new Intl.NumberFormat("es-VE", {
  style: "currency",
  currency: "VES", // O 'USD' según tu caso
});

// 1. Formateador para la FECHA: "Jul 14, 2023"
const dateStringFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short", // "Jul"
  day: "numeric", // "14"
  year: "numeric", // "2023"
});

// 2. Formateador para la HORA: "04:19 PM"
const timeStringFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit", // "04"
  minute: "2-digit", // "19"
  hour12: true, // Usa formato de 12 horas (AM/PM)
});

// Adaptador individual (transforma 1 objeto)
export const movementAdapter = (data: MovementDTO): Movement => {
  const dateObj = new Date(data.created_at);

  return {
    id: data.id,
    description: data.description,
    acountNumber: data.account_number,
    amount: data.amount,
    balance: data.balance,
    createAt: data.created_at,
    // Determinamos si es gasto basándonos en el multiplicador
    isExpense: data.multiplier === -1,
    updatedAt: data.updated_at,
    date: dateStringFormatter.format(dateObj), // "Jul 14, 2023"
    time: timeStringFormatter.format(dateObj), // "04:19 PM"
  };
};
