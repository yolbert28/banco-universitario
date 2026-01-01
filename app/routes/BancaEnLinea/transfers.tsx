import InputField from "~/components/BancaEnLinea/InputField";
import PrimaryButton from "~/components/PrimaryButton";
import SecondaryButton from "~/components/SecondaryButton";

export default function Transfers() {
  return (
    <>
      {/*   Contacto agregado

      <div className="w-full h-full z-50 absolute flex justify-center items-center bg-[#000000dd]">
        <div className="flex flex-col gap-4 bg-primary py-6 px-12 rounded-xl justify-center items-center">
          <h2 className="text-accent font-bold text-xl">
            Contacto registrado con exito
          </h2>
          <div className="text-accent text-lg">
            El contacto fue Registrado exitosamente
          </div>
          <PrimaryButton text="Cerrar" textLarge={false} px={80} />
        </div>
      </div> */}

{/*       Transacción incorrecta

      <div className="w-full h-full z-50 absolute flex justify-center items-center bg-[#000000dd]">
        <div className="flex flex-col gap-4 bg-primary py-6 px-12 rounded-xl justify-center items-center">
          <h2 className="text-accent font-bold text-xl">
            Transacción incorrecta
          </h2>
          <div className="text-accent text-lg">
            Saldo insuficiente para la transacción
          </div>
          <PrimaryButton text="Cerrar" textLarge={false} px={80} />
        </div>
      </div> */}

{/*   Guardar contacto

      <div className="w-full h-full z-50 absolute flex justify-center items-center bg-[#000000dd]">
        <div className="flex flex-col gap-4 bg-primary py-10 px-16 rounded-xl justify-center w-[550px] items-center">
          <h2 className="text-accent font-bold text-xl">
            Guardar contacto
          </h2>
          <label className="flex flex-col gap-1 text-dirty-white w-full">
            <span>Número de cuenta:</span>
            <InputField
              name=""
              type="text"
              placeholder="Número de cuenta"
              value=""
              onChange={() => {}}
            />
          </label>
          <label className="flex flex-col gap-1 text-dirty-white w-full">
            <span>Alias:</span>
            <InputField
              name=""
              type="text"
              placeholder="Alias"
              value=""
              onChange={() => {}}
            />
          </label>
          <label className="flex flex-col gap-1 text-dirty-white w-full">
            <span>Descripción:</span>
            <InputField
              name=""
              lineNumber={3}
              placeholder="Descripción (Opcional)"
              value=""
              onChange={() => {}}
            />
          </label>
          <div className="flex flex-row gap-4 items-center w-full">
            <PrimaryButton text="Guardar" textLarge={false} maxWidth={true} />
            <SecondaryButton text="Limpiar" textLarge={false} />
          </div>
        </div>
      </div> */}

      <div className="w-full h-full z-50 absolute flex justify-center items-center bg-[#000000dd]">
        <div className="flex flex-col gap-4 bg-primary py-10 px-12 rounded-xl justify-center w-[550px] h-[90%] items-center">
          <h2 className="text-accent font-bold text-xl">
            Selecciona un contacto
          </h2>
          <label className="flex flex-row gap-1 text-dirty-white w-full">
            <InputField
              name=""
              type="text"
              placeholder="Alias"
              value=""
              onChange={() => {}}
            />
            <button className="bg-accent hover:bg-dark-accent h-[50px] aspect-square rounded-xl flex justify-center items-center">
                <img src="/images/contacts.svg" alt="" />
              </button>
          </label>
          <div className="w-full h-full rounded-2xl bg-light-blue overflow-y-scroll">
            <div className="py-4 px-4 font-bold">
              Carlos Mendoza
            </div>
            <div className="py-4 px-4 font-bold">
              Carlos Mendoza
            </div>
            <div className="py-4 px-4 font-bold">
              Carlos Mendoza
            </div>
            <div className="py-4 px-4 font-bold">
              Carlos Mendoza
            </div>
            <div className="py-4 px-4 font-bold">
              Carlos Mendoza
            </div>
            <div className="py-4 px-4 font-bold">
              Carlos Mendoza
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center w-[300px]">
            <PrimaryButton text="Agregar nuevo contacto" textLarge={false} maxWidth={true} />
          </div>
        </div>
      </div>

      {/* Transferencia exitosa
      
      <div className="w-full h-full z-50 absolute flex justify-center items-center bg-[#000000dd]">
        <div className="flex flex-col gap-6 bg-primary py-8 px-12 rounded-xl w-[550px] justify-center">
          <h2 className="text-accent font-bold text-center text-xl">
            Transferencia Exitosa
          </h2>
          <div className="text-accent text-lg">
            <strong>Referencia:</strong> 0350
          </div>
          <div className="text-accent text-lg">
            <strong>Fecha:</strong> 05/10/2025
          </div>
          <div className="text-accent text-lg">
            <strong>Destino:</strong> 54321098765432109876
          </div>
          <div className="text-accent text-lg">
            <strong>Descripción:</strong> Pago de 4 empanadas y una malta
          </div>
          <div className="text-accent text-lg">
            <strong>Monto: 1.050,00</strong>
          </div>
          <div className="w-full flex justify-center">
            <PrimaryButton text="Cerrar" textLarge={false} px={80} />
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center w-full h-full relative">
        <div className="bg-primary w-[500px] h-[90%] px-8 py-6 flex flex-col rounded-2xl gap-3">
          <div className="flex flex-row gap-2.5 justify-center items-center w-full">
            <div className="w-full h-0.5 bg-accent rounded-full" />
            <h1 className="text-2xl font-bold text-accent">Transferencias</h1>
            <div className="w-full h-0.5 bg-accent rounded-full" />
          </div>
          <div className="flex flex-col gap-1 text-dirty-white">
            <p className="text-dirty-white">Destinatario:</p>
            <div className="flex flex-row justify-center items-center gap-1 text-dirty-white">
              <InputField
                name="addressee"
                type="text"
                placeholder="Destinatario"
                value=""
                onChange={() => {}}
                error=""
                required
              />
              <button className="bg-accent hover:bg-dark-accent h-[50px] aspect-square rounded-xl flex justify-center items-center">
                <img src="/images/contacts.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-dirty-white">
            <p className="text-dirty-white">Descripción:</p>
            <InputField
              name="description"
              type="text"
              placeholder="Descripción"
              value=""
              onChange={() => {}}
              error=""
              required
              lineNumber={3}
            />
          </div>
          <div className="flex flex-row gap-1 text-dirty-white items-center">
            <p className="text-dirty-white">Monto:</p>
            <InputField
              name="amount"
              type="text"
              placeholder="Mónto"
              value=""
              onChange={() => {}}
              error=""
              required
            />
          </div>
          <div className="h-full" />
          <div className="flex flex-row gap-4 items-center">
            <PrimaryButton
              text="Realizar transferencia"
              textLarge={false}
              maxWidth={true}
            />
            <SecondaryButton text="Limpiar" textLarge={false} />
          </div>
        </div>
      </div>
    </>
  );
}
