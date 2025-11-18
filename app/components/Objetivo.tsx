import ObjetivoCard from "./ObjetivoCard";

export default function Objetivo() {
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-primary relative pb-4 md:pt-10 md:pb-16">
      <div
        className="absolute -top-[6.5vw] sm:-top-[4.5vw] xl:-top-20 w-screen grid items-center h-8 lg:h-16 xl:h-20"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <div className="h-full w-full bg-primary" />
        <img
          className="h-full justify-self-center"
          src="/images/decorador_verde_grande.webp"
          alt=""
        />
        <div className="h-full w-full" />
      </div>

      <div className="w-full flex flex-col justify-center items-center max-w-7xl z-10">
        <div className="flex flex-col lg:flex-col items-center gap-6 lg:gap-16 py-12 md:py-16 w-[95%]">
          <h3 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-bg-light-blue">
            Objetivo
          </h3>
          <div className="flex flex-col gap-6 lg:gap-16 min-[1100px]:flex-row justify-between  items-center w-full">
            <ObjetivoCard direction="left">
              Fomentar el uso de nuestras plataformas digitales para hacer
              transferencias entre estudiantes sin comisión, depósitos y retiros
              en efectivo, ofreciendo herramientas tecnológicas fáciles y
              seguras.
            </ObjetivoCard>
            <ObjetivoCard direction="right">
              Brindar a los estudiantes universitarios un servicio eficiente y
              de calidad en la gestión de sus recursos financieros, a través de
              nuestros canales digitales y nuestros puntos de atención
              presencial.
            </ObjetivoCard>
          </div>

          <ObjetivoCard>
            Promover la educación financiera de los estudiantes universitarios,
            a través de charlas, talleres y capacitaciones sobre temas como el
            ahorro, la inversión y el uso responsable del crédito.
          </ObjetivoCard>
          <div className="flex flex-col gap-6 lg:gap-16 min-[1100px]:flex-row justify-between items-center w-full">
            <ObjetivoCard direction="left">
              Mantener una cultura de innovación y mejora continua en nuestros
              procesos, productos y servicios, para estar siempre a la
              vanguardia de las necesidades de nuestros clientes y del mercado.
            </ObjetivoCard>
            <ObjetivoCard direction="right">
              Establecer alianzas estratégicas con universidades y empresas para
              ofrecer beneficios exclusivos a nuestros clientes, tales como
              descuentos en matrículas, becas, prácticas laborales, entre otros.
            </ObjetivoCard>
          </div>
          <ObjetivoCard>
            Brindar a los estudiantes universitarios un servicio eficiente y de
            calidad en la gestión de sus recursos financieros, a través de
            nuestros canales digitales y nuestros puntos de atención presencial.
          </ObjetivoCard>
        </div>
      </div>
    </div>
  );
}
{
  /* <p className="text-base text-center md:text-left leading-tight lg:text-xl xl:text-2xl text-bg-green mb-6">
  {" "}
  Somos una confiable institución financiera comprometida con los estudiantes
  universitarios, brindando soluciones financieras ágiles y eficientes. Nuestra
  misión es facilitar la gestión de sus recursos y contribuir al crecimiento
  económico y personal de nuestros clientes.
</p>; */
}
