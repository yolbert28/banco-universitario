import { IconX } from '@tabler/icons-react';

export interface Contact {
  id?: string;
  alias: string;
  account_number: string;
  description?: string;
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
}

export default function ContactModal({ 
  isOpen, onClose, onSubmit, contact, setContact, showError, errorMessage, isEditing 
}: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/82 backdrop-blur-xs flex justify-center items-center z-[120] p-4">
      <div className="bg-primary items-center w-full max-w-[620px] rounded-[1rem] p-8  flex flex-col animate-in fade-in zoom-in duration-300">

        <h3 className="text-2xl font-bold text-accent mb-8 text-center ">
          {isEditing ? 'Editar contacto' : 'Guardar contacto'}
        </h3>

         {showError && (
            <div className="w-full bg-red/20 border-l-4 border-red text-white p-4 mb-6 rounded-r-xl animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{errorMessage}</span>
              </div>
            </div>
          )}

        <form onSubmit={onSubmit} className="w-full flex flex-col gap-6 max-w-[500px]">
            
          {/*numero de cuenta */}
          <div className="flex flex-col gap-2">
            <label className="text-white  font-medium ml-1">
                Número de cuenta:
            </label>
            <input 
              type="text" 
              placeholder="0000-0000-00-0000000000"
              disabled={isEditing} 
              className={`w-full p-3 rounded-xl outline-none text-bg-green border-b-8 border-[#49BEB7] transition-all
                ${isEditing ? 'bg-gray-300 opacity-70 cursor-not-allowed' : 'bg-bg-light-blue'}`}
              value={contact.account_number} 
              onChange={(e) => setContact({...contact, account_number: e.target.value})} 
            />
          </div>

          {/*Alias */}
          <div className="flex flex-col gap-2">
            <label className="text-white  font-medium ml-1">
                Alias:
            </label>
            <input 
              required 
              type="text" 
              placeholder="Ingrese alias..."
              className="w-full p-3 rounded-xl bg-bg-light-blue outline-none text-bg-green  border-b-8 border-[#49BEB7]" 
              value={contact.alias} 
              onChange={(e) => setContact({...contact, alias: e.target.value})} 
            />
          </div>

         {/*Descripción */} 
          <div className="flex flex-col gap-2">
            <label className="text-white  font-medium ml-1">
               Descripción:
              </label>
              <textarea 
                placeholder="Ingrese descripcion..."
                rows={3} 
                className="w-full p-3 rounded-xl bg-bg-light-blue outline-none text-bg-green border-b-8 border-[#49BEB7]" 
                value={contact.description} 
                onChange={(e) => setContact({...contact, description: e.target.value})} 
              />
          </div>

           {/*botones  */} 
          <div className="flex flex-row justify-center gap-6 mt-6">
            <button 
                type="submit" 
                className="flex-1 bg-accent text-primary py-4 rounded-xl font-bold  hover:brightness-110 transition-all shadow-lg active:scale-95">
              {isEditing ? 'Actualizar' : 'Guardar contacto'}
            </button>
            <button type="button" 
                onClick={onClose} 
                className="flex-1 bg-[#F2A154]/40 border-2 border-[#F2A154] text-white py-4 rounded-xl font-bold  hover:bg-white/5 transition-all">
                Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}