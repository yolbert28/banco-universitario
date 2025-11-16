import ContactoCard from "./ContactoCard";
import PrimaryButton from "./PrimaryButton";
import SocialCard from "./SocialCard";

export default function Contacto() {
  return (
    <section className="w-screen bg-bg-green flex justify-center items-center pt-8 relative">
      <div className="absolute -top-[6.5vw] sm:-top-[4.5vw] xl:-top-20 w-screen grid items-center h-8 lg:h-16 xl:h-20" style={{gridTemplateColumns: '1fr auto 1fr'}}>
        <div className="h-full w-full"/>
        <img
          className="h-full rotate-180 justify-self-center"
          src="/images/decorador_verde_oscuro.png"
          alt=""
        />
        <div className="h-full w-full bg-bg-green"/>
      </div>

      <div className="max-w-[1650px] w-full bg-bg-green z-50 h-full flex flex-col justify-center items-center gap-12  md:mt-8 xl:mt-24">
        <ContactoCard>
          <div className="flex flex-col w-full h-full justify-center">
            <h1 className="font-bold text-dirty-white text-4xl lg:text-4xl xl:text-4xl">
              ¿Quienes somos?
            </h1>
            <p className="text-dirty-white leading-tight text-lg lg:text-xl xl:text-xl py-5 lg:py-10 xl:py-10">
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
            className="rounded-2xl w-full lg:w-[50%] xl:w-[50%]"
            src="/images/quienes_somos.webp"
            alt=""
          />
        </ContactoCard>
        <ContactoCard reverse>
          <div className="flex flex-col w-full h-full justify-center">
            <h1 className="font-bold text-dirty-white text-4xl">Contactos</h1>
            <div className="text-dirty-white leading-tight sm:w-[90%] text-lg lg:text-xl xl:text-xl py-5 lg:py-10 xl:py-10  flex flex-col gap-4">
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
              <p className="wrap-break-word">
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
            className="rounded-2xl w-full lg:w-[50%] xl:w-[50%]"
            src="/images/quienes_somos.webp"
            alt=""
          />
        </ContactoCard>
        <div className="flex flex-col-reverse gap-16 lg:flex-row  w-[90%] py-20">
          {LogoFooter()}
          <div className="flex flex-col shrink w-full">
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
    <div className="w-full h-full shrink flex justify-start items-end">
      <div className="flex flex-col gap-2 text-dirty-white">
        <div className="flex flex-row items-center gap-2">
          <img className="w-[70px] h-[70px]" src="/favicon.webp" alt="" />
          <h2 className="font-bold text-[24px] leading-tight max-w-36">
            Banco Universitario
          </h2>
        </div>
        <p className="text-[16px] font-bold max-w-96 text-bg-light-blue">
          Banco universitario-RIF: G-70054489-7 Copyright © 2025. Todos los
          derechos reservados
        </p>
      </div>
    </div>
  );
}
