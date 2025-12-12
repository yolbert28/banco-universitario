import React from 'react';

interface AuthButtonProps {
    text: string;
    type?: "submit" | "button" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const AuthButton: React.FC<AuthButtonProps> = ({ 
    text, 
    type = "submit",
    onClick
}) => {
    return (
        
        <div className="flex flex-col items-center space-y-8 mt-8"> 
            <button 
                type={type} 
                onClick={onClick}
                className="bg-accent active:bg-dark-accent font-bold text-lg md:text-lg   text-primary py-4   rounded-md whitespace-nowrap px-28"
            >
                {text}
            </button>
        </div>
    );
};

export default AuthButton;