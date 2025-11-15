
import TopBar from "~/components/TopBar";
import { Presentacion } from "~/components/Inicio";
import { Servicios} from "~/components/Servicios";
import Contactos from "~/components/Contactos";

const servicioData = [
  {
    title: "Transferencias entre estudiantes sin comision",
    description: "El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno, con el objetivo de facilitar el intercambio de dinero entre los estudiantes universitarios. Este servicio permite transferir dinero de manera rápida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones.",
    imagName: "transferencias.webp",
    align: "right",
  },
  {
    title: "Depositos en efectivo",
    description: "El Banco Universitario permite a los estudiantes realizar depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. Este servicio está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los estudiantes realizar sus depósitos en cualquier momento que lo necesiten.",
    imagName: "depositos.webp",
    align: "left",
  },
  {
    title: "Retiros en efectivo",
    description: "El Banco Universitario también permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están seguros y protegidos.",
    imagName: "retiros.webp",
    align: "right",
  },
  {
    title: "Pago de matricula estudiantil",
    description: "El Banco Universitario también ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes realizar sus pagos en cualquier momento que lo necesiten.",
    imagName: "matricula.webp",
    align: "left",
  },
  {
    title: "Cobro de becas estudiantiles",
    description: "El Banco Universitario también permite a los estudiantes universitarios cobrar sus becas estudiantiles de manera sencilla y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura.",
    imagName: "beca.webp",
    align: "right",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <TopBar/>
      <Presentacion/>
      <Servicios servicioList={servicioData}/>
      <Contactos/>

    </main>
  );
}
