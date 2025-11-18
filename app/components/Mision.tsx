export default function Mision() {
  return (
    <div
      className="w-screen flex flex-col justify-center items-center bg-tertiary relative"
      style={{ boxShadow: "0px 0px 21px rgba(0, 0, 0, 0.4)" }}
    >
      <div
        className="absolute -top-[6.5vw] sm:-top-[4.5vw] xl:-top-20 w-screen grid items-center h-8 lg:h-16 xl:h-20"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <div className="h-full w-full" />
        <img
          className="h-full justify-self-center"
          src="/images/decorador_cian_claro.webp"
          alt=""
        />
        <div className="h-full w-full bg-tertiary" />
      </div>

      <div className="w-full flex flex-col justify-center items-center max-w-[1650px] z-20">
        <div className="flex flex-col-reverse lg:flex-row items-start md:gap-6 lg:gap-16 py-12 md:py-16 w-[90%]">
          <div className="lg:order-0 w-full shrink flex justify-center items-center">
            <img
              src="/images/mision.webp"
              alt={"misión"}
              className="w-full object-cover sm:object-cover sm:h-96 rounded-2xl shadow-xl"
              onErrorCapture={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Error=${title.replace(/ /g, '+')}";
              }}
            />
          </div>

          <div className="w-full flex flex-col justify-center items-center md:items-start text-left md:gap-4 pt-2">
            <h3 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-bg-green">Misión</h3>
            <p className="text-base text-center md:text-left leading-tight lg:text-xl xl:text-2xl text-bg-green mb-6">
              {" "}
              Somos una confiable institución financiera comprometida con los
              estudiantes universitarios, brindando soluciones financieras
              ágiles y eficientes. Nuestra misión es facilitar la gestión de sus
              recursos y contribuir al crecimiento económico y personal de
              nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
