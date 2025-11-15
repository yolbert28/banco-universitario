import ContactoCard from "./ContactoCard";
import PrimaryButton from "./PrimaryButton";
import SocialCard from "./SocialCard";

export default function Contacto() {
  return (
    <section className="w-screen bg-bg-green flex justify-center items-center pt-8 pb-16 relative">
      <div className="absolute -top-20 w-screen grid items-center lg:h-24 xl:h-32" style={{gridTemplateColumns: '1fr auto 1fr'}}>
        <div className="h-full w-full"/>
        <img
          className="h-full rotate-180 justify-self-center"
          src="/images/decorador_verde_oscuro.png"
          alt=""
        />
        <div className="h-full w-full bg-bg-green"/>
      </div>

      <div className="w-[1650px] bg-bg-green z-50 h-full flex flex-col justify-center items-center gap-12 mt-24">
        <ContactoCard>
          <div className="flex flex-col w-full h-full justify-center">
            <h1 className="font-bold text-dirty-white text-4xl">
              ¿Quienes somos?
            </h1>
            <p className="text-dirty-white text-xl py-10">
              {" "}
              Somos una confiable institución financiera comprometida con los
              estudiantes universitarios, brindando soluciones financieras
              ágiles y eficientes. Nuestra misión es facilitar la gestión de sus
              recursos y contribuir al crecimiento económico y personal de
              nuestros clientes.
            </p>
            <PrimaryButton
              text="Acerca de nosotros"
              onClick={() => console.log("Hola")}
            />
          </div>
          <img
            className="rounded-2xl w-[50%]"
            src="/images/quienes_somos.webp"
            alt=""
          />
        </ContactoCard>
        <ContactoCard reverse>
          <div className="flex flex-col w-full h-full justify-center">
            <h1 className="font-bold text-dirty-white text-4xl">Contactos</h1>
            <div className="text-dirty-white text-xl py-10 flex flex-col gap-4">
              <p>
                <strong>Dirección:</strong> Av. Universidad, Edificio Banco
                Universitario, piso 12, Caracas, Venezuela.
              </p>
              <p>
                <strong>Teléfono:</strong> +58 212-555-5555
              </p>
              <p>
                <strong>Fax:</strong> +58 212-555-5556
              </p>
              <p>
                <strong>Correo electrónico:</strong>{" "}
                info@bancouniversitario.com.ve
              </p>
            </div>
            <PrimaryButton
              text="Ir al mapa"
              onClick={() => console.log("Hola")}
            />
          </div>
          <img
            className="rounded-2xl w-[50%]"
            src="/images/quienes_somos.webp"
            alt=""
          />
        </ContactoCard>
        <div className="grid grid-cols-2 w-[80%] gap-10 py-20">
          {LogoFooter()}
          <div className="flex flex-col">
            <SocialCard
              logo="/images/facebook_logo.png"
              href=""
              text="@bancouniversitariove"
            />
            <SocialCard
              logo="/images/instagram_logo.png"
              href=""
              text="@bancouniversitariove"
            />
            <SocialCard
              logo="/images/x_logo.png"
              href=""
              text="@bancouniversitariove"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoFooter() {
  return (
    <div className="w-full h-full flex justify-start items-end">
      <div className="flex flex-col gap-2 text-dirty-white">
        <div className="flex flex-row items-center gap-2">
          <img className="w-20 h-20" src="/favicon.webp" alt="" />
          <h2 className="font-bold text-[24px] max-w-36">
            Banco Universitario
          </h2>
        </div>
        <p className="text-[16px] font-bold max-w-96">
          Banco universitario-RIF: G-70054489-7 Copyright © 2025. Todos los
          derechos reservados
        </p>
      </div>
    </div>
  );
}
