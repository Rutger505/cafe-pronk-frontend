import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className,
  children,
  ...rest
}: Readonly<ButtonProps>) {
  return (
    <button
      className={`${className} rounded-button bg-accent px-4 py-2 text-primary`}
      {...rest}
    >
      {children}
    </button>
  );
}
