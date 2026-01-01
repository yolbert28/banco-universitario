import React, {
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";
import AuthLayout from "~/components/BancaEnLinea/AuthLayout";
import { useNavigate } from "react-router";
import AuthButton from "~/components/BancaEnLinea/AuthButton";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  selectUserErrorMessage,
  selectUserLoading,
  selectRegisterSuccess,
  clearError,
  login,
} from "~/redux/user/userSlice";
import type { AppDispatch, rootState } from "~/redux/reduxStore";
import type { RegisterValues } from "~/api/modules/User";
import InputField from "~/components/BancaEnLinea/InputField";

// Tipos del formulario local
interface IFormData {
  cedula: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  telefono: string;
  email: string;
  password: string;
  repeatPassword: string;
}

interface IInputFieldProps {
  name: keyof IFormData;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

{/*modal de exito 
interface SuccessModalProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}*/}


const RegisterPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Estado Redux
  const loading = useSelector((state: rootState) => selectUserLoading(state));
  const errorMessage = useSelector((state: rootState) =>
    selectUserErrorMessage(state)
  );
  const registerSuccess = useSelector((state: rootState) =>
    selectRegisterSuccess(state)
  );
{/* para el modal de exito
  useEffect(() => {
    if (registerSuccess) {
      navigate("/login");
      setIsModalOpen(true);

      const timer = setTimeout(() => {
        setIsModalOpen(false);
        dispatch(clearError());
        navigate("/login");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [registerSuccess, dispatch, navigate]);
  */}

  useEffect(() => {
    if (registerSuccess) {
        dispatch(login({ email: formData.email, password: formData.password }));
        dispatch(clearError()); 
        navigate("/banca-en-linea");
    }
}, [registerSuccess, navigate, dispatch,]);

  const [formData, setFormData] = useState<IFormData>({
    cedula: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    telefono: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof IFormData, string>>
  >({});

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof IFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                dispatch(clearError());
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage, dispatch])

  const validateForm = () => {
    const errors: Partial<Record<keyof IFormData, string>> = {};
    if (formData.password !== formData.repeatPassword) {
      errors.repeatPassword = "Las contraseñas no coinciden";
    }
    if (formData.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const birthDateISO = new Date(formData.fechaNacimiento).toISOString();

    const apiPayload: RegisterValues = {
      email: formData.email,
      password: formData.password,
      first_name: formData.nombres,
      last_name: formData.apellidos,
      document_number: formData.cedula,
      phone_number: formData.telefono,
      birth_date: birthDateISO,
      user_type: "V",
    };

    dispatch(register(apiPayload));
  };

  const showForm = !registerSuccess;

  return (
    <AuthLayout title="Registro" isLogin={false}>
      {/*modal de exito
      <SuccessModal
        message="Tu cuenta ha sido creada con éxito."
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          dispatch(clearError());
          navigate("/login");
        }}
      />*/}

      <div className="absolute bottom-0 left-0 w-[200%] h-full bg-primary transform origin-bottom-left rotate-[-20deg] translate-y-90"></div>
      <div className=" absolute bottom-0 left-0 w-[2000%] h-2 bg-tertiary transform origin-bottom-left rotate-[-20deg] translate-y-[25%] -translate-x-[12.7%]"></div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 relative z-30 w-full max-w-md mx-auto"
      >
        {errorMessage && (
          <div className="text-red-200 bg-red-900/50 p-2 rounded text-center text-sm font-bold my-4">
            {errorMessage}
          </div>
        )}

        <div className="flex flex-col items-center  gap-4">
          <InputField
            name="cedula"
            placeholder="Cédula"
            value={formData.cedula}
            onChange={handleChange}
            error={formErrors.cedula}
          />
          <InputField
            name="nombres"
            placeholder="Nombres"
            value={formData.nombres}
            onChange={handleChange}
            error={formErrors.nombres}
          />
          <InputField
            name="apellidos"
            placeholder="Apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            error={formErrors.apellidos}
          />
          <InputField
            name="fechaNacimiento"
            type="date"
            placeholder="Fecha de nacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            error={formErrors.fechaNacimiento}
          />
          <InputField
            name="telefono"
            type="tel"
            placeholder="Número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
            error={formErrors.telefono}
          />
          <InputField
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email}
          />
          <InputField
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            error={formErrors.password}
          />
          <InputField
            name="repeatPassword"
            type="password"
            placeholder="Repetir contraseña"
            value={formData.repeatPassword}
            onChange={handleChange}
            error={formErrors.repeatPassword}
          />
        </div>

        <AuthButton text={loading ? "Registrando..." : "Registrar"} />
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
