interface PrimaryButtonProps {
  text: string;
  px?: number;
  onClick?: () => void;
  textLarge?: boolean;
  maxWidth?: boolean;
  typeSubmit?: boolean;
  disabled?: boolean;
}

export default function PrimaryButton({
  text,
  px = 50,
  onClick,
  textLarge = true,
  maxWidth = false,
  typeSubmit = false,
  disabled = false
}: PrimaryButtonProps) {
  const textSize = textLarge ? "text-xl" : "text-sm";
  const width = maxWidth ?  "w-full" : "w-full lg:w-min xl:w-min"

  return (
    <button
      type={ typeSubmit ? "submit" : "button"}
      className={`bg-accent active:bg-dark-accent disabled:bg-black/50 font-bold text-sm text-primary py-4 rounded-md whitespace-nowrap px-3 sm:px-3 xl:px-20 lg:px-16 md:px-16 ${textSize} ${width}`}
      style={{ paddingLeft: px, paddingRight: px }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
