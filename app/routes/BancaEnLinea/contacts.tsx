import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  updateContact,
  addContact,
  deleteContact,
  selecContacts,
  selecContactLoading,
  selectContactTotal,
} from "~/redux/contact/contactSlice";
import type { AppDispatch, rootState } from "~/redux/reduxStore";
import { IconSearch, IconCheck } from "@tabler/icons-react";

import Pagination from "~/components/BancaEnLinea/PaginationContact";
import ContactTable from "~/components/BancaEnLinea/ContactTable";
import ContactModal from "~/components/BancaEnLinea/ContactModal";
import type { Contact } from "~/components/BancaEnLinea/ContactModal";
import Message from "~/components/BancaEnLinea/Message";
import PrimaryButton from "~/components/PrimaryButton";
import SecondaryButton from "~/components/SecondaryButton";
import InputField from "~/components/BancaEnLinea/InputField";
import DarkInteractionLayout from "~/components/BancaEnLinea/DarkInteractionLayout";


const Contacts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactsData = useSelector((state: rootState) => selecContacts(state));
  const contacts = Array.isArray(contactsData) ? contactsData : [];
  const loading = useSelector((state: rootState) => selecContactLoading(state));
  const totalContacts = useSelector((state: rootState) => selectContactTotal(state));

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list'); 
  const contactsPerPage = 5;

  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);

  const [currentContact, setCurrentContact] = useState<Contact>({
    alias: "",
    account_number: "",
    description: "",
  });

  useEffect(() => {
    dispatch(fetchContacts({
      alias: searchTerm,
      page: currentPage,
      page_size: contactsPerPage
    }));
  }, [dispatch, currentPage, searchTerm]);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
        setTimeout(() => setErrorMessage(""), 500);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showError]);

  const paginateNext = () => {
    if (currentPage * contactsPerPage < totalContacts) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleOpenDetail = (contact: Contact) => {
    setCurrentContact(contact);
    setViewMode('detail'); 
  };

  const handleOpenConfirm = (contact: Contact) => {
    setContactToDelete(contact);
    setShowConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    if (contactToDelete?.id) {
      const result = await dispatch(deleteContact(contactToDelete.id.toString()));
      if (result.meta.requestStatus === "fulfilled") {
        setShowConfirmDelete(false);
        setShowDeleteSuccess(true);
        setContactToDelete(null);
        dispatch(fetchContacts({
          alias: searchTerm,
          page: currentPage,
          page_size: contactsPerPage
        }));
      }
    }
  };

  const handleAddOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    let result: any;

    if (isEditing) {
      if (!currentContact.id) return;
      result = await dispatch(
        updateContact({
          id: currentContact.id.toString(),
          contact: currentContact,
        })
      );
    } else {
      result = await dispatch(addContact(currentContact));
    }

    if (result && result.meta && result.meta.requestStatus === "fulfilled") {
      setShowAddModal(false);
      setShowSuccessModal(true);
      setShowError(false);
      setViewMode('list'); 
      setCurrentContact({ alias: "", account_number: "", description: "" });
      dispatch(fetchContacts({
        alias: searchTerm,
        page: currentPage,
        page_size: contactsPerPage
      }));
    } else if (result && result.payload) {
      setErrorMessage(result.payload as string);
      setShowError(true);
    }
  };

  const handleCloseAddModal = () => {
    if (!isEditing) {
      setCurrentContact({ alias: "", account_number: "", description: "" });
    }
    setShowAddModal(false);
    setShowError(false);
  };

  return (
    <>
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

      {showConfirmDelete && (
        <DarkInteractionLayout onClose={() => setShowConfirmDelete(false)}>
          <div className="bg-[#004D4D] w-full max-w-[580px] rounded-2xl p-10 flex flex-col items-center">
            <h3 className="text-xl font-bold text-accent mb-4">Eliminar contacto</h3>
            <p className="text-accent text-center mb-10 text-lg">¿Está seguro que desea eliminar al contacto?</p>
            <div className="flex gap-4 w-full">
              <PrimaryButton 
              text="Eliminar" 
              maxWidth={true} 
              onClick={handleConfirmDelete} 
              />
              <SecondaryButton 
              text="Cancelar" 
              onClick={() => 
              setShowConfirmDelete(false)} 
              />
            </div>
          </div>
        </DarkInteractionLayout>
      )}

      {showDeleteSuccess && (
        <Message
          title="Contacto eliminado"
          message="El contacto fue eliminado exitosamente"
          icon={<IconCheck size={28} className="text-accent" />}
          onClick={() => setShowDeleteSuccess(false)}
        />
      )}

      {showSuccessModal && (
        <Message
          title={isEditing ? "Contacto actualizado" : "Contacto registrado"}
          message={isEditing ? "El contacto fue actualizado correctamente" : "El contacto fue registrado correctamente"}
          icon={<IconCheck size={28} className="text-accent" />}
          onClick={() => setShowSuccessModal(false)}
        />
      )}

      {viewMode === 'list' ? (
        <div className="flex flex-col items-center justify-center">
          <div className="w-[660px] px-16 pt-4 pb-8 my-8 bg-primary rounded-3xl shadow-md border border-gray-100 flex flex-col">
            <h2 className="text-[32px] font-bold text-bg-light-blue mb-5 text-center">Contactos</h2>
            <div className="w-full mx-auto mb-5">
              <div className="relative flex w-full max-w-[549px] mx-auto gap-4 ">
                <InputField
                  name="search"
                  type="text"
                  placeholder="Alias"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="w-full max-w-[549px] mx-auto h-[452px]">
              {contacts.length === 0 && !loading ? (
                <div className="flex flex-col items-center justify-center h-full bg-white/50 rounded-3xl border-2 border-dashed border-primary/20 mx-auto max-w-[549px]">
                  <p className="text-primary text-xl font-medium italic">
                    No se poseen contactos registrados
                  </p>
                </div>
              ) : (
                <div className="w-full max-w-[549px] bg-white mx-auto h-full flex flex-col justify-between">
                  <ContactTable
                    contacts={contacts}
                    onEdit={handleOpenDetail}
                    onDelete={handleOpenConfirm}
                    loading={loading}
                  />
                  <div className="w-full bg-white">
                    <Pagination
                      nextPage={paginateNext}
                      prevPage={paginatePrev}
                      fromQuantity={totalContacts === 0 ? 0 : (currentPage - 1) * contactsPerPage + 1}
                      toQuantity={Math.min(currentPage * contactsPerPage, totalContacts)}
                      quantity={totalContacts}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5 flex justify-center w-full max-w-[418px] mx-auto">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setCurrentContact({ alias: "", account_number: "", description: "" });
                  setShowAddModal(true);
                }}
                className="max-w-[418px] mx-auto bg-accent text-primary px-14 py-4 rounded font-bold hover:scale-101"
              >
                Añadir Contacto Nuevo
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ContactDetailCard 
          contact={currentContact}
          onEdit={() => {
            setIsEditing(true);
            setShowAddModal(true);
          }}
          onBack={() => 
            setViewMode('list')
          }
        />
      )}
    </>
  );
};

const ContactDetailCard = ({ contact, onEdit, onBack }: { contact: Contact; onEdit: () => void; onBack: () => void }) => {
  
  const formatDate = (dateString?: string) => {
    if (!dateString) return "No disponible";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(date).replace(',', '');
  };

  return (
    <div className="flex flex-col w-full px-8 py-8 box-border items-center overflow-x-hidden">
      <div className="w-full max-w-150 bg-white rounded-3xl p-8 shadow-xl">
        <div className="text-center mb-3">
          <h2 className="text-3xl font-extrabold text-primary">
            Datos de contacto
          </h2>
        </div>

        <div className="font-bold text-black p-4">
          <p><span>Número de cuenta:</span> {contact.account_number} </p>
          <p><span>Alias:</span> {contact.alias}</p>
          <p><span>Descripción:</span> {contact.description || "Sin descripción"}</p>
          <p><span>Fecha de creación:</span> {formatDate(contact.created_at)}</p>
        </div>

        <div className="flex gap-8 p-4">
          <button 
            onClick={onEdit}
            className="bg-primary font-bold text-sm text-white py-4 rounded-md whitespace-nowrap px-3 sm:px-3 xl:px-20 lg:px-16 md:px-16 hover:opacity-90"
          >
            Editar contacto
          </button>
          
          <button 
            onClick={onBack}
            className="flex-1 bg-primary text-sm py-4 text-white font-bold rounded-md whitespace-nowrap transition-all px-3 hover:opacity-90"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;