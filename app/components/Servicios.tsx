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
    <section className=" w-screen overflow-hidden pb-[100px]">
      <div className="container mx-auto px-4 sm:px-6">
        
        
        <div className="text-center md:text-left mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold px-0 md:px-8 lg:px-[200px] py-8 md:py-8 lg:py-[60px] text-primary-dark">
            Servicios
          </h2>
        </div>

        
        <div className="bg-white p-1 md:p-6 lg:p-12 z-0 relative">
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