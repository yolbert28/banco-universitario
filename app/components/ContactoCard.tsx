import PrimaryButton from "./PrimaryButton";

interface ContactoCardProps {
  reverse?: boolean;
  children?: React.ReactNode;
}

export default function ContactoCard({ reverse = false, children = <></> }: ContactoCardProps) {
  const rowReverse = reverse ? "flex-row-reverse" : "flex-row";

  const roundedCorner = reverse
    ? "rounded-t-3xl rounded-br-3xl"
    : "rounded-b-3xl rounded-tl-3xl";

  const imageReverse = reverse 
  ? "rotate-180 -bottom-[70px] left-0"
  : "-top-[70px] right-0";

  return (
    <div className="relative w-[80%]">
      <img className={`absolute z-0 w-[95%] ${imageReverse}`} src="/images/decorador_verde.webp" alt="" />
      <div
        className={`bg-primary z-20 flex justify-center py-12 ${roundedCorner}`}
      >
        <div className={`flex ${rowReverse} z-20 w-[94%] gap-12`}>
            {children}
        </div>
      </div>
    </div>
  );
}
