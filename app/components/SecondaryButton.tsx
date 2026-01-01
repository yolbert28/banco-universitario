interface SecondaryButtonProps {
  text: string;
  px?: number;
  onClick?: () => void;
  textLarge?: boolean;
  maxWidth?: boolean;
}

export default function SecondaryButton({
  text,
  px = 50,
  onClick,
  textLarge= true,
  maxWidth=false
}: SecondaryButtonProps) {

  const textSize = textLarge ? "text-xl" : "text-sm";
  const width = maxWidth ?  "w-full" : "w-full lg:w-min xl:w-min"

  return (
    <button
      className={`bg-accent-opacity active:bg-dark-accent-opacity 
         border-2 border-accent text-dirty-white font-bold text-sm text-Secondary py-4 rounded-md whitespace-nowrap px-3 sm:px-3 xl:px-20 lg:px-16 md:px-16 ${textSize} ${width}`}
      style={{paddingLeft: px, paddingRight: px}}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
