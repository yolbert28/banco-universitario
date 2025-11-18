interface PrimaryButtonProps {
  text: string;
  px?: number;
  onClick?: () => void;
}

export default function PrimaryButton({
  text,
  px = 50,
  onClick,
}: PrimaryButtonProps) {
  
  const paddingX = px;

  return (
    <button
      className="bg-accent active:bg-dark-accent font-bold text-lg md:text-lg lg:text-xl xl:text-xl text-primary py-4 w-full lg:w-min xl:w-min rounded-md whitespace-nowrap px-3 sm:px-3 xl:px-20 lg:px-16 md:px-16"
      style={{paddingLeft: px, paddingRight: px}}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
