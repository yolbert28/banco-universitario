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
      className="bg-accent active:bg-dark-accent font-bold text-xl text-primary py-4 w-min rounded-md whitespace-nowrap px-[px}]"
      style={{ paddingLeft: px, paddingRight: px }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
