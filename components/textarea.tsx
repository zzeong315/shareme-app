import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
  placeholder: string;
  register?: UseFormRegisterReturn;
  addClassName: string;
  required: boolean;
  [key: string]: any;
}

const Textarea = ({placeholder, required, addClassName, register}:TextareaProps) => {
  return (
    <div className="w-full">
      <textarea
        className={`mt-1 shadow-sm w-full my-5 rounded-lg p-3 focus:outline-none resize-none whitespace-pre-line ${addClassName}`}
        placeholder={placeholder}
        required={required}
        {...register}
      />
    </div>
  );
};

export default Textarea;
