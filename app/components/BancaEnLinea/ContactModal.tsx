import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import DarkInteractionLayout from "./DarkInteractionLayout";
import InputField from "./InputField";

export interface Contact {
  id?: string;
  alias: string;
  account_number: string;
  description?: string;
  created_at?: string; 
  updated_at?:string;
}
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  contact: Contact;
  setContact: (contact: any) => void;
  showError: boolean;
  errorMessage: string;
  isEditing: boolean;
  showBg?: boolean;
}

export default function ContactModal({
  isOpen,
  onClose,
  onSubmit,
  contact,
  setContact,
  showError,
  errorMessage,
  isEditing,
  showBg = true
}: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <DarkInteractionLayout onClose={onClose} showBg={showBg}>
      <div className="bg-primary z-60 items-center w-full max-w-[620px] rounded-2xl p-8  flex flex-col animate-in fade-in zoom-in duration-300">
        <h3 className="text-2xl font-bold text-accent mb-8 text-center ">
          {isEditing ? "Editar contacto" : "Guardar contacto"}
        </h3>

        {showError && (
          <div className="w-full bg-red/20 border-l-4 border-red text-white p-4 mb-6 rounded-r-xl animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">{errorMessage}</span>
            </div>
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-4 max-w-[500px]"
        >
          {/*numero de cuenta */}
          <div className="flex flex-col gap-2">
            <label className="text-white  font-medium ml-1">
              Número de cuenta:
            </label>
            <InputField
              name="account number"
              type="text"
              placeholder="0000-0000-00-0000000000"
              disabled={isEditing}
              value={contact.account_number}
              onChange={(e) =>
                setContact({ ...contact, account_number: e.target.value })
              }
            />
          </div>

          {/*Alias */}
          <div className="flex flex-col gap-2">
            <label className="text-white  font-medium ml-1">Alias:</label>
            <InputField
              name="alias"
              required
              type="text"
              placeholder="Ingrese alias..."
              value={contact.alias}
              onChange={(e) =>
                setContact({ ...contact, alias: e.target.value })
              }
            />
          </div>

          {/*Descripción */}
          <div className="flex flex-col gap-2">
            <label className="text-white  font-medium ml-1">Descripción:</label>
            <InputField
              name="description"
              type="text"
              placeholder="Ingrese descripcion..."
              lineNumber={3}
              value={
                contact.description === undefined ? "" : contact.description
              }
              onChange={(e) =>
                setContact({ ...contact, description: e.target.value })
              }
            />
          </div>

          {/*botones  */}
          <div className="flex flex-row justify-center gap-6">
            <PrimaryButton
              text={isEditing ? "Actualizar" : "Guardar contacto"}
              textLarge={false}
              maxWidth={true}
              typeSubmit={true}
            />
            <SecondaryButton
              text="Cancelar"
              textLarge={false}
              onClick={onClose}
            />
          </div>
        </form>
      </div>
    </DarkInteractionLayout>
  );
}
