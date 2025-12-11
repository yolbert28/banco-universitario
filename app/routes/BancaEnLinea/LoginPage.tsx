import React, { useState, useEffect } from "react";
import AuthLayout from "~/components/BancaEnLinea/AuthLayout";
import { useNavigate } from "react-router";
import AuthButton from "~/components/BancaEnLinea/AuthButton";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUserErrorMessage, selectUserLoading, selectIsLogged, clearError } from "~/redux/user/userSlice";
import type { AppDispatch,rootState } from "~/redux/reduxStore";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // Estado desde Redux
    const loading = useSelector((state: rootState) => selectUserLoading(state));
    const errorMessage = useSelector((state: rootState) => selectUserErrorMessage(state));
    const isLogged = useSelector((state: rootState) => selectIsLogged(state));

    // Si el usuario ya está logueado, redirigir al dashboard/home
    useEffect(() => {
        if (isLogged) {
            navigate("/banca-en-linea"); 
        }
        dispatch(clearError()); 
    }, [isLogged, navigate, dispatch]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Disparamos la acción de login
        dispatch(login({ email, password }));
    };

    return (
        <AuthLayout title="Login" isLogin={true}>
           
            <div className="absolute bottom-0 left-0 w-[200%] h-full bg-primary transform origin-bottom-left rotate-[-20deg] translate-y-83 z-10"></div>
            <div className="absolute bottom-0 left-0 w-[1280%] h-2 bg-tertiary transform origin-bottom-left rotate-[-20deg] translate-y-[280px] -translate-x-[15%] z-20"></div>

           <form onSubmit={handleLogin} className="space-y-4 relative z-30"> 

            <div className="flex flex-col items-center space-y-8 ">
            {/* Campo de correo electrónico */}
                <div className="w-full max-w-95">
                    <div className="relative rounded-xl border-3 border-primary">
                        <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-[#E5FFFD] text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A8D8D3]"
                        required
                        />
                        <div className="absolute  w-full h-1.5 bg-secondary rounded-b-xl "></div>
                    </div>
                </div>


            {/* Contraseña */}
                <div className="w-full max-w-95">
                    <div className="relative rounded-xl border-3 border-primary">
                        <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-[#E5FFFD] text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A8D8D3]"
                        required
                        />
                        <div className="absolute  w-full h-1.5 bg-secondary rounded-b-xl "></div>
                    </div>
                </div>
            </div>

            {/* Mensaje de Error de la API */}
            {errorMessage && (
                <div className="text-red-200 bg-red-900/50 p-2 rounded text-center text-sm font-bold">
                    {errorMessage}
                </div>
            )}

            <AuthButton text={loading ? "Cargando..." : "Iniciar sesión"} />
            
            </form> 
        </AuthLayout>
    );
};

export default LoginPage;
