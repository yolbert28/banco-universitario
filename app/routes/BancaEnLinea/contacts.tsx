import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, updateContact, addContact, deleteContact, selecContacts, selecContactLoading } from '~/redux/contact/contactSlice';
import type { AppDispatch, rootState } from '~/redux/reduxStore';
import { IconSearch, IconCheck} from '@tabler/icons-react';

import LoadingSpinner from '~/components/BancaEnLinea/LoadingSpinner';
import Pagination from '~/components/BancaEnLinea/PaginationContact';
import ContactTable from '~/components/BancaEnLinea/ContactTable'; 
import ContactModal from '~/components/BancaEnLinea/ContactModal';
import type { Contact } from '~/components/BancaEnLinea/ContactModal';

const Contacts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactsData = useSelector((state: rootState) => selecContacts(state));
  const contacts = Array.isArray(contactsData) ? contactsData : [];
  const loading = useSelector((state: rootState) => selecContactLoading(state));

  // Estados
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const contactsPerPage = 5;

  // Estados de Modales
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);

  const [currentContact, setCurrentContact] = useState<Contact>({
    alias: '',
    account_number: '',
    description: ''
  });

  useEffect(() => {
    dispatch(fetchContacts());

  }, [dispatch]);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
        setTimeout(() => setErrorMessage(""), 500); 
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  // Lógica de Paginación y Filtro
  const filteredContacts = contacts.filter(contact =>
    contact.alias.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContactsList = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

  const paginateNext = () => {
    if (currentPage < Math.ceil(filteredContacts.length / contactsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleOpenEdit = (contact: Contact) => {
    setIsEditing(true);
    setCurrentContact(contact);
    setShowAddModal(true);
  };

  const handleOpenConfirm = (contact: Contact) => {
    setContactToDelete(contact);
    setShowConfirmDelete(true);
  };

const handleConfirmDelete = async () => {
  if (contactToDelete?.id) {
    const result = await dispatch(deleteContact(contactToDelete.id));
    
    if (result.meta.requestStatus === 'fulfilled') {
      setShowConfirmDelete(false); 
      setShowDeleteSuccess(true);   
      setContactToDelete(null);
    }
  }
};

  const handleAddOrUpdate = async (e: React.FormEvent) => {
  e.preventDefault();
  let result: any;

  if (isEditing) {
    if (!currentContact.id) return;
    result = await dispatch(updateContact({ 
        id: currentContact.id, 
        contact: currentContact 
    }));
  } else {
    result = await dispatch(addContact(currentContact));
  }

  if (result && result.meta && result.meta.requestStatus === 'fulfilled') {
    setShowAddModal(false);
    setShowSuccessModal(true);
    setShowError(false);
    setCurrentContact({ alias: '', account_number: '', description: '' });
  } else if (result && result.payload) {

    setErrorMessage(result.payload as string);
    setShowError(true);
  }
};

  if (loading && contacts.length === 0) return <LoadingSpinner />;

  //para limpiar el modal de registo
  const handleCloseAddModal = () => {
     setCurrentContact({ alias: '', account_number: '', description: '' });
    setShowAddModal(false);
    setShowError(false);
    setIsEditing(false);
    
  };


  return (
    <div className="relative flex flex-col w-full h-full px-8 py-6 items-center bg-dirty-white overflow-y-auto">
      <div className="w-full   max-w-[730px] bg-primary rounded-3xl p-6 shadow-md border border-gray-100 flex flex-col min-h-[600px]">
        
        <h2 className="text-[32px] font-bold text-bg-light-blue  mb-5 text-center">
          Contactos
        </h2>

        {/*Buscador de contactos */} 
        <div className="w-full max-w-[549px] mx-auto  mb-5">
          <div className="relative flex w-full w-full max-w-[549px] mx-auto gap-4 ">
            <input 
              type="text"
              placeholder="Buscar contacto..."
              className="w-full pl-6 py-2 rounded bg-bg-light-blue outline-none text-primary  font-medium shadow-inner border-b-8 border-[#49BEB7]"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
            <button className="bg-accent text-primary px-5 rounded border-b-4 border-black/10 active:border-b-0 ">
              <IconSearch size={30} stroke={2} />
            </button>
          </div>
        </div>

        <div className="w-full max-w-[549px]  mx-auto ">
        {loading ? (
          <LoadingSpinner />
        ) : filteredContacts.length === 0 ? (
          
          <div className="flex flex-col  items-center justify-center h-64 bg-white/50 rounded-3xl border-2 border-dashed border-primary/20 mx-auto max-w-[549px] mt-10">
            <p className="text-primary text-xl font-medium italic">
              No se poseen contactos registrados
            </p>
          </div>
        ) : (
          
          <>
          <div className='w-full max-w-[549px] bg-white mx-auto  ' >
            <ContactTable 
              contacts={currentContactsList} 
              onEdit={handleOpenEdit} 
              onDelete={handleOpenConfirm} 
            />
            <div className=" w-full max-w-[549px] mx-auto  bg-white">
            <Pagination 
              nextPage={paginateNext}
              prevPage={paginatePrev}
              fromQuantity={filteredContacts.length === 0 ? 0 : indexOfFirstContact + 1}
              toQuantity={Math.min(indexOfLastContact, filteredContacts.length)}
              quantity={filteredContacts.length} 
            />
            </div>
          </div>
          </>
        )}
      </div>

        {/* Bonton añadir  */} 
        <div className="mt-5 flex justify-center w-full max-w-[418px] mx-auto">
          <button 
            onClick={() => setShowAddModal(true)} 
            className="max-w-[418px] mx-auto  bg-accent text-primary px-[56px] py-4 rounded font-bold hover:scale-101  ">
            Añadir Contacto Nuevo
          </button>
        </div>
      </div>

      {/*Modal para agragar o modificar */} 
      <ContactModal 
        isOpen={showAddModal}
        isEditing={isEditing}
        contact={currentContact}
        setContact={setCurrentContact}
        showError={showError}
        errorMessage={errorMessage}
        onClose={handleCloseAddModal}
        onSubmit={handleAddOrUpdate}
      />

      {/*Modal para confirmar eliminacion*/} 
      {showConfirmDelete && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[130] p-4">
          <div className="bg-[#004D4D] w-full max-w-[685px] rounded-[1rem] p-10 flex flex-col items-center shadow-2xl  ">
            <h3 className="text-xl font-bold text-[#F2A154] mb-4">
              Eliminar contacto
              </h3>
            <p className=" text-center mb-10 text-lg text-[#F2A154]">
              ¿Está seguro que desea eliminar al contacto<span className="font-bold text-[#F2A154]"> {contactToDelete?.alias}</span>?
            </p>
            <div className="flex gap-4 w-full">
              <button 
                onClick={handleConfirmDelete}
                className="flex-1 bg-accent text-primary py-4 rounded font-bold  hover:brightness-110 transition-all shadow-lg active:scale-95"
              >
                Eliminar
              </button>
              <button 
                onClick={() => setShowConfirmDelete(false)}
                className="flex-1 bg-[#F2A154]/40 border-2 border-[#F2A154] text-white py-4 rounded font-bold  hover:bg-white/5 transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/*Modal de eliminacion exitosa */}  
      {showDeleteSuccess && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[140] p-4">
          <div className="bg-[#004D4D] w-full max-w-[580px] rounded-[1rem] p-10 flex flex-col items-center ">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-bold text-[#F2A154]">
                Contacto eliminado
              </h3>
              <IconCheck size={28} className="text-[#F2A154]" />
            </div>
            <p className="text-[#F2A154] text-center mb-10 text-lg">
              El contacto fue eliminado exitosamente
            </p>
            <button 
              onClick={() => setShowDeleteSuccess(false)}
              className="w-full max-w-[250px] bg-[#F2A154] text-[#004D4D] py-3 rounded font-bold  hover:brightness-110 transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/*Modal para registro o modificacion exitosa */}
      {showSuccessModal && (
        <div className="absolute inset-0 bg-black/82 backdrop-blur-xs flex justify-center items-center z-[120] p-4">
          <div className="bg-primary w-full max-w-150 rounded-[1rem] p-8 shadow-2xl flex flex-col items-center animate-in zoom-in duration-300">
            
            {/*Titulo*/} 
            <div className="flex items-center justify-center gap-3 p-4 text-accent">
              <h3 className="text-2xl font-bold italic">
                {isEditing? 
                'Contacto actualizado' : 
                'Contacto registrado'
                }
              </h3>
              <IconCheck stroke={2} size={32} />
            </div>

            {/*Mensaje*/} 
            <p className="text-[#F2A154] text-center mb-8 font-medium px-4">
              {isEditing? 
              'El contacto  fue actualizado correctamente':
              'El contacto fue registrado correctamente'
              }
            </p>

            {/* Boton*/}
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-75 bg-accent text-primary py-3 rounded font-bold  text-center "
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Contacts;