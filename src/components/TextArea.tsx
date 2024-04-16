import { HTMLInputTypeAttribute, TextareaHTMLAttributes } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

export default function TextArea({
  label,
  id,
  placeholder,
  required = false,
  className,
  ...rest
}: Readonly<InputProps>) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        className={`${className} mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2`}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </>
  );
}
