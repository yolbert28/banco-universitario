import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserValue } from '~/redux/user/userSlice';
import type { rootState } from '~/redux/reduxStore';
import { IconCopy, IconCheck } from '@tabler/icons-react';

const PersonalData: React.FC = () => {
  const user = useSelector((state: rootState) => selectUserValue(state));
  const [copied, setCopied] = useState(false);

  const fullName = `${user?.name} ${user?.lastName}`;

  const handleCopy = (text: string | undefined) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate= (dateString: string | undefined) =>{
    if (!dateString) return "No disponible";
    
    const date = new Date(dateString);

    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC' 
    }).format(date);

  };

  return (
    <div className="flex flex-col w-full px-8 py-8 box-border items-center overflow-x-hidden">
      
      <div className="w-full max-w-140 bg-white rounded-3xl p-8 shadow-xl">
        
        <div className="text-center mb-3">
          <h2 className="text-3xl font-extrabold text-primary">
            Datos Personales
          </h2>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-row items-center   ">
            <div className="flex flex-row items-center  ">
              <span className="font-bold text-black  p-1">
                Número de Cuenta: {user?.accountNumber || "No disponible"}
            </span>
    
              <button 
                onClick={() => handleCopy(user?.accountNumber)}
                className={` rounded-lg transition-all ${copied ? 'bg-green-500 text-white' : 'text-primary hover:bg-secondary/20'}`}
              >
                {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
              </button>
            </div>
          </div>
          
           <DataField 
            label="Documento:" 
            value={user?.documentNumber} 
          />
          <DataField 
            label="Nombre:" 
            value={fullName} 
          />
          <DataField 
            label="Correo electronico:" 
            value={user?.email} 
          />
           <DataField 
            label="Teléfono:" 
            value={user?.phone} 
          />
          <DataField 
            label="Fecha Nacimiento:" 
            value={formatDate(user?.birthDate)} 
          />
        </div>
      </div>
    </div>
  );
};

const DataField = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex flex-row items-center ">
    <span className=" font-bold text-black p-1">
      {label}  {value || "No registrado"}
    </span>
    
  </div>
);

export default PersonalData;

