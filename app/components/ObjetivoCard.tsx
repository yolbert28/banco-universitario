interface ObjetivoCardProps {
  children?: React.ReactNode;
  direction?: "left" | "right" | "center";
}


export default function ObjetivoCard({children, direction = "center"}:ObjetivoCardProps) {


  const directionItem = direction === "left" ?  "rounded-t-2xl rounded-bl-2xl " : direction === "right" ? "rounded-tr-2xl rounded-b-2xl " : "rounded-2xl";

  const directionImage = direction === "left" ?  "bottom-0 -right-[10px] " : direction === "right" ? "top-0 -left-[10px] rotate-180" : "hidden";

  return (
    <div className={`w-[90%] min-[1100px]:max-w-[500px] max-[1100px]:rounded-2xl h-[250px] bg-bg-green flex flex-col justify-center items-center px-6 ${directionItem} relative`} 
        style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)' }}>
      <img className={`absolute max-[1100px]:hidden ${directionImage}`} src="/images/decorator.png" alt="" />
      <p className="max-w-[600px] max-h-[250px] text-center leading-tight text-xl lg:text-2xl text-bg-light-blue">
        {children}
      </p>
    </div>
  );
}
