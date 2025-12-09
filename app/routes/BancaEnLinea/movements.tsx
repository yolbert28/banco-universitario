import Pagination from "~/components/BancaEnLinea/Pagination";

export default function Movements() {
  return (
    <div className="flex flex-col w-full px-12 py-8">
      <div className="flex flex-row justify-between w-full">
        <strong>Movimientos</strong>
        <div className="flex flex-row gap-2">
          <p>tipo de movimiento:</p>
          <select
            name=""
            id=""
            className="bg-primary text-dirty-white w-32 rounded-sm px-1"
          >
            <option value="Todos">Todos</option>
            <option value="Credito">Credito</option>
            <option value="Debito">Debito</option>
          </select>
        </div>
      </div>
      <table className="w-full mt-4">
        <thead>
          <tr className="sticky top-20 bg-dirty-white [&_td]:relative">
            <td className="min-w-[150px] text-center mx-2 py-2">
              Fecha y hora
              <div className="border-b border-bg-green absolute bottom-0 w-full"/>
            </td>
            <td className="pr-8 text-center">Descripción
              <div className="border-b border-bg-green absolute bottom-0 w-full"/></td>
            <td className="min-w-[100px] text-center mr-8">Cuenta
              <div className="border-b border-bg-green absolute bottom-0 w-full"/></td>
            <td className="min-w-40 text-center mx-2">Cantidad
              <div className="border-b border-bg-green absolute bottom-0 w-full"/></td>
            <td className="min-w-40 text-center mx-2">Saldo
              <div className="border-b border-bg-green absolute bottom-0 w-full"/></td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>

          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>

          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>

          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>

          <tr className="text-sm border-b border-bg-green">
            <td className="text-center py-2">
              <p className="text-[12px]">Jul 14, 2023</p>
              <p className="text-[12px]">04:19 PM</p>
            </td>
            <td className="px-4  py-2">
              Pago de la mensualidad del internet Pago de la mensualidad del
              internet
            </td>
            <td className="text-center px-4">(********5678)</td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
            <td className="text-center px-4">
              <strong>Bs. 50.252.100,00</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end my-4 mx-12">
        <Pagination/>
      </div>
    </div>
  );
}
