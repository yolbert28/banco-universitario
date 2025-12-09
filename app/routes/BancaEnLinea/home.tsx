import { useNavigate } from "react-router";
import PrimaryButton from "~/components/PrimaryButton";
import { ROUTES } from "~/constans";

export default function BancaHome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-16 py-8">
      <div className="flex flex-row w-full gap-8">
        <div
          className="flex flex-col p-6 gap-6 min-w-[380px] h-40 bg-light-blue rounded-2xl "
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="flex flex-row w-full justify-between items-center">
            <h3 className=" text-xl">Saldo de cuenta</h3>
            <button onClick={() => {}}>
              <img className="h-7 w-7" src="/images/reload.png" alt="" />
            </button>
          </div>
          <strong className=" text-3xl ml-1">Bs.589,19</strong>
        </div>
        <div
          className="flex flex-col p-6 w-full h-40 bg-primary rounded-2xl gap-6"
          style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <h3 className="text-dirty-white text-xl">Número de cuenta</h3>
          <div className="flex flex-row w-full pr-6 justify-between items-center">
            <strong className="text-dirty-white text-2xl ml-1">
              *****************************
            </strong>
            <button onClick={() => {}}>
              <img className="h-8 w-8" src="/images/show.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center w-full gap-8 pt-8">
        <strong>Actividad reciente de cuenta</strong>
        <button
          className="bg-primary text-dirty-white rounded-sm py-1 px-4"
          onClick={() => navigate(ROUTES.BL_MOVEMENTS)}
        >
          <strong>Ver Actividad</strong>
        </button>
      </div>
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
            <td className="min-w-40 text-center mx-2">
              Cantidad
              <div className="border-b border-bg-green absolute bottom-0 w-full" />
            </td>
            <td className="min-w-40 text-center mx-2">
              Saldo
              <div className="border-b border-bg-green absolute bottom-0 w-full" />
            </td>
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
            <td className="px-4  py-2">Pago de la mensualidad del internet</td>
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
    </div>
  );
}
