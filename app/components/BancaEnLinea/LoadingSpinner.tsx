import { useState } from "react";

export default function LoadingSpinner() {
  return (
    // CONTENEDOR:
    // fixed: Se fija a la pantalla.
    // top-4: Un poco separado del techo.
    // left-1/2 y -translate-x-1/2: Truco estándar para centrar horizontalmente perfecto.
    // z-50: Para que flote encima de todo.
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full p-4">
      
      {/* SPINNER:
          animate-spin: La animación de giro nativa de Tailwind.
          rounded-full: Círculo perfecto.
          h-8 w-8: Tamaño pequeño.
          border-b-2 y border-blue-500: El color que gira.
      */}
      <svg 
        className="animate-spin h-10 w-10 text-bg-green" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        {/* Círculo de fondo tenue (opcional, para que se vea el carril) */}
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        ></circle>
        
        {/* El trazo que gira (La parte "bonita") */}
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {/* <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green"></div> */}
    </div>
  );
};
