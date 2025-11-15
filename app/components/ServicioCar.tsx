
interface ServiceCardProps  {
  title: string;
  description: string;
  imagName: string;
  
  align: "left" | "right";
};

export function ServicioCard({title,description,imagName,align,}: ServiceCardProps) {

  const imagPath = `/images/${imagName}`;
  
  const alignmentClasses =
    align === "left" ? "mr-auto" : "ml-auto text-right";


  const flexDirection = align === "left" ? "flex-row" : "flex-row-reverse";

  return (
    <div
      className={`w-full md:w-11/12 lg:w-10/12 xl:w-9/12 ${alignmentClasses} mb-12 last:mb-0`}
    >
      <div
        
        className={`flex ${flexDirection}  items-center bg-white rounded-3xl shadow-2xl border border-gray-300 overflow-hidden min-h-[494px]`}
      >
      
        <div className="w-390px h-400px shrink-0 p-[70px]">
        <img
          src={imagPath}
          alt={title}
          className="w-80 h-80 object-cover rounded-2xl"
          
          onErrorCapture={(e) =>{
            (e.target as HTMLImageElement).onerror=null;
            (e.target as HTMLImageElement).src="https://placehold.co/600x400/CCCCCC/FFFFFF?text=Error"
          }}
          />
        </div>
        
        
        <div className="text-left w-full  py-[79px] px-[70px] flex flex-col justify-center">
          <h3 className="text-2xl font-extrabold text-left text-bg-green mb-3">{title}</h3>
          <p className="text-bg-green tex-right">{description}</p>
        </div>
      </div>
    </div>
  );
}