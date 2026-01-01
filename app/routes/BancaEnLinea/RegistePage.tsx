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
} from "~/redux/user/userSlice";
import type { AppDispatch, rootState } from "~/redux/reduxStore";
import type { RegisterValues } from "~/api/modules/User";
import { IconProgressCheck, IconX } from "@tabler/icons-react";
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

interface SuccessModalProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  message,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary ">
      <div className="bg-[#E5FFFD] p-6 rounded-xl shadow-2xl max-w-sm w-full border-4 border-secondary transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center w-full">
            <IconProgressCheck
              stroke={2}
              className="text-primary w-12 h-12 mb-3"
            />
            <h2 className="text-xl font-bold text-primary mb-2">
              ¡Registro Exitoso!
            </h2>
            <p className="text-center text-secondary mb-4">{message}</p>
          </div>

          <button
            onClick={onClose}
            className="text-primary hover:text-red-500 transition-colors p-1 absolute top-2 right-2"
          >
            <IconX size={20} />
          </button>
        </div>

        <AuthButton text="Continuar" onClick={onClose} />
      </div>
    </div>
  );
};

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

  useEffect(() => {
    if (registerSuccess) {
      setIsModalOpen(true);

      const timer = setTimeout(() => {
        setIsModalOpen(false);
        dispatch(clearError());
        navigate("/login");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [registerSuccess, dispatch, navigate]);

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name as keyof IFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

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
      <SuccessModal
        message="Tu cuenta ha sido creada con éxito. Serás redirigido en 10 segundos."
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          dispatch(clearError());
          navigate("/login");
        }}
      />

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
