
// app/routes/BancaEnLinea/transfers.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconCheck, IconX } from "@tabler/icons-react";
import InputField from "~/components/BancaEnLinea/InputField";
import PrimaryButton from "~/components/PrimaryButton";
import SecondaryButton from "~/components/SecondaryButton";
import Message from "~/components/BancaEnLinea/Message";
import LoadingSpinner from "~/components/BancaEnLinea/LoadingSpinner";
import {
  makeTransfer,
  resetTransferState,
  selectTransferError,
  selectTransferLoading,
  selectTransferSuccess,
} from "~/redux/transfer/transferSlice";
import type { AppDispatch, rootState } from "~/redux/reduxStore";
import type { TransferValues } from "~/api/modules/Movements";
import { verifyAccountAPI } from "~/api/modules/User";

export default function Transfers() {
  const dispatch = useDispatch<AppDispatch>();
  
  // Estado del formulario
  const [formData, setFormData] = useState<TransferValues>({
    account_number: "",
    amount: 0,
    description: "",
  });
  
  // Estado para manejo de input de monto como string para mejor UX
  const [amountInput, setAmountInput] = useState("");
  const [isValidAccount, setIsValidAccount] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // Selectores de Redux
  const loading = useSelector((state: rootState) => selectTransferLoading(state));
  const error = useSelector((state: rootState) => selectTransferError(state));
  const success = useSelector((state: rootState) => selectTransferSuccess(state));

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Efecto para manejar el éxito de la transacción
  useEffect(() => {
    if (success) {
      setShowSuccessModal(true);
      handleClear(); // Limpiar formulario al tener éxito
    }
  }, [success]);

  // Efecto para manejar errores
  useEffect(() => {
    if (error) {
      setShowErrorModal(true);
    }
  }, [error]);

  // Efecto para verificar la cuenta cuando el usuario escribe
  useEffect(() => {
    setIsValidAccount(false);
    if (!formData.account_number || formData.account_number.length !== 20) {
      setIsVerifying(false);
      return;
    }
    setIsVerifying(true);

    const verifyAccount = async () => {
      try {
        const response = await verifyAccountAPI(formData.account_number);
        if (response.data && (!response.errors || response.errors.length === 0)) {
          setIsValidAccount(true);
        } else {
          setIsValidAccount(false);
        }
      } catch (error) {
        setIsValidAccount(false);
      } finally {
        setIsVerifying(false);
      }
    };

    const timeoutId = setTimeout(verifyAccount, 500); // Debounce de 500ms

    return () => clearTimeout(timeoutId);
  }, [formData.account_number]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "amount") {
      // Permitir solo números y un punto decimal
      if (/^\d*\.?\d*$/.test(value)) {
        setAmountInput(value);
        setFormData(prev => ({ ...prev, amount: parseFloat(value) || 0 }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (formData.account_number && formData.amount > 0 && formData.description && isValidAccount) {
      dispatch(makeTransfer(formData));
    }
  };

  const handleClear = () => {
    setFormData({
      account_number: "",
      amount: 0,
      description: "",
    });
    setAmountInput("");
    setIsValidAccount(false);
  };

  const handleCloseModals = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
    dispatch(resetTransferState());
  };

  return (
    <>
      {loading && <LoadingSpinner />}

      {/* Modal de Transferencia Exitosa */}
      {showSuccessModal && (
        <Message
          title="Transferencia Exitosa"
          message="La transferencia se ha realizado correctamente."
          icon={<IconCheck size={48} className="text-accent" />}
          onClick={handleCloseModals}
        />
      )}

      {/* Modal de Error */}
      {showErrorModal && (
        <Message
          title="Error en la transacción"
          message={error || "Ocurrió un error inesperado."}
          icon={<IconX size={48} className="text-red-500" />}
          onClick={handleCloseModals}
        />
      )}
      
      <div className="flex justify-center items-center w-full h-full relative">
        <div className="bg-primary w-[500px] h-auto px-8 py-6 flex flex-col rounded-2xl gap-3 shadow-xl">
          <div className="flex flex-row gap-2.5 justify-center items-center w-full mb-4">
            <div className="w-full h-0.5 bg-accent rounded-full" />
            <h1 className="text-2xl font-bold text-accent">Transferencias</h1>
            <div className="w-full h-0.5 bg-accent rounded-full" />
          </div>

          
          <div className="flex flex-col gap-1 text-dirty-white">
            <p className="text-dirty-white font-medium">Destinatario:</p>
            <div className="flex flex-row justify-center items-center gap-1 text-dirty-white">
              <InputField
                name="account_number"
                type="text"
                placeholder="Número de cuenta destino"
                value={formData.account_number}
                onChange={handleChange}
                required
              />
              <button className="bg-accent hover:bg-dark-accent h-[50px] aspect-square rounded-xl flex justify-center items-center transition-colors">
                <img src="/images/contacts.svg" alt="Contactos" />
              </button>
            </div>
            <div className="h-4 text-xs font-medium pl-2">
              {isVerifying ? (
                <span className="text-yellow-400">Verificando...</span>
              ) : formData.account_number.length > 0 ? (
                isValidAccount ? <span className="text-green-400">Cuenta verificada</span> : <span className="text-red-400">Cuenta no encontrada</span>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-1 text-dirty-white">
            <p className="text-dirty-white font-medium">Descripción:</p>
            <InputField
              name="description"
              type="text"
              placeholder="Motivo de la transferencia"
              value={formData.description}
              onChange={handleChange}
              required
              lineNumber={3}
            />
          </div>


          <div className="flex flex-col gap-1 text-dirty-white">
            <p className="text-dirty-white font-medium">Monto:</p>
            <InputField
              name="amount"
              type="text"
              placeholder="0.00"
              value={amountInput}
              onChange={handleChange}
              required
            />
          </div>

          <div className="h-4" />
          
          <div className="flex flex-row gap-4 items-center justify-center mt-2">

            <PrimaryButton
              text="Realizar transferencia"
              textLarge={false}
              maxWidth={true}

              onClick={handleSubmit}
              disabled={!isValidAccount || loading}
            />
            <SecondaryButton 
              text="Limpiar" 
              textLarge={false} 
              onClick={handleClear}
            />
          </div>
        </div>
      </div>
    </>
  );
}
