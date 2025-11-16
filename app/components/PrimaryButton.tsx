interface PrimaryButtonProps {
  text: string;
  px?: number;
  onClick?: () => void;
}

export default function PrimaryButton({
  text,
  px = 85,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      className="bg-accent active:bg-dark-accent font-bold text-lg md:text-lg lg:text-xl xl:text-xl text-primary py-4 w-full lg:w-min xl:w-min rounded-md whitespace-nowrap xl:px-20 lg:px-16 md:px-16"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
