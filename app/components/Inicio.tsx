import type { CSSProperties } from "react";


export function Presentacion() {
  

  return (
    <section
      className="relative w-full h-[1000px] bg-cover bg-center bg-[url('/images/inicio.webp')] scale-x-[-1]"

    >
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent scale-x-[-1]"></div>

      
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start px-6 text-white scale-x-[-1]">
        <h1 className="text-5xl md:text-6xl tex-dirty-white font-bold mb-4 shadow-lg">
          Banco Universitario
        </h1>
        <p className="text-xl md:text-2xl max-w-lg shadow-md tex-dirty-white">
          Somos una confiable institución financiera comprometida con los estudiantes universitarios, brindando 
          soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y 
          contribuir al crecimiento económico y personal de nuestros clientes.
        </p>
      </div>
    </section>
  );
}