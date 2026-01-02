import type { Movement, MovementDTO } from "../movements";

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

// 3. Formateador para MONEDA: "23.843,95"
const currencyFormatter = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Adaptador individual (transforma 1 objeto)
export const movementAdapter = (data: MovementDTO): Movement => {
  const dateObj = new Date(data.created_at);

  return {
    id: data.id,
    description: data.description,
    acountNumber: data.account_number,
    amount: currencyFormatter.format(data.amount / 100),
    balance: currencyFormatter.format(data.balance/ 100),
    createAt: data.created_at,
    // Determinamos si es gasto basándonos en el multiplicador
    isExpense: data.multiplier === -1,
    updatedAt: data.updated_at,
    date: dateStringFormatter.format(dateObj), // "Jul 14, 2023"
    time: timeStringFormatter.format(dateObj), // "04:19 PM"
  };
};
