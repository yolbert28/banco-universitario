import { LineChart } from "lucide-react";

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string;
  required?: boolean;
  lineNumber?: number;
}

export default function InputField({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = true,
  lineNumber = 1,
}: InputFieldProps) {
  return (
    <div
      className={`w-full relative overflow-hidden border-3 ${error ? "border-red-500" : "border-primary"} rounded-xl`}
    >
      {lineNumber > 1 ? (
        <>
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={lineNumber}
            className="w-full p-3 rounded-lg bg-[#E5FFFD] text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-[#A8D8D3]"
            required={required}
            style={{ resize: "none" }}
          />
          {!error && (
            <div className="absolute w-full bottom-1.5 h-1.5 bg-secondary rounded-b-xl"></div>
          )}
        </>
      ) : (
        <>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...(name === "password" || name === "repeatPassword"
              ? { minLength: 8 }
              : {})}
            className="w-full p-3 rounded-lg bg-[#E5FFFD] text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-[#A8D8D3]"
            required={required}
          />
          {!error && (
            <div className="absolute w-full bottom-0 h-1.5 bg-secondary rounded-b-xl"></div>
          )}
        </>
      )}

      {error && (
        <span className="text-red-500 text-xs ml-2 mt-1 block">{error}</span>
      )}
    </div>
  );
}
