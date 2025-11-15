
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
    <section className="bg-white py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        
        <div >
          <h2 className="text-7xl font-bold px-[200px] py-[60px]">Servicios</h2>
        </div>

        
        <div className="bg-white p-6 md:p-12  -mt-1 z-0 relative">
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