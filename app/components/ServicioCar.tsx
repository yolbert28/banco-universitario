interface ServiceCardProps  {
  title: string;
  description: string;
  imagName: string;
  
  align: "left" | "right";
};

export function ServicioCard({title,description,imagName,align,}: ServiceCardProps) {

  const imagPath = `/images/${imagName}`;
  
  const alignmentClasses =
    align === "left" ? "mx-auto md:mr-auto md:ml-0" : "mx-auto md:ml-auto md:mr-0 text-left md:text-right";


  const flexDirection = 
    align === "left" ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse";

  return (
    <div
      className={`w-full md:w-11/12 lg:w-10/12 xl:w-9/12 ${alignmentClasses} mb-12 last:mb-0`}
    >
      <div
        
        className={`flex ${flexDirection} items-center bg-white rounded-3xl shadow-2xl border border-gray-300 overflow-hidden`}
      >
      
        <div className=" order-2 md:order-none w-full md:w-2/5 lg:w-[390px] flex-shrink-0 p-4 md:p-8 lg:p-[70px] flex justify-center items-center">
        <img
          src={imagPath}
          alt={title}
          className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-xl"
          
          onErrorCapture={(e) =>{
            (e.target as HTMLImageElement).onerror=null;
            (e.target as HTMLImageElement).src="https://placehold.co/600x400/CCCCCC/FFFFFF?text=Error=${title.replace(/ /g, '+')}";
          }}
          />
        </div>
        
        
        <div className="order-1 md:order-none w-full md:w-3/5 lg:w-auto p-6 md:p-8 lg:p-12 flex flex-col justify-center text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-bg-green">{title}</h3>
          <p className="text-base md:text-lg text-bg-green leading-relaxed mb-6">{description}</p>

        </div>
      </div>
    </div>
  );
}