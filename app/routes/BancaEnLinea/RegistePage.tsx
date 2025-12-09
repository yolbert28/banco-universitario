import React, { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import AuthLayout from "~/components/BancaEnLinea/AuthLayout";
import { useNavigate } from "react-router";
import AuthButton from "~/components/BancaEnLinea/AuthButton";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { register, selectUserErrorMessage, selectUserLoading, selectRegisterSuccess, clearError } from "~/redux/user/userSlice";
import type { AppDispatch, rootState } from '~/redux/reduxStore';
import type { RegisterValues } from '~/api/modules/User';

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

const InputField: React.FC<IInputFieldProps> = ({ name, type = 'text', placeholder, value, onChange, error }) => (
    <div className="w-full max-w-95"> 
        <div className={`relative rounded-xl border-3 ${error ? 'border-red-500' : 'border-[#085F63]'}`}> 
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...(name === 'password' || name === 'repeatPassword' ? { minLength: 8 } : {})}
                className="w-full p-3 rounded-lg bg-[#E5FFFD] text-[#085F63] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A8D8D3]"
                required
            />
            {!error && <div className="absolute w-full h-[6px] bg-[#49BEB7] rounded-b-xl"></div>}
        </div>
        {error && <span className="text-red-500 text-xs ml-2 mt-1 block">{error}</span>}
    </div>
);

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // Estado Redux
    const loading = useSelector((state: rootState) => selectUserLoading(state));
    const apiError = useSelector((state: rootState) => selectUserErrorMessage(state));
    const success = useSelector((state: rootState) => selectRegisterSuccess(state));

    const [formData, setFormData] = useState<IFormData>({
        cedula: '',
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        telefono: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [formErrors, setFormErrors] = useState<Partial<Record<keyof IFormData, string>>>({});

    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    // Si el registro es exitoso, redirigir al login
    useEffect(() => {
        if (success) {
            alert("¡Registro exitoso! Por favor inicia sesión.");
            navigate("/login");
            dispatch(clearError()); 
        }
    }, [success, navigate, dispatch]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Limpiar errores locales al escribir
        if (formErrors[name as keyof IFormData]) {
            setFormErrors(prev => ({ ...prev, [name]: undefined }));
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

    
        const apiPayload: RegisterValues = {
            email: formData.email,
            password: formData.password,
            firts_name: formData.nombres,
            last_name: formData.apellidos,
            document_number: formData.cedula,
            phone_number: formData.telefono,
            user_type: "V" 
        };

        dispatch(register(apiPayload));
    };

    return (
        <AuthLayout title="Registro" isLogin={false}>
            
            <div className="absolute bottom-0 left-0 w-[200%] h-full bg-[#085F63] transform origin-bottom-left rotate-[-20deg] translate-y-90"></div>
            <div className=" absolute bottom-0 left-0 w-[2000%] h-2 bg-[#C7FFFA] transform origin-bottom-left rotate-[-20deg] translate-y-[25%] -translate-x-[12.7%]"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-30 w-full max-w-md mx-auto">
                
                {/* Mensaje de Error API */}
                {apiError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
                        {apiError}
                    </div>
                )}

                <div className="flex flex-col items-center  gap-4">
                    <InputField name="cedula" placeholder="Cédula" value={formData.cedula} onChange={handleChange} error={formErrors.cedula} />
                    <InputField name="nombres" placeholder="Nombres" value={formData.nombres} onChange={handleChange} error={formErrors.nombres} />
                    <InputField name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} error={formErrors.apellidos} />
                    <InputField name="fechaNacimiento" type="date" placeholder="Fecha de nacimiento" value={formData.fechaNacimiento} onChange={handleChange} error={formErrors.fechaNacimiento} />
                    <InputField name="telefono" type="tel" placeholder="Número de teléfono" value={formData.telefono} onChange={handleChange} error={formErrors.telefono} />
                    <InputField name="email" type="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} error={formErrors.email} />
                    <InputField name="password" type="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} error={formErrors.password} />
                    <InputField name="repeatPassword" type="password" placeholder="Repetir contraseña" value={formData.repeatPassword} onChange={handleChange} error={formErrors.repeatPassword} />
                </div>
                
                <AuthButton text={loading ? "Registrando..." : "Registrar"} /> 
                
            </form>
        </AuthLayout>
    );
};

export default RegisterPage;