import { useNavigate } from "react-router";
import ContactoCard from "./ContactoCard";
import PrimaryButton from "./PrimaryButton";
import SocialCard from "./SocialCard";

interface ContactoData {
  firstCard: {
    title: string;
    description: string;
    image: string;
    url: String;
    button: string;
  };
  secondCard: {
    title: string;
    direction: string;
    phone: string;
    fax: string;
    email: string;
    button: string;
  };
  CornerInfo: {
    logo: string;
    title: string;
    rif: string;
  };
}

interface ContactoProps {
  data: ContactoData;
}

export default function Contacto({ data }: ContactoProps) {
  let navigate = useNavigate();

  return (
    <section className="w-screen bg-bg-green flex justify-center items-center pt-8 relative">
      <div
        className="absolute -top-[6.5vw] sm:-top-[4.5vw] xl:-top-20 w-screen grid items-center h-8 lg:h-16 xl:h-20"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <div className="h-full w-full" />
        <img
          className="h-full rotate-180 justify-self-center"
          src="/images/decorador_verde_oscuro.png"
          alt=""
        />
        <div className="h-full w-full bg-bg-green" />
      </div>

      <div className="max-w-[1650px] w-full bg-bg-green z-50 h-full flex flex-col justify-center items-center gap-12  md:mt-8 xl:mt-24">
        <ContactoCard>
          <div className="flex flex-col w-full h-full justify-center">
            <h1 className="font-bold text-dirty-white text-4xl lg:text-4xl xl:text-4xl">
              {data.firstCard.title}
            </h1>
            <p className="text-dirty-white leading-tight text-lg lg:text-xl xl:text-xl py-5 lg:py-10 xl:py-10">
              {data.firstCard.description}
            </p>
            <PrimaryButton
              text={data.firstCard.button}
              onClick={() => {
                navigate(`${data.firstCard.url}`);
              }}
            />
          </div>
          <img
            className="rounded-2xl w-full lg:w-[50%] xl:w-[50%]"
            src={data.firstCard.image}
            alt=""
          />
        </ContactoCard>
        <ContactoCard reverse>
          <div className="flex flex-col w-full h-full justify-center">
            <h1 className="font-bold text-dirty-white text-4xl">
              {data.secondCard.title}
            </h1>
            <div className="text-dirty-white leading-tight sm:w-[90%] text-lg lg:text-xl xl:text-xl py-5 lg:py-10 xl:py-10  flex flex-col gap-4">
              <p>
                <strong>Dirección:</strong> {data.secondCard.direction}
              </p>
              <p>
                <strong>Teléfono:</strong> {data.secondCard.phone}
              </p>
              <p>
                <strong>Fax:</strong> {data.secondCard.fax}
              </p>
              <p className="wrap-break-word">
                <strong>Correo electrónico:</strong> {data.secondCard.email}
              </p>
            </div>
            <PrimaryButton
              text={data.secondCard.button}
              onClick={() => console.log("Hola")}
            />
          </div>
          <img
            className="rounded-2xl w-full lg:w-[50%] xl:w-[50%]"
            src={data.firstCard.image}
            alt=""
          />
        </ContactoCard>
        <div className="flex flex-col-reverse gap-16 lg:flex-row  w-[90%] py-20">
          <LogoFooter
            logo={data.CornerInfo.logo}
            title={data.CornerInfo.title}
            rif={data.CornerInfo.rif}
          />
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

interface LogoFooterProps {
  logo: string;
  title: string;
  rif: string;
}

function LogoFooter({ logo, title, rif }: LogoFooterProps) {
  return (
    <div className="w-full h-full shrink mt-auto flex justify-start items-end">
      <div className="flex flex-col gap-2 text-dirty-white">
        <div className="flex flex-row items-center gap-2">
          <img className="w-[70px] h-[70px]" src={logo} alt={`${title} logo`} />
          <h2 className="font-bold text-[24px] leading-tight max-w-36">
            {title}
          </h2>
        </div>
        <p className="text-[16px] font-bold max-w-96 text-bg-light-blue">
          {rif}
        </p>
      </div>
    </div>
  );
}
