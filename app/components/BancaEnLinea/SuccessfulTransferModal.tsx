import PrimaryButton from "../PrimaryButton";
import DarkInteractionLayout from "./DarkInteractionLayout";

interface SuccessfulTransferModalProps {
  created_at: string;
  account_number: string;
  description: string;
  amount: number;
  onClose: () => void;
}

export default function SuccessfulTransferModal({
  created_at,
  account_number,
  description,
  amount,
  onClose,
}: SuccessfulTransferModalProps) {
  const date = new Date(created_at);
  const format = date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <DarkInteractionLayout onClose={onClose}>
      <div className="flex flex-col gap-6 bg-primary py-8 px-12 rounded-xl w-[550px] justify-center">
        <h2 className="text-accent font-bold text-center text-xl">
          Transferencia Exitosa
        </h2>
        <div className="text-accent text-lg">
          <strong>Destino:</strong> {account_number}
        </div>
        <div className="text-accent text-lg">
          <strong>Fecha:</strong> {format}
        </div>
        <div className="text-accent text-lg">
          <strong>Descripción:</strong> {description}
        </div>
        <div className="text-accent text-lg">
          <strong>Monto: {amount}</strong>
        </div>
        <div className="w-full flex justify-center">
          <PrimaryButton
            text="Cerrar"
            textLarge={false}
            px={80}
            onClick={onClose}
          />
        </div>
      </div>
    </DarkInteractionLayout>
  );
}
