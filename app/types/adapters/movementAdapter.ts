
import type { Movement, MovementDTO } from "../movements";

// Configuramos el formateador de dinero una sola vez (fuera de la función para rendimiento)
const currencyFormatter = new Intl.NumberFormat('es-VE', {
  style: 'currency',
  currency: 'VES', // O 'USD' según tu caso
});


// Adaptador individual (transforma 1 objeto)
export const movementAdapter = (data: MovementDTO): Movement => {
  const realAmount = data.amount * data.multiplier; // Calculamos el valor real (+/-)

  return {
    id: data.id,
    description: data.description,
    acountNumber: data.account_number,
    amount: realAmount,
    balance: currencyFormatter.format(data.balance),
    createAt: data.created_at,
    // Determinamos si es gasto basándonos en el multiplicador
    isExpense: data.multiplier === -1,
    updatedAt: data.updated_at,
  };
};