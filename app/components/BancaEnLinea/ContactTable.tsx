import { IconEdit, IconTrash } from '@tabler/icons-react';

export interface Contact {
  id?: string;
  alias: string;
  account_number: string;
  description?: string;
}

interface ContactTableProps {
  contacts: Contact[];
  onEdit: (contact: Contact) => void;
  onDelete: (contact: Contact) => void;
}

export default function ContactTable({ contacts, onEdit, onDelete }: ContactTableProps) {
  return (
    <div className="flex-1 overflow-hidden">
      <table className="w-full max-w-[549px] mx-auto ">
        <thead>
          <tr className="bg-white mx-auto">
            <th className="py-3 px-12 text-left text-black  border-b-2 border-primary text-[20px] w-2/3">
              Nombre
            </th>
            <th className="py-3 px-12 text-center text-black border-b-2  border-primary text-[20px] w-1/3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-primary mx-auto">
          {contacts.map((contact) => (
            <tr key={contact.id} className=" mx-auto border-b-2 border-primary bg-white transition-colors group">
              <td className="py-3 px-12 text-black  text-[16px]  tracking-tight  ">
                {contact.alias}
              </td>
              <td className="py-3 px-3 ">
                <div className="flex justify-center gap-4 bg-white">
                  <button 
                    onClick={() => onEdit(contact)}
                    className="p-3 bg-primary  text-white rounded-xl hover:scale-110 transition-all shadow-sm">
                    <IconEdit size={20} />
                  </button>
                  <button 
                    onClick={() => contact.id && onDelete(contact)}
                    className="p-3 bg-red/90 text-white rounded-xl hover:scale-110 transition-all shadow-sm"
                  >
                    <IconTrash size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}