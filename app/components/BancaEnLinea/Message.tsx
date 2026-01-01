import PrimaryButton from "../PrimaryButton";
import DarkInteractionLayout from "./DarkInteractionLayout";

interface MessageProps {
  title: string;
  message: string;
  onClick: () => void;
  icon: React.ReactNode;
}


export default function Message({
  title,
  message,
  onClick,
  icon
}: MessageProps) {
  return (
    <DarkInteractionLayout onClose={onClick}>
      <div className="bg-[#004D4D] w-full max-w-[580px] rounded-2xl p-10 flex flex-col items-center ">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-bold text-accent">
            {title}
          </h3>
          {icon}
        </div>
        <p className="text-accent text-center mb-10 text-lg">
          {message}
        </p>
        <PrimaryButton
          text="Cerrar"
          textLarge={false}
          px={80}
          onClick={onClick}
        />
      </div>
    </DarkInteractionLayout>
  );
}
