export function Presentacion() {
  

  return (
    <section
      className=" w-screen relative w-full h-[760px] sm:h-[700px] lg:h-[750px] bg-cover bg-[16%_center] bg-[url('/images/inicio.webp')] scale-x-[-1]"
      
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent scale-x-[-1]"></div>

      
      <div className="relative z-10 max-w-[1650px] w-full mx-auto h-full flex flex-col justify-start md:justify-start items-center md:items-start px-6 pt-24 pb-16 md:pb-0 md:pt-16 text-white scale-x-[-1] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-dirty-white font-bold mb-4 shadow-lg leading-tight drop-shadow-md">
          Banco Universitario
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-md md:max-w-lg shadow-md text-dirty-white leading-relaxed drop-shadow-sm">
          Somos una confiable institución financiera comprometida con los estudiantes universitarios, brindando 
          soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y 
          contribuir al crecimiento económico y personal de nuestros clientes.
        </p>
      </div>
    </section>
  );
}