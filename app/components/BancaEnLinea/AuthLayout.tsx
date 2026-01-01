import React, { type ReactNode} from 'react';
import { ROUTES } from '~/constans'; 

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
  isLogin: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children, isLogin }) => {
    const rNavigationBar = "Banco Universitario-RIF: G-70054489-7 Copyright © 2025. Todos los derechos reservados";
    
  
    return (
        <div className="min-h-screen flex flex-col relative bg-[url('/images/Inicio_sesion.webp')] bg-center bg-cover" >
            <div className="absolute inset-0 bg-[#001C1F] opacity-63 z-0"></div>
            <div className="flex grow items-center justify-center p-4 relative z-10">
          
                <div className="bg-tertiary w-[608px] h-auto p-5 rounded-2xl shadow-2xl relative overflow-hidden"> 
                    <div className="text-center mb-15   p-6 " >

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="text-center mb-6">

                                <img src="/images/logo.png" alt="Logo Banco Universitario" className=" h-16  w-[441px]  mb-5" />
                                
                                <div className="flex items-center justify-center space-x-1 ">
                                    
                                    <div className="w-full h-1 bg-secondary "></div> 
                                    <h2 className="text-xl text-primary font-semibold">{title}</h2>
                                    <div className="w-full h-1 bg-secondary "></div>

                                </div>
                            </div>

                            {children} 
                        
                            <div className="text-center mt-8 text-sm relative z-40"> 
                                {isLogin ? (
                                    
                                    <p className='text-[#E5FFFD]'> 
                                        ¿Eres cliente nuevo? <a href={ROUTES.REGISTER} className="text-secondary hover:text-accent font-semibold">regístrate aquí</a>
                                    </p>
                                ) : (
                                    <p className='text-bg-light-blue'>
                                        ¿Ya tienes cuenta? <a href={ROUTES.LOGIN} className="text-secondary hover:text-accent font-semibold">Inicia sesión</a>
                                    </p>
                                )}
                            </div>   
                        </div> 
                    </div>
                </div>
            </div>
            <div className='w-full bg-primary text-dirty-white text-center py-5 relative z-10'>
                {rNavigationBar}
            </div>
        </div>
    );
};

export default AuthLayout;