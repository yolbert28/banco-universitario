import Contactos from "~/components/Contactos";
import InicioNosotros from "~/components/InicioNosotros";
import Mision from "~/components/Mision";
import Objetivo from "~/components/Objetivo";
import TopBar from "~/components/TopBar";
import Vision from "~/components/Vision";
import aboutData from "../data/about.json";

export default function About() {
  return (
    <main className="min-h-screen w-screen flex flex-col justify-center items-center bg-white">
      <TopBar />
      <InicioNosotros title={aboutData.title} />
      <Mision data={aboutData.mission} />
      <Vision data={aboutData.vision} />
      <Objetivo data={aboutData.objective}/>
      <Contactos data={aboutData.Contactos} />
    </main>
  );
}
