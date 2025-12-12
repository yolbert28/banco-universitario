import type { Movement } from "~/types/movements";
import MovementTableItem from "./MovementTableItem";

interface MovementTableProps {
  recentsMovements: Movement[] | null;
}

export default function MovementTable({
  recentsMovements,
}: MovementTableProps) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="sticky top-20 bg-dirty-white [&_td]:relative">
          <td className="min-w-[150px] text-center mx-2 py-2">
            Fecha y hora
            <div className="border-b border-bg-green absolute bottom-0 w-full" />
          </td>
          <td className="pr-8 text-center">
            Descripción
            <div className="border-b border-bg-green absolute bottom-0 w-full" />
          </td>
          <td className="min-w-[100px] text-center mr-8">
            Cuenta
            <div className="border-b border-bg-green absolute bottom-0 w-full" />
          </td>
          <td className="min-w-36 text-center mx-2">
            Cantidad
            <div className="border-b border-bg-green absolute bottom-0 w-full" />
          </td>
          <td className="min-w-36 text-center mx-2">
            Saldo
            <div className="border-b border-bg-green absolute bottom-0 w-full" />
          </td>
        </tr>
      </thead>
      <tbody>
        {recentsMovements != null ? (
          recentsMovements?.map((value: Movement) => (
            <MovementTableItem key={value.id} movement={value} />
          ))
        ) : (
          <tr> <td className="text-center text-gray-500 py-10" colSpan={5}>No existen movimientos en la cuenta</td> </tr>
        )}
      </tbody>
    </table>
  );
}
