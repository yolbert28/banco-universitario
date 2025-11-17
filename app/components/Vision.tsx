export default function Vision() {
  return (
    <div className="w-screen flex flex-col justify-center items-center relative shadow-2xl">

      <div className="w-full flex flex-col justify-center items-center max-w-[1650px]">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-start md:gap-6 lg:gap-16 py-12 md:py-28 w-[90%]">
          <div className="lg:order-0 w-full shrink flex justify-center items-center">
            <img
              src="/images/vision.webp"
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
            <h3 className=" text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-bg-green">Visión</h3>
            <p className="text-base text-center md:text-left leading-tight lg:text-xl xl:text-2xl text-bg-green mb-6">
              {" "}
              Queremos ser la principal opción financiera para estudiantes
              universitarios en el país. Deseamos ser reconocidos por nuestros
              servicios innovadores, la calidad de atención al cliente y nuestro
              compromiso con la educación y el desarrollo social.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
