import { TextareaHTMLAttributes } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
}

export default function TextArea({
  id,
  label,
  className = "",
  ...rest
}: Readonly<InputProps>) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        className={`${className} mb-5 rounded-normal border-[1px] border-tertiary px-4 py-2`}
        id={id}
        name={id}
        placeholder={label.replace("*", "")}
        {...rest}
      />
    </>
  );
}
