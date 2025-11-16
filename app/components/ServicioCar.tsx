interface ServiceCardProps {
  title: string;
  description: string;
  imagName: string;

  align: "left" | "right";
};

export function ServicioCard({ title, description, imagName, align, }: ServiceCardProps) {

  const imagPath = `/images/${imagName}`;

  const alignmentClasses =
    align === "left" ? "mx-auto lg:mr-auto lg:ml-0" : "mx-auto lg:ml-auto lg:mr-0 text-left md:text-right";


  const flexDirection =
    align === "left" ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse";

  return (
    <div
      className={`w-[90%] lg:w-[95%] max-w-[1270px] ${alignmentClasses} mb-12 last:mb-0`}
    >
      <div
        className={`flex ${flexDirection} items-center gap-12 bg-white rounded-3xl py-8 px-6 sm:py-12 sm:px-16 border border-gray-300 overflow-hidden`}
        style={{ boxShadow: '0px 0px 21px rgba(0, 0, 0, 0.4)' }}
      >

        <div className=" order-2 lg:order-0 w-full lg:w-2/5 shrink-0 flex justify-center items-center">
          <img
            src={imagPath}
            alt={title}
            className="w-full max-h-[427px] object-cover sm:object-cover sm:h-96 rounded-2xl shadow-xl"

            onErrorCapture={(e) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Error=${title.replace(/ /g, '+')}";
            }}
          />
        </div>


        <div className="order-0 w-full lg:w-auto flex flex-col justify-center text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-bg-green">{title}</h3>
          <p className="text-base md:text-lg text-bg-green leading-relaxed mb-6">{description}</p>

        </div>
      </div>
    </div>
  );
}