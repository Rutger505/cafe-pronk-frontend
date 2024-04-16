import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
  className,
  ...rest
}: Readonly<InputProps>) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${className} mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2`}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </>
  );
}
