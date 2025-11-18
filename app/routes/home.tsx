
import TopBar from "~/components/TopBar";
import { Presentacion } from "~/components/Inicio";
import { Servicios} from "~/components/Servicios";
import Contactos from "~/components/Contactos";
import homeData from "../data/home.json"


export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col justify-center items-center bg-white">

      <TopBar/>
      <Presentacion title={homeData.presentation.title} description={homeData.presentation.description}/>
      <Servicios title={homeData.serviciosTitle} servicioList={homeData.servicios}/>
      <Contactos data={homeData.Contactos}/>

    </main>
  );
}
