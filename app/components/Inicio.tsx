interface PresentacionProps {
  title: string;
  description: string;
}

export function Presentacion({title, description}: PresentacionProps) {

  return (
    <section
      className=" w-screen flex flex-col items-center h-[680px] md:h-[760px] sm:h-[700px] lg:h-[750px]"
    >
      <div className="max-w-[1650px] w-full h-full relative bg-cover max-[450px]:bg-position-[-20vw_center] max-[540px]:bg-position-[-10vw_center] sm:bg-position-[-0vw_center] md:bg-position-[0vw_bottom] bg-[url('/images/inicio.webp')] scale-x-[-1]">
        <div className="absolute right-0 h-[55%] bg-linear-to-b w-full from-black/80 via-black/50 via-90% lg:via-75% to-transparent lg:w-[70%] lg:h-full lg:bg-linear-to-l lg:to-80%"></div>

        <div className="relative z-10 w-full mx-auto h-full flex flex-col justify-start items-start px-6 lg:px-20 pt-8 pb-16 lg:pb-0 lg:pt-24 text-white scale-x-[-1] text-left">
          <h1 className="text-4xl lg:w-96 md:text-5xl w-64 lg:text-6xl text-dirty-white font-bold mb-4 shadow-lg leading-tight drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-md md:max-w-lg shadow-md text-dirty-white leading-tight drop-shadow-sm">
            {description}
          </p>
        </div>
      </div>


    </section>
  );
}