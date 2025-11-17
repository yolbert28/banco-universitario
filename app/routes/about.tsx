import Contactos from "~/components/Contactos";
import InicioNosotros from "~/components/InicioNosotros";
import Mision from "~/components/Mision";
import TopBar from "~/components/TopBar";
import Vision from "~/components/Vision";

export default function About(){
  return (
    <main className="min-h-screen w-screen flex flex-col justify-center items-center bg-white">
    
          <TopBar/>
          <InicioNosotros/>
          <Mision/>
          <Vision/>
          <Contactos/>
    
    </main>
  )
}