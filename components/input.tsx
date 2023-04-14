import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  required: boolean;
  [key: string]: any;
}

const Input = ({label, name, type, placeholder, required, register}: InputProps) => {
  return (
    <div className="p-1 rounded-2xl w-full bg-gradient-to-r from-myyellow via-mypink to-mygreen">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        {...register}
        className="p-3 w-full rounded-xl focus:outline-none"
        type={type}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
