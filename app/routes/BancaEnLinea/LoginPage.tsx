import React, { useState, useEffect } from "react";
import AuthLayout from "~/components/BancaEnLinea/AuthLayout";
import { useNavigate } from "react-router";
import AuthButton from "~/components/BancaEnLinea/AuthButton";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  selectUserErrorMessage,
  selectUserLoading,
  selectIsLogged,
  clearError,
} from "~/redux/user/userSlice";
import type { AppDispatch, rootState } from "~/redux/reduxStore";
import InputField from "~/components/BancaEnLinea/InputField";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Estado desde Redux
  const loading = useSelector((state: rootState) => selectUserLoading(state));
  const errorMessage = useSelector((state: rootState) =>
    selectUserErrorMessage(state)
  );
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

      <form
        onSubmit={handleLogin}
        className="space-y-4 relative max-w-[420px] z-30"
      >
        <div className="flex flex-col items-center space-y-8 ">
          {/* Campo de correo electrónico */}
          <InputField
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            name="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Mensaje de Error de la API */}
        {errorMessage && (
          <div className="text-red-200 bg-red-900/50 p-2 rounded text-center text-sm font-bold">
            {errorMessage}
          </div>
        )}

        <div className="px-8">
          <AuthButton text={loading ? "Cargando..." : "Iniciar sesión"} />
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
