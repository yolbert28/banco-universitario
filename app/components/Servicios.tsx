import { ServicioCard } from "./ServicioCar";

interface Service{
  title: string;
  description: string;
  imagName: string;
  align: string;
}

interface servicioProps{
  servicioList: Service[]
}

export function Servicios({servicioList}:servicioProps) {
  return (
    <section className=" w-screen flex flex-col items-center pb-16 md:pb-[100px] xl:pb-[200px] relative">

      <div className="absolute grid grid-cols-1 -top-[6.5vw] sm:-top-[4.5vw] xl:-top-24 w-screen items-center h-8 lg:h-16 xl:h-20">
        <img
          className="h-full w-full max-w-[1652px] justify-self-center"
          src="/images/decorador_blanco.webp"
          alt=""
        />
      </div>

      <div className="container max-w-[1650px] w-full flex z-50 flex-col items-center justify-center sm:px-6">
        <div className="text-center md:text-left mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold px-0 md:px-8 lg:px-[200px] py-8 md:py-8 lg:py-[60px] text-primary-dark">
            Servicios
          </h2>
        </div>

        
        <div className="w-[98%] z-0 relative">
          {servicioList.map((service, index) => (
            <ServicioCard
              key={index}
              title={service.title}
              description={service.description}
              imagName={service.imagName}
              align={service.align as "left" | "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}