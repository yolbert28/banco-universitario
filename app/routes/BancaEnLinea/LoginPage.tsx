import React, { useState, useEffect } from "react";
import AuthLayout from "~/components/BancaEnLinea/AuthLayout";
import { useNavigate } from "react-router";
import AuthButton from "~/components/BancaEnLinea/AuthButton";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUserErrorMessage, selectUserLoading, selectIsLogged, clearError } from "~/redux/user/userSlice";
import type { AppDispatch,rootState } from "~/redux/reduxStore";
import { useLocation } from "react-router";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // Estado desde Redux
    const location = useLocation();
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
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

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                dispatch(clearError());
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage, dispatch]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get("registered") === "true") {
            setShowSuccessMsg(true);
        
            const timer = setTimeout(() => {
                setShowSuccessMsg(false);

                navigate("/login", { replace: true });
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [location]);

    return (
        <AuthLayout title="Login" isLogin={true}>
           
            <div className="absolute bottom-0 left-0 w-[200%] h-full bg-primary transform origin-bottom-left rotate-[-20deg] translate-y-83 z-10"></div>
            <div className="absolute bottom-0 left-0 w-[1280%] h-2 bg-tertiary transform origin-bottom-left rotate-[-20deg] translate-y-[280px] -translate-x-[15%] z-20"></div>

           <form onSubmit={handleLogin} className="space-y-4 relative z-30"> 

             {/* mensajes de registro exitoso */}
            {showSuccessMsg && (
                <div className="bg-accent/20 border-l-4 border-accent text-accent p-3 rounded shadow-md animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm font-bold text-center">
                        ¡Registro exitoso! Ya puedes iniciar sesión.
                    </p>
                </div>
            )}

            {/* Mensaje de Error de la API */}
            {errorMessage && (
                <div className="text-red-200 bg-red-900/50 p-2 rounded text-center text-sm font-bold">
                    {errorMessage}
                </div>
            )}

            <div className="flex flex-col items-center space-y-8 ">
            {/* Campo de correo electrónico */}
                <div className="w-full max-w-95 relative overflow-hidden rounded-xl border-3 border-primary">
                    <div>
                        <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-lg bg-[#E5FFFD] text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A8D8D3]"
                        required
                        />
                        <div className="absolute  w-full bottom-0 h-1.5 bg-secondary rounded-b-xl "></div>
                    </div>
                </div>


            {/* Contraseña */}
                <div className="w-full max-w-95 relative overflow-hidden rounded-xl border-3 border-primary">
                    <div>
                        <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded-lg bg-[#E5FFFD] text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A8D8D3]"
                        required
                        />
                        <div className="absolute  w-full bottom-0 h-1.5 bg-secondary rounded-b-xl "></div>
                    </div>
                </div>
            </div>
            <AuthButton text={loading ? "Cargando..." : "Iniciar sesión"} />
            
            </form> 
        </AuthLayout>
    );
};

export default LoginPage;
