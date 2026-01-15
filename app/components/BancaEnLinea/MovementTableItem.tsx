import type { Movement } from "~/types/movements";

export default function MovementTableItem({
  movement,
}: {
  movement: Movement;
}) {
  const amountColor = movement.isExpense ? "text-red" : "text-green";

  return (
    <tr className="text-sm border-b border-bg-green">
      <td className="text-center py-2">
        <p className="text-[12px]">{movement.date}</p>
        <p className="text-[12px]">{movement.time}</p>
      </td>
      <td className="px-4 py-2">{movement.description}</td>
      <td className="text-center px-4">(********5678)</td>
      <td className={`text-center px-4 ${amountColor}`}>
        <strong>Bs. {movement.amount}</strong>
      </td>
      <td className="text-center px-4">
        <strong>Bs. {movement.balance}</strong>
      </td>
    </tr>
  );
}
