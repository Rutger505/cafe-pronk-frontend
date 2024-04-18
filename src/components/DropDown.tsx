import { SelectHTMLAttributes } from "react";

interface DropDownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: string[];
}

export default function DropDown({
  options,
  id,
  label,
  className = "",
  ...rest
}: Readonly<DropDownProps>) {
  return (
    <>
      <label htmlFor={id} className={"block"}>
        {label}
      </label>
      <select
        className={`${className} mb-5 block rounded-normal border-[1px] border-tertiary px-4 py-2`}
        id={id}
        name={id}
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
