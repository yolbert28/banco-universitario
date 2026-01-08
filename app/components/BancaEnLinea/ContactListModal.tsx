import { IconSearch } from "@tabler/icons-react";
import DarkInteractionLayout from "./DarkInteractionLayout";
import InputField from "./InputField";
import PrimaryButton from "../PrimaryButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, selecContacts, selecContactLoading, addContact } from "~/redux/contact/contactSlice";
import type { AppDispatch, rootState } from "~/redux/reduxStore";
import ContactModal, { type Contact } from "./ContactModal";

interface ContactListModalProps {
  onClose: () => void;
  onSelect?: (contact: Contact) => void;
}

export default function ContactListModal({ onClose, onSelect }: ContactListModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  
  // Estado local para manejar la lista acumulada (scroll infinito)
  const [displayedContacts, setDisplayedContacts] = useState<Contact[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  const loading = useSelector((state: rootState) => selecContactLoading(state));

  const [showAddModal, setShowAddModal] = useState(false);
  const [newContact, setNewContact] = useState<Contact>({ alias: "", account_number: "", description: "" });
  const [addError, setAddError] = useState(false);
  const [addErrorMessage, setAddErrorMessage] = useState("");

  // Cargar contactos al cambiar página o término de búsqueda
  useEffect(() => {
    const loadContacts = async () => {
      const pageSize = 20;
      const result = await dispatch(fetchContacts({ 
        alias: searchTerm, 
        page: page, 
        page_size: pageSize 
      }));

      if (fetchContacts.fulfilled.match(result)) {
        const newContacts = Array.isArray(result.payload) ? result.payload : result.payload.data || [];
        
        if (page === 1) {
          setDisplayedContacts(newContacts);
        } else {
          setDisplayedContacts(prev => [...prev, ...newContacts]);
        }

        // Si recibimos menos registros que el tamaño de página, no hay más datos
        if (newContacts.length < pageSize) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      }
    };

    loadContacts();
  }, [dispatch, page, searchTerm]);

  // Reiniciar paginación cuando cambia la búsqueda
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
    setHasMore(true);
  };

  // Manejador de scroll para cargar más
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    // Si llegamos al final (con un margen de error de 5px) y no estamos cargando y hay más datos
    if (scrollHeight - scrollTop <= clientHeight + 5 && !loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  const handleAddContact = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(addContact(newContact));
    
    if (result.meta.requestStatus === "fulfilled") {
        setShowAddModal(false);
        setNewContact({ alias: "", account_number: "", description: "" });
        setAddError(false);
        // Recargar la lista desde cero
        setPage(1);
        setHasMore(true);
        dispatch(fetchContacts({ alias: searchTerm, page: 1, page_size: 20 }));
    } else if (result.payload) {
        setAddErrorMessage(result.payload as string);
        setAddError(true);
    }
  };

  return (
    <DarkInteractionLayout onClose={onClose}>
      <div className="bg-[#004D4D] w-full max-w-[580px] rounded-2xl p-10 flex flex-col gap-4 items-center ">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-accent">
            Selecciona un contacto
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 w-full">
          <InputField
            name="search"
            type="text"
            placeholder="Alias"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          
        </div>
        <div className="w-full bg-light-blue h-[300px] pt-2 rounded-xl overflow-y-scroll custom-scrollbar" onScroll={handleScroll}>
          {loading && page === 1 ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-primary font-bold">Cargando...</p>
            </div>
          ) : displayedContacts.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-primary font-bold">No se encontraron contactos</p>
            </div>
          ) : (
            <>
              {displayedContacts.map((contact, index) => (
                <div key={`${contact.id}-${index}`} className="py-2 px-4 hover:bg-primary/10 cursor-pointer transition-colors text-primary font-medium" onClick={() => onSelect && onSelect(contact)}>
                  {contact.alias}
                </div>
              ))}
              {loading && page > 1 && (
                <div className="py-2 text-center text-primary text-sm">Cargando más...</div>
              )}
            </>
          )}
        </div>
        <PrimaryButton
          text="Agregar nuevo contacto"
          textLarge={false}
          px={80}
          onClick={() => setShowAddModal(true)}
        />
      </div>
      <ContactModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddContact}
        contact={newContact}
        setContact={setNewContact}
        showError={addError}
        errorMessage={addErrorMessage}
        isEditing={false}
        showBg = {false}
      />
    </DarkInteractionLayout>
  );
}
